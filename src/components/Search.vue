<template>
  <div class="container">
    <form action="/">
      <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      value: ''
    }
  },
  methods: {
    onSearch(val) {
    },
    onCancel() {
    }
  }
}
</script>

<style lang="less">
</style>
