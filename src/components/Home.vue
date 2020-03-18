<template>
  <div class="container">
    <van-row  class="header">
      <span class="backbtn" @click="goback" v-if="this.$route.path !== '/welcome'">返回</span>
      <van-col span="24">黑马程序员.vant</van-col>
    </van-row>
    <router-view></router-view>
    <van-tabbar>
      <van-tabbar-item icon="home-o" @click="backHome">首页</van-tabbar-item>
      <van-tabbar-item icon="friends-o" dot>会员</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" info="5" @click="jumpToShopcar"
        >购物车</van-tabbar-item>
      <van-tabbar-item icon="search" info="20" @click="jumpToSearch">搜索</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      currentPage: ''
    }
  },
  created: function() {
    this.currentPage = this.$router.query
    console.log(this.currentPage)
  },
  methods: {
    backHome() {
      this.$router.push('/welcome')
    },
    jumpToSearch() {
      this.$router.push('/search')
    },
    jumpToShopcar() {
      this.$router.push('/shopcar')
    },
    goback() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="less" scope>
.header {
  position: relative;
  background-color: #18f;
  height: 30px;
  font-size: 14px;
  text-align: center;
  padding-top: 10px;
}
.backbtn {
  position: absolute;
  left: 5px;
  top: 0;
  background-color: #18f;
  height: 20px;
  font-size: 14px;
  text-align: center;
  padding-top: 10px;
  color: #ffffff;
}
</style>
