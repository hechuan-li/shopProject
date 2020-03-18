<template>
  <div class="box">
    <!-- @click="onClick" -->
    <van-tabs v-model="active" @change="onChange" swipeable animated>
      <van-tab :title="item.title" v-for="item in imgcategorymessage" :key="item.id">
        <div v-for="item in images" :key="item.id" class="container" @click="imgClick(item.id)">
          <van-image lazy-load :src="item.img_url" />
          <div class="container1">
            <h3>{{ item.title }}</h3>
            <p>{{ item.zhaiyao }}</p>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      // 图片分类
      imgcategorymessage: [],
      cateid: '',
      // 图片信息
      images: []
    }
  },
  created() {
    this.getimgcategory()
    this.getallimgs()
  },
  methods: {
    // 获取分类信息
    async getimgcategory() {
      const { data: res } = await this.$http.get('/api/getimgcategory')
      // console.log(res)
      this.imgcategorymessage = res.message
      // 向分类信息内添加全部数据
      this.imgcategorymessage.unshift({ title: '全部', id: 0 })
    },
    // 页面初始获取全部图片信息
    async getallimgs() {
      const { data: res } = await this.$http.get('/api/getimages/0')
      // console.log(res)
      this.images = res.message
    },
    // tab点击事件name是索引值
    async onChange(name, title) {
      // console.log(name)
      this.active = name
      // 根据索引值获取被点击的分类id
      this.cateid = this.imgcategorymessage[name].id
      // console.log(this.cateid)
      //  根据分类的id值获取相应分类图片
      const { data: res } = await this.$http.get(
        `/api/getimages/${this.cateid}`
      )
      // console.log(res)
      // 将图片赋值重新渲染页面
      this.images = res.message
    },
    // 图片点击事件
    imgClick(id) {
      this.$router.push(`/photoDetail/${id}`)
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  position: relative;
  color: #fff;
  font-size: 10px;
}
.container1 {
  position: absolute;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 0 5px;
  width: 100%;
  z-index: 1;
}
.van-image {
  width: 100%;
}
.box {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
