<template>
  <div style="padding: 10px">
    <van-pull-refresh @refresh="onRefresh" v-model="isLoading">
      <!-- 购物车商品列表 -->
      <div v-if="$store.state.goods.length !== 0">
        <van-swipe-cell v-for="(item, i) in shopCarList" :key="i">
          <van-card
            :num="item.buy_num"
            :price="item.sell_price"
            :title="item.title"
          >
            <template v-slot:thumb>
              <a href="javascript:;" @click="handleToGoodsDetail(item.id)"
                ><img :src="item.thumb_path" style="width: 90px"
              /></a>
            </template>
            <template v-slot:footer>
              <div>
                <van-stepper v-model="item.buy_num" min="1" />
              </div>
            </template>
          </van-card>
          <van-button
            slot="right"
            square
            text="删除"
            type="danger"
            class="delete-button"
            @click="handleGoodsDelete(item.id)"
          />
        </van-swipe-cell>
      </div>
      <!-- 购物车为空时可跳转到商品列表页按钮 -->
      <div
        style="padding: 260px 0; text-align: center"
        v-else
        @click="handleToGoodsList"
      >
        <van-button plain type="warning">购物车空了, 去添加~~~</van-button>
      </div>
    </van-pull-refresh>
    <!-- 订单提交按钮 -->

    <van-submit-bar
      :price="total * 100"
      button-text="提交订单"
      @submit="onSubmit"
    >
      <van-icon name="arrow-left" @click="backHome"
        >返回</van-icon
      ></van-submit-bar
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      shopCarList: [],
      isLoading: false,
      goodsItem: ''
    }
  },
  computed: {
    total() {
      let total = 0
      this.shopCarList.forEach(item => {
        total += item.sell_price * item.buy_num
      })
      return total
    }
  },
  created() {
    this.getShopCarInfo()
  },
  methods: {
    // 获取购物车信息
    async getShopCarInfo() {
      if (this.$store.state.goods.length === 0) return
      const ids = this.$store.getters.ids
      const { data: res } = await this.$http.get(
        '/api/goods/getshopcarlist/' + ids
      )

      this.goodsItem = res.message.length
      res.message.forEach((item, i) => {
        item.buy_num = this.$store.state.goods[i].buy_num
      })
      this.shopCarList = res.message
    },
    // 提交订单
    onSubmit() {
      this.$toast({
        message: 'I know you have not money~~',
        icon: 'like-o'
      })
    },
    // 购物车为空时可跳转到商品列表页
    handleToGoodsList() {
      this.$router.push('/goodsList')
    },
    // 点击图片跳转到商品详情页
    handleToGoodsDetail(id) {
      this.$router.push('/goodsdetail/' + id)
    },
    // 下拉刷新
    onRefresh() {
      this.getShopCarInfo()
      this.isLoading = false
    },
    // 删除商品
    handleGoodsDelete(id) {
      this.$store.commit('decrease', id)
      this.getShopCarInfo()
    },
    backHome() {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.van-card__price-currency,
.van-card__price-integer {
  color: red;
}
.van-card__content {
  justify-content: start;
}
.van-button {
  height: 100%;
}
.van-swipe-cell {
  margin-bottom: 10px;
}
</style>
