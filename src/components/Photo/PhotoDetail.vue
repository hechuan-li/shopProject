<template>
  <div class="container">
    <h4>{{ photoInfo.title }}</h4>
    <p class>
      <span class="time"
        >发表时间:
        {{ photoInfo.add_time ? photoInfo.add_time.substr(0, 10) : '' }}</span
      >
      <span class="click">点击: {{ photoInfo.click }}</span>
    </p>
    <hr />
    <ul>
      <li v-for="(item, index) in images" :key="index">
        <img :src="item" @click="lookimg" />
      </li>
    </ul>
    <div v-html="photoInfo.content"></div>
    <div class="pinglun">
      <h3>发表评论</h3>
      <hr />
      <van-field
        type="textarea"
        v-model="text"
        label="评论"
        placeholder="请输入评论"
        maxlength="120"
        rows="2"
        autosize
      />
      <van-button type="info" class="setpinglun" @click="addcomments"
        >发表评论</van-button
      >
      <div class="van-list" v-for="(item, index) in comments" :key="index">
        <div class="title">
          第{{ index }}楼 用户：{{ item.user_name }} 发表时间：{{
            item.add_time.substr(0, 10)
          }}
        </div>
        <div class="body">
          {{
            item.content == 'undefined' ? '该用户没有发表评论' : item.content
          }}
        </div>
      </div>
    </div>
    <van-button type="warning" class="setpinglun" @click="getmore"
      >加载更多</van-button
    >
  </div>
</template>

<script>
import { ImagePreview } from 'vant'

export default {
  data() {
    return {
      id: '',
      photoInfo: [],
      text: '',
      pageindex: 1,
      comments: [],
      images: [],
      ImagePreview: ''
    }
  },
  created() {
    // 接受传递参数id
    this.id = this.$route.query.id
    // 在created阶段请求图片详情数据
    this.getPhotoInfo()
    // 在created阶段请求图片地址数据
    this.getImages()
    this.getcomments()
  },
  methods: {
    async getPhotoInfo() {
      const { data: res } = await this.$http.get(`api/getimageInfo/${this.id}`)
      console.log(res)

      if (res.status !== 0) {
        return false
      }
      this.photoInfo = res.message[0]
    },
    async getImages() {
      const { data: res } = await this.$http.get(`api/getthumimages/${this.id}`)
      console.log(res)
      if (res.status !== 0) {
        return false
      }
      for (let index = 0; index < res.message.length; index++) {
        this.images.push(res.message[index].src)
      }
      console.log(this.images)
    },
    async getcomments() {
      const { data: res } = await this.$http.get(
        `api/getcomments/${this.id}?pageindex=${this.pageindex}`
      )
      this.comments = res.message
    },
    async getmore() {
      this.pageindex++
      const { data: res } = await this.$http.get(
        `/api/getcomments/${this.id}?pageindex=${this.pageindex}`
      )
      this.comments.push(...res.message)
    },
    async addcomments() {
      const { data: res } = await this.$http.post(
        `api/postcomment/${this.id}`,
        {
          content: this.text
        }
      )
      if (res.status === 0) {
        // this.$notify({ type: 'success', message: '添加成功' })
        alert('添加成功')
      }
    },
    lookimg(imgs, index) {
      this.ImagePreview = ImagePreview({
        images: this.images,
        closeable: true
      })
    }
  }
}
</script>

<style lang="less" scoped>
h4 {
  width: 100%;
  margin: 20px 0;
  text-align: center;
  font-size: 15px;
  color: #26a2ff;
}
p {
  display: flex;
  justify-content: space-between;
  padding: 0 25px;
  .time,
  .click {
    font-size: 13px;
    color: #8f8f94;
  }
}
ul {
  list-style: none;
  margin: 10px 0;
  padding: 0 5px;
  overflow: hidden;
  li {
    float: left;
    width: 33.3333%;
    padding: 5px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    img {
      width: 100%;
      -webkit-box-shadow: 1px 0 8px 1px rgba(0, 0, 0, 0.3);
      box-shadow: 1px 0 8px 1px rgba(0, 0, 0, 0.3);
    }
  }
}
.title {
  height: 30px;
  background-color: #ccc;
  font-size: 12px;
  line-height: 30px;
}
.body {
  line-height: 35px;
  text-indent: 2em;
  font-size: 12px;
}
.setpinglun {
  width: 100%;
}
</style>
