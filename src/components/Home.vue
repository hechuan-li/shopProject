<template>
  <div class="container">
    <van-row>
      <van-col span="24" class="header" @click="backHome">黑马程序员.vant</van-col>
    </van-row>
    <router-view></router-view>
    <van-tabbar>
      <van-tabbar-item icon="home-o" @click="backHome">首页</van-tabbar-item>
      <van-tabbar-item icon="friends-o" dot>会员</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" info="5" @click="jumpToShopcar"
        >购物车</van-tabbar-item
      >
      <van-tabbar-item icon="search" info="20" @click="jumpToSearch"
        >搜索</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {
  methods: {
    backHome() {
      this.$router.push('/')
    },
    jumpToSearch() {
      this.$router.push('/search')
    },
    jumpToShopcar() {
      this.$router.push('/shopcar')
    }
  }
}
</script>

<style lang="less" scope>
.header {
  background-color: #18f;
  height: 40px;
  font-size: 14px;
  text-align: center;
  padding-top: 10px;
}
</style>
