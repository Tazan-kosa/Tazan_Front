<template>
  <div>
    <TravelList :items="TourItemData"/>
  </div>
</template>

<script>
import TourItemData from '../list/sample'
import TravelList from './TravelList.vue'
export default{
  name: 'ReviewDetail',
  data() {
    return {
      TourItemData: TourItemData,
    }
  },
  components: {
    TravelList
  }
}
</script>

<style>

</style>