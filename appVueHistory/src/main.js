/*
 * @Author: your name
 * @Date: 2020-10-23 10:35:19
 * @LastEditTime: 2020-10-23 10:42:39
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /single-spa-vue/appVueHistory/src/main.js
 */
import './set-public-path';
import Vue from 'vue';
import singleSpaVue from 'single-spa-vue';

import App from './App.vue';
import routes from './router';

Vue.config.productionTip = false;

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    render(h) {
      return h(App, {
        props: {
          // single-spa props are available on the "this" object. Forward them to your component as needed.
          // https://single-spa.js.org/docs/building-applications#lifecyle-props
          name: this.name,
          mountParcel: this.mountParcel,
          singleSpa: this.singleSpa,
        },
      });
    },
    routes
  },
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
