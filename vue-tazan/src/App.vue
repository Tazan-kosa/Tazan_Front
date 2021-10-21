<template>
  <div>
    <Main />

  </div>
  
</template>
<script>
// import TourList from './components/list/TourList.vue'
import Main from './components/main/main.vue'
export default {
  name: 'App',
  components: {
    Main
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