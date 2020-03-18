<template>
    <div>
      <!-- 下拉刷新功能 -->
      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <!-- 上拉刷新 -->
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <div class="parentBox">
        <van-card v-for="item in goodsList" :key="item.id" @click="clickEvent(item.id)">
        <!-- 图片区 -->
        <div slot="thumb" class="imgBox">
         <img v-lazy="item.img_url">
        </div>
        <!-- 商品描述 -->
        <div slot="desc" class="describeBox">
        {{item.title}}
        </div>
        <!-- 价格 -->
        <div slot="price" class="priceBox">
         <p>{{item.sell_price}}<br><span>热卖中</span></p>
        </div>
        <!-- 原价 -->
        <div slot="origin-price" class="origin-priceBox">
         <p>{{item.market_price}}</p>
        </div>
        <!-- 商品数量 -->
        <div slot="num" class="numBox">
         <p>剩余{{item.stock_quantity}}件</p>
        </div>
        <!-- 标签 -->
      </van-card>
      </div>
      </van-list>
      </van-pull-refresh>
    </div>
</template>

<script>
export default {
  data() {
    return {
      // 上拉页面配置属性
      refreshing: false,
      // 商品列表
      goodsList: [],
      // 请求数据
      num: 1,
      // 下拉页面配置属性
      loading: false,
      finished: false
    }
  },
  created() {
    this.getList()
  },
  methods: {
    // 获取数据
    async getList() {
      const { data: res } = await this.$http.get('/api/getgoods?pageindex=1')
      if (res.status === 0) {
        this.goodsList = res.message
      }
    },
    // 点击事件
    clickEvent(id) {
      this.$router.push({ path: '/goodsDetail/', query: { id: id } })
      console.log(id)
    },
    onLoad() {
      setTimeout(async () => {
        if (this.refreshing) {
          this.goodsList = []
          this.refreshing = false
        }
        this.num = this.num + 1
        const { data: res } = await this.$http.get(
          '/api/getgoods?pageindex=' + this.num
        )
        if (res.status === 0) {
          this.goodsList.push(...res.message)
        }
        this.loading = false

        if (this.num >= 2) {
          this.finished = true
        }
      }, 1000)
    },
    onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功')
        this.refreshing = false
      }, 1000)
    }
  }
}
</script>

<style lang="less" scoped>
.parentBox {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 10px;
}
.van-card:not(:first-child) {
  padding: 0;
  margin: 15px 0;
}
// 卡盒子
.van-card {
  padding: 0;
  margin: 15px 0;
  width: 48%;
  height: 23%;
  border: 1px solid #ccc;
  background-color: #ffffff;
  // 头部区
  .van-card__header {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    // 图片区
    .van-card__thumb {
      width: 100%;
      height: 60%;
      box-sizing: border-box;
      .imgBox {
        width: 100%;
        height: 100%;
        img {
          margin-top: 10px;
          box-sizing: border-box;
          padding: 0 10px;
          width: 100%;
        }
      }
    }
    // 内容区
    .van-card__content {
      position: relative;
      // 商品描述
      .describeBox {
        width: 100%;
        height: 79px;
        padding: 0 10px;
        font-size: 14px;
        padding-top: 5px;
        box-sizing: border-box;
        margin-top: 50px;
      }
      //底部
      .van-card__bottom {
        height: 60px;
        width: 100%;
        background-color: #eeeeee;
        // 价格
        .van-card__price {
          padding-left: 10px;
          color: red;
          font-size: 14px;
          span {
            color: #000;
          }
        }
        // 原价
        .van-card__origin-price {
          position: absolute;
          margin-bottom: 10px;
          color: #000;
          font-size: 14px;
        }
        // 商品数量
        .van-card__num {
          box-sizing: border-box;
          margin-top: 15px;
          font-size: 14px;
          color: #000;
        }
      }
    }
  }
}
</style>
