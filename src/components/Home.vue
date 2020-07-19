<template>
  <div class="container">
    <van-row class="header">
      <span
        class="backbtn"
        @click="goback"
        v-if="this.$route.path !== '/welcome'"
        > Back</span
      >
      <van-col span="24" @click="backHome">Shop Project</van-col>
    </van-row>
    <router-view></router-view>
    <van-tabbar>
      <van-tabbar-item icon="home-o" @click="backHome">Home</van-tabbar-item>
      <van-tabbar-item icon="friends-o" dot>Member</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" :info="num" @click="jumpToShopcar"
        >Cart</van-tabbar-item
      >
      <van-tabbar-item icon="search" info="20" @click="jumpToSearch"
        >Search</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      currentPage: '',
      num: ''
    }
  },
  created: function() {
    this.currentPage = this.$router.query
    this.getItemNum()
  },
  methods: {
    backHome() {
      this.currentPage = window.location.href
      const str = this.currentPage.split('#')[1]
      if (str !== '/welcome') {
        this.$router.push('/welcome')
      }
    },
    jumpToSearch() {
      this.$router.push('/search')
    },
    jumpToShopcar() {
      this.$router.push('/shopcar')
    },
    goback() {
      this.$router.go(-1)
    },
    getItemNum () {
      this.num = window.sessionStorage.getItem('shopItem')
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
