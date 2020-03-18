<template>
  <div style="padding: 5px">
    <h3 style="margin: 0; padding: 15px 5px; border-bottom: 1px solid #ccc; margin-bottom: 10px">发表评论</h3>
    <!-- 评论输入框 -->
    <div style="border: 1px solid #ccc">
      <van-field
        v-model="message"
        rows="2"
        autosize
        type="textarea"
        maxlength="50"
        placeholder="请输入留言"
        show-word-limit/>
    </div>
    <van-button type="info" block style="margin: 10px 0" @click="handleIssueCommet">发表评论</van-button>
    <!-- 评论展示区 -->
    <div class="message_box" v-for="(item, i) in comments" :key="i">
      <div class="message_info">
        第{{i + 1}}楼 用户: {{item.user_name}} 发表时间: {{item.add_time.substring(0, 10)}}
      </div>
      <div class="message_content">
        {{item.content}}
      </div>
    </div>
    <van-button class="loadMore" plain type="danger" block style="margin: 20px 0" @click="getMoreGoodsComments" v-if="state === 0">加载更多</van-button>
    <p style="text-align: center" v-else>没有更多评论了~~~</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '',
      pageindex: 1,
      comments: [],
      state: 0
    }
  },
  computed: {
    goodsId () {
      return this.$route.query.id
    }
  },
  created () {
    this.getGoodsCommets()
  },
  methods: {
    // 获取商品评论
    async getGoodsCommets () {
      const { data: res } = await this.$http.get(`/api/getcomments/${this.goodsId}?pageindex=` + this.pageindex)
      this.comments = res.message
    },
    // 获取更多商品评论
    async getMoreGoodsComments () {
      this.pageindex += 1
      const { data: res } = await this.$http.get(`/api/getcomments/${this.goodsId}?pageindex=` + this.pageindex)
      if (res.status !== 0) {
        this.state = 1
        return
      }
      res.message.forEach(item => {
        this.comments.push(item)
      })
    },
    // 发表评论
    async handleIssueCommet () {
      const res = await this.$http.post('/api/postcomment/' + this.goodsId, {
        content: this.message
      })
      if (res.status !== 200) {
        return this.$notify({
          message: '评论添加失败',
          color: '#fff',
          background: 'red'
        })
      }
      const com = {
        user_name: '匿名用户',
        add_time: Date.now().toString(),
        content: this.message
      }
      this.comments.unshift(com)
      this.$notify({
        message: '评论添加成功',
        color: '#fff',
        background: 'green'
      })
    }
  }
}
</script>

<style scoped>
.message_info {
  height: 36px;
  background-color: #ccc;
  font-size: 14px;
  line-height: 36px;
}
.message_content {
  padding: 10px;
  font-size: 14px;
}
</style>
