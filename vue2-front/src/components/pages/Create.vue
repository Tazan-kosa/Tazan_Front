<script src="../../assets/data/get_ko.js"></script>
<template>
  <div>
<!--    <PlaceAndDate/>-->
<!--    <Plann/>-->
    <Unkown :region="this.$route.params.region"/>
  </div>
</template>

<script>
// import PlaceAndDate from "../detail/CreatePage/PlaceAndDate";
// import Plann from "../detail/CreatePage/Plann";
import Unkown from "../detail/CreatePage/Unkown";
export default {
  name: "Create",
  components: {
    Unkown
    // Plann,
    // PlaceAndDate
  },
}
</script>

<style scoped>

</style>