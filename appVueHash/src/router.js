/*
 * @Author: your name
 * @Date: 2020-10-21 17:13:34
 * @LastEditTime: 2020-10-22 11:06:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /single-spa-vue/appVueHash/src/router.js
 */
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    // mode: 'hash',
    // base: ProcessingInstruction.env.BASE_URL,
    routes: [
        {
            path: '/home',
            name: 'home',
            component: () => import(/* webpackChunkName: "home" */ './views/Home.vue')
        }
    ]
})