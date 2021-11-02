<template>
  <div>
    <DetailPage/>
<!--    <DetailSelecDome/>-->
    <DetailSelection/>
  </div>
</template>

<script>
import DetailPage from "../detail/DetailPage";
import DetailSelection from "../detail/DetailSelection";
// import DetailSelecDome from "../detail/DetailSelecDome";
export default {
  name: "Detail",
  components: {
    // DetailSelecDome,
    DetailSelection,
    DetailPage
  }
}
</script>

<style scoped>

</style>