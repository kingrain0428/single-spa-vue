/*
 * @Author: your name
 * @Date: 2020-10-21 16:42:13
 * @LastEditTime: 2020-10-22 10:59:52
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /single-spa-vue/nav/src/main.js
 */
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes: []
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
