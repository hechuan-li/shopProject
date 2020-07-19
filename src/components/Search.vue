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
    <div class="history" v-if=" goodsList.length === 0">搜索历史  <span class="deletebtn" @click="shanchu"><van-icon name="close"/></span>
    </div>
    <van-divider dashed v-if=" searchhistory.length === 0">暂无搜索历史</van-divider>
     <div v-if=" goodsList.length === 0">
       <van-tag v-for="(item,i) in searchhistory" :key="i" class="tag">{{item}}</van-tag>
     </div>
      <div v-for="item in goodsList" :key="item.id" class="list">
        {{item.name}}
         <span>商品发表时间: {{item.ctime.substring(0,10)}}</span>
      </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      goodsList: [],
      searchhistory: [],
      value: ''
    }
  },
  methods: {
    async onSearch() {
      const { data: res } = await this.$http.get('/api/getprodlist')
      this.goodsList = res.message
      this.searchhistory.push(this.value)
    },
    onCancel() {
      this.goodsList = []
    },
    shanchu() {
      this.searchhistory = []
    }
  }
}
</script>

<style lang="less">
.list {
  font-size: 12px;
  padding: 0 10px;
  margin: 5px 0;
  > span {
    float: right;
    color: #9b9b9b;
  }
}
.history {
  font-size: 14px;
  padding: 0 10px;
}
.tag {
  margin: 0 5px;
}
.deletebtn {
  float: right;
}
</style>
