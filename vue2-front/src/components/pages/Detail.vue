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
header {
  background: #008E9B;
}

::-webkit-input-placeholder {
  text-align: center;
}

:-moz-placeholder { /* Firefox 18- */
  text-align: center;
}

::-moz-placeholder { /* Firefox 19+ */
  text-align: center;
}

:-ms-input-placeholder {
  text-align: center;
}
</style>