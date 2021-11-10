<template>
  <div id="app">
    <div>
<!--      <Header v-if="auth=="/>-->
      <Header></Header>
      <router-view class="main-page"></router-view>
<!--      <Footer v-if="auth=='ROLE_ADMIN'"/>-->
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  }
}
</script>

<style>
</style>