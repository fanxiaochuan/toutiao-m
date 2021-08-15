import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/index.less'
Vue.config.productionTip = false
//  加载全局样式

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
