<template>
  <div class="container">
    <h1>goodslist</h1>
    <button @click="jumpToGoodsDetail">jump</button>
  </div>
</template>

<script>
export default {
  methods: {
    jumpToGoodsDetail () {
      this.$router.push('/goodsDetail')
    }
  }
}
</script>

<style lang="less">

</style>
