<template>
  <div style="padding: 12px">
    <!-- 商品图片轮播图模块 -->
    <div class="box">
      <van-swipe :autoplay="2000">
      <van-swipe-item v-for="(image, index) in imgArr" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
    </div>
    <!-- 商品购买模块 -->
    <div class="box">
      <p style="padding: 5px 0; border-bottom: 1px solid #ccc">{{title}}</p>
      <div style="padding: 0px 10px; font-size: 14px; color: #999">
        <p>
          市场价:
          <span style="text-decoration: line-through">￥5099</span>
          销售价
          <span style="font-size: 18px; color: #FF0000">￥4799</span>
        </p>
        <div style="display: flex; align-items: center; margin-bottom: 10px">
          <span>购买数量</span><van-stepper v-model="num" />
        </div>
        <van-button type="info" size="normal">立即购买</van-button>
        <van-button type="danger" size="normal">加入购物车</van-button>
      </div>
    </div>
    <!-- 商品参数模块 -->
    <div class="box">
      <p style="padding: 5px 0; border-bottom: 1px solid #ccc">商品参数</p>
      <div style="padding: 0px 10px; font-size: 14px; color: #999; border-bottom: 1px solid #ccc; margin-bottom: 10px">
        <p>商品货号: </p>
        <p>库存情况: </p>
        <p>上架时间: </p>
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
      imgArr: [1, 2, 3],
      title: '佳能',
      num: ''
    }
  },
  created () {
    this.getGoodsDetail()
  },
  methods: {
    getGoodsDetail () {
    },
    handleToGoodsInfo () {
      this.$router.push('/goodsinfo')
    },
    handleToGoodsComments () {
      this.$router.push('/goodscomments')
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
