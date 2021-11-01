<template>
  <div id="app">
    <Header/>
    <router-view></router-view>
    <Footer/>
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