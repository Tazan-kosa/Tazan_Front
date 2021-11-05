<template>
  <div>
    <DetailPage/>
<!--    <DetailSelecDome/>-->
<!--    <DetailSelection/>-->
<!--    <Box/>-->
    <CityList/>
  </div>
</template>

<script>
import DetailPage from "../detail/DetailPage";
import CityList from "../detail/CityList";
// import Box from '../list/Box'
// import DetailSelection from "../detail/DetailSelection";
// import DetailSelecDome from "../detail/DetailSelecDome";

export default {
  name: "Detail",
  components: {
    CityList,
    // DetailSelecDome,
    // DetailSelection,
    DetailPage,
    // Box
  }
}
</script>

<style scoped>

</style>