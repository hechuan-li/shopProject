<template>
  <div class="container">
    <h1>photolist</h1>
    <button @click="jumpToPhotoDetail">jump</button>
  </div>
</template>

<script>
export default {
  methods: {
    jumpToPhotoDetail() {
      this.$router.push('/photoDetail')
    }
  }
}
</script>

<style lang="less">
</style>
