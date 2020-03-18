import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {
  Button,
  Field,
  List,
  Cell,
  CellGroup,
  Notify,
  NavBar,
  Divider,
  Card
} from 'vant'
import 'vant/lib/index.css'
import './assets/css/index.css'
// 导入 vuex, 用于购物车页面数据同步
import store from './assets/js/shop_car_store'
// 按需导入 vant ui
import './assets/js/vant-import'
// 导入 axios
import axios from 'axios'
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(List)
Vue.use(Field)
Vue.use(Button)
Vue.use(Notify)
Vue.config.productionTip = false
axios.defaults.baseURL = 'http://www.liulongbin.top:3005/'
Vue.prototype.$http = axios
Vue.use(Button)
Vue.use(NavBar)
Vue.use(Notify)
Vue.use(Divider)
Vue.use(Card)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
