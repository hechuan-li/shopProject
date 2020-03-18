import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './assets/css/index.css'
// 导入 vuex, 用于购物车页面数据同步
import store from './assets/js/shop_car_store'
// 按需导入 vant ui
import './assets/js/vant-import'
// 导入 axios
import axios from 'axios'
// import Vant from 'vant'
import 'vant/lib/index.css'
import Vant from 'vant/lib/vant.js'

Vue.use(Vant)
Vue.config.productionTip = false
axios.defaults.baseURL = 'http://www.liulongbin.top:3005/'
Vue.prototype.$http = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
