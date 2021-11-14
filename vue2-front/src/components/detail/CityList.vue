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
        <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          <div v-for="(region, i) in regionData" :key="i" @click="select">
            <Region :region="region"></Region>
          </div>
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
    select() {
      if(!localStorage.getItem('Authorization')){
        alert('접근 권한이 없습니다.');
        this.$router.push('/login')
      }
    }
  },
}
</script>

<style scoped>
.container {
}

p {
  margin-bottom: 0px;
}
</style>