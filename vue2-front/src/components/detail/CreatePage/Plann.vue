<template>
  <div>
    <h2>Ecosystem</h2>
    <div class="sidebar">
      <a href="http://router.vuejs.org/" target="_blank">vue-router</a>
      <a href="http://vuex.vuejs.org/" target="_blank">vuex</a>
      <a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a>
      <a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Plann"
}
</script>

<style scoped>
/**/
/* Add a black background color to the top navigation */
.sidebar {
  background-color: #eee; /* Grey background color */
  overflow: auto;
  border-radius: 0.25em;
  flex: 1; /* take up the full height of the container */
}
.sidebar a {
  background-color: #eee; /* Grey background color */
  color: black; /* Black text color */
  display: block; /* Make the links appear below each other */
  padding: 12px; /* Add some padding */
  text-decoration: none; /* Remove underline from links */
}
.sidebar a:hover {
  background-color: #ccc; /* Dark grey background on mouse-over */
}
.sidebar a.active {
  background-color: #4CAF50; /* Add a green color to the "active/current" link */
  color: white;
}
/**/
</style>