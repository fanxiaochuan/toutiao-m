import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/index.less'
import Vant from 'vant'
import 'vant/lib/index.css'

Vue.use(Vant)
Vue.config.productionTip = false
//  加载全局样式

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
