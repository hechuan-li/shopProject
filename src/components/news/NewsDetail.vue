<template>
  <div class="container">    
        <h1 class="title">{{newsDetail.title}}</h1>
         <div class="small">
           <span>发表时间: {{newsDetail.add_time}}</span>
           <span>点击次数: {{newsDetail.click}}</span>
         </div>
       <hr>
       <div class="content" v-html="newsDetail.content">
              {{newsDetail.content}}
       </div>
    <div class="pinglun">
             <h3>发表评论</h3>
             <hr>
             <van-field v-model="message" rows="2" autosize label="评论" type="textarea" maxlength="120" placeholder="请输入评论" show-word-limit/>
           <van-button type="info" class="setpinglun" @click="addcomments">发表评论</van-button>
    </div>
    <div v-for="(item,i) in comments" :key="i">
            <p class="first">第{{i+1}}楼 用户: {{item.user_name}} 发表时间: {{item.add_time.substring(0,10)}}</p>
            <p>{{item.content}}</p>
    </div>
     <van-button type="warning" class="setpinglun" @click="getmore">加载更多</van-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newsDetail: '',
      message: '',
      comments: [],
      loading: false,
      finished: false,
      pageindex: 1
    }
  },
  created() {
    this.getcomments()
    this.getnewsDet()
    console.log(this.newsID)
  },
  methods: {
    async getnewsDet() {
      const { data: res } = await this.$http.get(`/api/getnew/${this.newsID}`)
      this.newsDetail = res.message[0]
      console.log(this.newsDetail)
      this.newsDetail.add_time = this.newsDetail.add_time.substring(0, 10)
    },
    async getcomments() {
      const { data: res } = await this.$http.get(
        `/api/getcomments/${this.newsID}?pageindex=${this.pageindex}`
      )
      this.comments = res.message
    },
    async getmore() {
      this.pageindex++
      const { data: res } = await this.$http.get(
        `/api/getcomments/${this.newsID}?pageindex=${this.pageindex}`
      )
      this.comments.push(...res.message)
    },
    async addcomments() {
      const { data: res } = await this.$http.post(
        `/api/postcomment/${this.newsID}`,
        {
          content: this.message
        }
      )
      if (res.status === 0) {
        this.$notify({ type: 'success', message: '添加成功' })
      }
    }
  },
  computed: {
    newsID() {
      return this.$route.query.id
    }
  }
}
</script>

<style lang="less" scoped>
.setpinglun {
  width: 100%;
}
.container {
  padding: 0 10px;
}
.small {
  display: flex;
  justify-content: space-between;
  font-size: 8px;
  color: #1989fa;
}
.first {
  background-color: #cccccc;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
}
.title {
   color: #1989fa;
}
</style>
