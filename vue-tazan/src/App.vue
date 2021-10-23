<template>

  <div id="app">
    <Header/>
    <Main/>
    <TourList/>
    <Footer/>
  </div>

</template>
<script>

import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

// import TourList from './components/list/TourList.vue'

import Main from './components/main/main.vue'



export default {
  name: 'App',
  components: {
    // Main,
    Header,
    Footer

  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  color: #2c3e50;
  /*margin-top: 60px;*/

}

</style>
