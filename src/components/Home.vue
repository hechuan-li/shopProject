<template>
  <div class="container">
    <h1>home</h1>
    <button @click="jumpToNewsList">news</button>
    <button @click="jumpToPhotoList">photo</button>
    <button @click="jumpToGoodsList">goods</button>
    <button @click="jumpToSearch">search</button>
    <button @click="jumpToShopcar">shopcar</button>
  </div>
</template>

<script>
export default {
  methods: {
    jumpToNewsList () {
      this.$router.push('/newsList')
    },
    jumpToPhotoList () {
      this.$router.push('/photoList')
    },
    jumpToGoodsList () {
      this.$router.push('/goodsList')
    },
    jumpToSearch () {
      this.$router.push('/search')
    },
    jumpToShopcar () {
      this.$router.push('/shopcar')
    }
  }
}
</script>

<style lang="less">
</style>
