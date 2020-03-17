import Vue from 'vue'
import App from './App.vue'
import router from './router'

import {
  Button,
  Field,
  List,
  Cell,
  CellGroup,
  Notify
} from 'vant'
import 'vant/lib/index.css'

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

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
