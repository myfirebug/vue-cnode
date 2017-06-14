import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import stroe from './store/index.js'

new Vue({
  el: '#app',
  router :router,
  store : stroe,
  render: h => h(App)
})
