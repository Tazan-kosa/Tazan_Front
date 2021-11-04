<template>
  <div>
    <DetailPage/>
<!--    <DetailSelecDome/>-->
<!--    <DetailSelection/>-->
    <Box/>
  </div>
</template>

<script>
import DetailPage from "../detail/DetailPage";
import Box from '../list/Box'
// import DetailSelection from "../detail/DetailSelection";
// import DetailSelecDome from "../detail/DetailSelecDome";
export default {
  name: "Detail",
  components: {
    // DetailSelecDome,
    // DetailSelection,
    DetailPage,
    Box
  }
}
</script>

<style scoped>

</style>