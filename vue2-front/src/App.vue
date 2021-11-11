<template>
  <div id="app">
    <div>
      <!-- 추후 -->
      <Header></Header>
<!--      <Header v-if="auth=='null'"/>-->
<!--      <Header v-if="auth=='ROLE_USER'"/>-->
<!--      <Header v-if="auth==!'ROLE_ADMIN'"/>-->
        <router-view></router-view>
<!--      <Footer v-if="auth=='null'"/>-->
<!--      <Footer v-if="auth=='ROLE_USER'"/>-->
<!--      <Footer v-if="auth==!'ROLE_ADMIN'"/>-->
      <Footer></Footer>
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