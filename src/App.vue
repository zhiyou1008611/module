<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
    </div>-->
    <router-view />
  </div>
</template>

<script>
import storage from "./storage";
// import axios from 'axios'

export default {
  name: "app",
  components: {},
  data() {
    return {
      res:{}
    };
  },
  mounted() {
    this.axios.get('/user/login').then(res=>{
      this.res=res
    })
  }
};
</script>

<style lang="scss">
@import './assets/scss/reset.scss';
@import './assets/scss/config.scss';
</style>
