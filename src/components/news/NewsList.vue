<template>
  <div class="container">
   <van-nav-bar  title="黑马程序员.vant" left-text="返回"  left-arrow @click-left="onClickLeft" @click-right="onClickRight"/>
   <van-card   :title="item.title" :thumb="item.img_url" v-for="item in NewList" :key="item.id" centered @click-thumb="jumpToNewsDetail(item.id)">
      <div slot="price">
        <p>发表时间:{{item.add_time}} </p>
      </div>
      <div slot="footer">
        <p >点赞:{{item.click}} </p>
      </div>
   </van-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 所有新闻资讯列表
      NewList: []
    }
  },
  created() {
    this.getNewList()
  },
  methods: {
    jumpToNewsDetail (id) {
      this.$router.push('/newsDetail?id=' + id)
    },
    // 获取所有新闻资讯列表
    async getNewList() {
      const { data: res } = await this.$http.get('/api/getnewslist')
      console.log(res)
      this.NewList = res.message
      this.NewList.forEach((item) => {
        item.add_time = res.message[0].add_time.substring(0, 10)
      })
      // console.log(this.NewList)
      // this.getNewList()
    },
    onClickLeft() {},
    onClickRight() {}
  }
}
</script>

<style lang="less" scoped>
.van-nav-bar {
  background-color: #1989fa;
  .van-nav-bar__title{
     color: #ffff  !important;
  }
 .van-icon{
     color: #ffff  !important;
  }
  .van-nav-bar__text{
     color: #ffff  !important;
  }
}
.van-card__bottom {
    padding-top: 30px;
    .van-card__price-integer{
    font-size: 12px !important;
    }
    p{
      color: #226aff;
    }
  }
.van-card__title {
  font-size: 16px  !important;
  font-weight: 700;
  height: 17px;
  word-wrap: nowrap;
}

</style>
