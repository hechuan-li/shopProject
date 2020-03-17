<template>
  <div class="container">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(img, index) in swipeImg" :key="index">
        <img :src="img" class="imges" />
      </van-swipe-item>
    </van-swipe>
    <van-grid :gutter="10" :column-num="2">
      <van-grid-item @click="jumpToNewsList">
        <img :src='icons.icon1' class="iconImg" />
        <p>新闻资讯</p>
      </van-grid-item>
      <van-grid-item @click="jumpToPhotoList">
        <img :src='icons.icon2'  class="iconImg" />
        <p>图片分享</p>
      </van-grid-item>
      <van-grid-item @click="jumpToGoodsList">
        <img :src='icons.icon3'  class="iconImg" />
        <p>商品购买</p>
      </van-grid-item>
      <van-grid-item @click="jumpToNewsList">
        <img :src='icons.icon4'  class="iconImg" />
        <p>留言反馈</p>
      </van-grid-item>
      <van-grid-item @click="jumpToNewsList">
        <img :src='icons.icon5'  class="iconImg" />
        <p>视频专区</p>
      </van-grid-item>
      <van-grid-item @click="jumpToNewsList">
        <img :src='icons.icon6'  class="iconImg" />
        <p>联系我们</p>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      swipeImg: [
        'http://www.itcast.cn/subject/webzly/images/1.jpg',
        'http://www.itcast.cn/images/newslide/homepageandphone/20185609105606277.jpg'
      ],
      icons: {
        icon1: require('../../public/img/menu1.png'),
        icon2: require('../../public/img/menu2.png'),
        icon3: require('../../public/img/menu3.png'),
        icon4: require('../../public/img/menu4.png'),
        icon5: require('../../public/img/menu5.png'),
        icon6: require('../../public/img/menu6.png')
      }
    }
  },
  methods: {
    jumpToNewsList() {
      this.$router.push('/newsList')
    },
    jumpToPhotoList() {
      this.$router.push('/photoList')
    },
    jumpToGoodsList() {
      this.$router.push('/goodsList')
    }
  }
}
</script>

<style lang="less" scoped>
.van-swipe {
  height: 200px;
  background-color: #eee;
}
.imges {
  width: 375px;
  height: 100%;
}
.iconImg {
  width: 60px;
  height: 60px;
}
</style>
