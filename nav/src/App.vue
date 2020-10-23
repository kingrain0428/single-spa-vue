<!--
 * @Author: your name
 * @Date: 2020-10-21 16:42:13
 * @LastEditTime: 2020-10-22 10:59:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /single-spa-vue/nav/src/App.vue
-->
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/app-vue-hash/">app-vue-hash</router-link> |
      <router-link to="/app-vue-history/">app-vue-history</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

// export default {
//   name: 'App',
//   components: {

//   }
// }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
