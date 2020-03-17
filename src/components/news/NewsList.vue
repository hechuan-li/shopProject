<template>
  <div class="container">
    <h1>newslist</h1>
    <button @click="jumpToNewsDetail">jump</button>
  </div>
</template>

<script>
export default {
  methods: {
    jumpToNewsDetail () {
      this.$router.push('/newsDetail')
    }
  }
}
</script>

<style lang="less">

</style>
