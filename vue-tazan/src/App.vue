<template>
  <div>
    <Header />
    <!-- <Main /> -->
    <TourList/>
    <Footer />
  </div>
  
</template>
<script>
import TourList from './components/list/TourList.vue'
// import Main from './components/main/main.vue'
import Header from './components/main/header.vue'
import Footer from './components/main/footer.vue'
export default {
  name: 'App',
  components: {
    // Main,
    TourList,
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
  color: #2C3E50;
  margin-top: 60px;
}

</style>
