<template>
  <div>
    <div style="text-align: center">
      <br>
      <br>
      <h1>여행지</h1>
    </div>
    <br>
    <section class="py-0">
      <div class="container px-4 px-lg-5 mt-3">
        <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center" v-for="(region, i) in regionData" :key="i">
          <Region :region="region"></Region>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Region from '../pages/Region'
// import regionData from '../../assets/data/get_ko'
import regionData from '../../assets/tazan_City'

export default {
  name: "CityList",
  data() {
    return {
      regionData: regionData
    }
  },
  components: {
    Region
  },
  methods: {
  }
}
</script>

<style scoped>

py-0 {
  margin-bottom: 0px;
  display: flex;
}
</style>