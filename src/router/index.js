import Vue from 'vue'
import VueRouter from 'vue-router'
import GoodsDetail from '../assets/goods/GoodsDetail.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/goodsdetail',
  component: GoodsDetail
}]

const router = new VueRouter({
  routes
})

export default router
