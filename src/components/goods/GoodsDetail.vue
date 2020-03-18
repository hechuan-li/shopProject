<template>
  <div style="padding: 12px">
    <!-- 商品图片轮播图模块 -->
    <div class="box" style="text-align: center">
      <van-swipe :autoplay="2000">
      <van-swipe-item v-for="(image, index) in goodsImgs" :key="index">
        <img v-lazy="image.src" />
      </van-swipe-item>
    </van-swipe>
    </div>
    <!-- 商品购买模块 -->
    <div class="box">
      <p style="padding: 5px 0; border-bottom: 1px solid #ccc">{{goodsDetail.title}}</p>
      <div style="padding: 0px 10px; font-size: 14px; color: #999">
        <p>
          市场价:
          <span style="text-decoration: line-through">￥{{goodsDetail.market_price}}</span>
          销售价
          <span style="font-size: 18px; color: #FF0000">￥{{goodsDetail.sell_price}}</span>
        </p>
        <div style="display: flex; align-items: center; margin-bottom: 10px">
          <span>购买数量</span><van-stepper v-model="targetGoods.buy_num"  min="1" :max="goodsDetail.stock_quantity" />
        </div>
        <van-button type="info" size="normal">立即购买</van-button>
        <van-button type="danger" size="normal" @click="handleAddGoodsToShopCar">加入购物车</van-button>
      </div>
    </div>
    <!-- 商品参数模块 -->
    <div class="box">
      <p style="padding: 5px 0; border-bottom: 1px solid #ccc">商品参数</p>
      <div style="padding: 0px 10px; font-size: 14px; color: #999; border-bottom: 1px solid #ccc; margin-bottom: 10px">
        <p>商品货号: {{goodsDetail.goods_no}}</p>
        <p>库存情况: {{goodsDetail.stock_quantity}}件</p>
        <p>上架时间: {{goodsDetail.add_time}}</p>
      </div>
      <van-button plain type="info" block @click="handleToGoodsInfo">图文介绍</van-button>
      <van-button plain type="danger" block @click="handleToGoodsComments">商品评论</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      targetGoods: {
        goodsId: '',
        buy_num: 1
      },
      goodsImgs: [],
      goodsDetail: {}
    }
  },
  created () {
    this.getGoodsDetail()
    this.getGoodsImgs()
  },
  methods: {
    // 获取商品详情
    async getGoodsDetail () {
      this.targetGoods.goodsId = this.$route.params.id
      const { data: res } = await this.$http.get('/api/goods/getinfo/' + this.targetGoods.goodsId)
      this.goodsDetail = res.message[0]
    },
    // 获取商品图片
    async getGoodsImgs () {
      this.targetGoods.goodsId = this.$route.params.id
      const { data: res } = await this.$http.get('/api/getthumimages/' + this.targetGoods.goodsId)
      this.goodsImgs = res.message
    },
    // 跳转到图文介绍页
    handleToGoodsInfo () {
      this.$router.push('/goodsinfo/' + this.targetGoods.goodsId)
    },
    // 跳转到商品评论页
    handleToGoodsComments () {
      this.$router.push('/goodscomments/' + this.targetGoods.goodsId)
    },
    // 添加商品到购物车
    handleAddGoodsToShopCar () {
      const i = this.$store.state.goods.findIndex(item => {
        return item.goodsId === this.targetGoods.goodsId
      })
      this.$store.commit('increment', { good: this.targetGoods, i })
      this.$toast.success('添加成功')
    }
  }
}
</script>

<style scoped>
.box {
  padding: 12px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
}
.van-swipe {
  margin-bottom: 10px;
}
.van-stepper {
  display: inline-block;
  margin-left: 10px;
}
.van-button {
  margin-right: 10px;
  margin-bottom: 10px;
}
</style>
