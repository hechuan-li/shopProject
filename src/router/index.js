import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'

import ShopCar from '../components/ShopCar.vue'
import Search from '../components/Search.vue'
import NewsList from '../components/news/NewsList.vue'
import NewsDetail from '../components/news/NewsDetail.vue'
import PhotoList from '../components/Photo/PhotoList.vue'
import PhotoDetail from '../components/Photo/PhotoDetail.vue'
import GoodsList from '../components/goods/GoodsList.vue'
import GoodsDetail from '../components/goods/GoodsDetail.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home },
  { path: '/shopcar', component: ShopCar },
  { path: '/search', component: Search },
  { path: '/newsList', component: NewsList },
  { path: '/newsDetail', component: NewsDetail },
  { path: '/photoList', component: PhotoList },
  { path: '/photoDetail', component: PhotoDetail },
  { path: '/goodsList', component: GoodsList },
  { path: '/goodsDetail', component: GoodsDetail }
]

const router = new VueRouter({
  routes
})

export default router
