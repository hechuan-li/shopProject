import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 导入 vuex, 用于购物车页面数据同步
import store from './assets/js/shop_car_store'
// 按需导入 vant ui
import './assets/js/vant-import'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
