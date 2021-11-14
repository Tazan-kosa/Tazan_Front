<template>
  <div id="app">
    <div>
<!--      <Header></Header>-->
      <Header v-show="auth!=='ROLE_ADMIN'"/>
      <router-view></router-view>
      <Footer v-show="auth!=='ROLE_ADMIN'"/>
    </div>
  </div>
</template>

<script>
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import axios from "axios";

export default {
  data() {
    return {
      auth: localStorage.getItem(('auth')),
    }
  },
  name: 'App',
  components: {
    Header,
    Footer,
  },
  axios
}
</script>

<style>
</style>