import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
<<<<<<< HEAD

Vue.config.productionTip = false
axios.defaults.baseURL = 'http://www.liulongbin.top:3005/'
Vue.prototype.$http = axios
=======
>>>>>>> ce6c8a57061ed6c235334dd162ca6f667d685135

Vue.config.productionTip = false
axios.defaults.baseURL = 'http://www.liulongbin.top:3005/'
Vue.prototype.$http = axios

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
