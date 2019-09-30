// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'styles/reset.css'
import 'styles/iconfont.css'
import 'styles/border.css'
import fastClick from 'fastclick'
// import socketio from 'socket.io-client'
import VueSocketio from 'vue-socket.io'
// import store from '@/store'

Vue.config.productionTip = false
fastClick.attach(document.body)

Vue.use(new VueSocketio({
  debug: true,
  connection: 'http://localhost:8081',
  // vuex: {
  //   store
  //   // actionPrefix: 'SOCKET_',
  //   // mutationPrefix: 'SOCKET_'
  // },
  options: { path: '/api' } // Optional options
}))
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // store,
  components: { App },
  template: '<App/>'
})
