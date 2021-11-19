<template>
  <div>
    <div style="text-align: center">
      <br>
      <br>
      <h1 class="uk-heading-line uk-text-center"><span class="main_title">여행지</span></h1>
    </div>
    <br>
    <section class="py-0">
      <div class="container px-4 px-lg-5 mt-3">
        <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          <div v-for="(region, i) in regionData" :key="i" >
            <Region :region="region"></Region>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Region from '../pages/Region'
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

  },
}
</script>

<style scoped>
.main_title {
  font-size: 3rem;
  font-weight: 900 !important;
}
.container {
}

p {
  margin-bottom: 0px;
}
</style>