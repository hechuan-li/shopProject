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
<<<<<<< HEAD
=======
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
>>>>>>> ce6c8a57061ed6c235334dd162ca6f667d685135
    }
  }
}
</script>

<style lang="less">
</style>
