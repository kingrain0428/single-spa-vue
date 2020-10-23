<!--
 * @Author: your name
 * @Date: 2020-10-21 16:49:21
 * @LastEditTime: 2020-10-22 11:09:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /single-spa-vue/appVueHash/src/App.vue
-->
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home">Home</router-link> |
    </div>
    <router-view/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

// export default {
//   name: 'App',
//   components: {
//     HelloWorld
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
