<template>
  <div style="padding: 10px">
    <h3 style="text-align: center; color: deepskyblue">{{goodsInfo.title}}</h3>
    <p v-html="goodsInfo.content"></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goodsInfo: {}
    }
  },
  computed: {
    goodsId () {
      return this.$route.params.id
    }
  },
  created () {
    this.getGoodsInfo()
  },
  methods: {
    // 获取商品图文信息
    async getGoodsInfo () {
      const { data: res } = await this.$http.get('/api/goods/getdesc/' + this.goodsId)
      this.goodsInfo = res.message[0]
    }
  }
}
</script>

<style scoped>

</style>
