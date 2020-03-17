import Vue from 'vue'
import VueRouter from 'vue-router'
import GoodsDetail from '../assets/goods/GoodsDetail.vue'
import GoodsInfo from '../assets/goods/goodsDetails/GoodsInfo.vue'
import GoodsComments from '../assets/goods/goodsDetails/GoodsComments.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/goodsdetail',
  component: GoodsDetail
}, {
  path: '/goodsinfo',
  component: GoodsInfo
}, {
  path: '/goodscomments',
  component: GoodsComments
}]

const router = new VueRouter({
  routes
})

export default router
