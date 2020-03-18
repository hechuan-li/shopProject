<template>
  <div class="container">
    <!-- 下拉加载start -->
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh" >
   <!-- 新闻资讯列表start -->
   <van-card    :thumb="item.img_url" v-for="item in NewList" :key="item.id"  @click-thumb="jumpToNewsDetail(item.id)">
      <div slot="title" @click="jumpToNewsDetail(item.id)">
        <p>{{item.title}} </p>
      </div>
      <div slot="bottom" class="btm">
        <p>发表时间:{{item.add_time}} </p>
         <p class="btm1">点赞:{{item.click}} </p>
      </div>
   </van-card>
   <!-- 新闻资讯列表end -->

    </van-pull-refresh>
   <!-- 下拉加载end -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 所有新闻资讯列表
      NewList: [],
      isLoading: true
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
      this.NewList = res.message
      this.NewList.forEach((item) => {
        item.add_time = res.message[0].add_time.substring(0, 10)
      })
    },
    onClickLeft() {},
    onClickRight() {},
    // 下拉刷新
    onRefresh(isLoading) {
      if (!isLoading) {
        setTimeout(() => {
          this.$toast.success('刷新成功')
          this.isLoading = false
        }, 1000)
      }
      this.isLoading = true
      this.getNewList()
    }
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
.van-card {
  position: relative;
  height: 65px;
.van-card__content  {
  font-size: 14px  !important;
  // max-height: 30px !important;
  height: 20px  !important;
  font-weight: 700;
  cursor: pointer;
  div{
        width: 310px !important;
   height: 40px !important;
  p {
    margin: 0;
    display: inline-block;
     white-space: nowrap;
  }
  }
}
.van-card__thumb {
    cursor: pointer;
    width: 50px !important;
  height: 50px !important;
}
.btm {
  position: absolute;
  top: 32px;
  left: 0px;
  font-size: 12px;
  color: #558cff;
  .btm1 {
    padding-left: 120px;
  }
}
}

</style>
