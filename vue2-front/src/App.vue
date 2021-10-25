<template>

  <div id="app">
    <Header/>
    <Main/>
    <TourList/>
    <ReviewDatail/>
    <Footer/>
  </div>

</template>
<script>

import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

import TourList from './components/list/TourList.vue'
import ReviewDatail from './components/review/ReviewDetail.vue'

//import Main from './components/main/main.vue'



export default {
  name: 'App',
  components: {
    // Main,
    Header,
    Footer,
    TourList,
    ReviewDatail

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
