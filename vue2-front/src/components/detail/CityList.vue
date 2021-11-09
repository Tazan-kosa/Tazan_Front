<template>
  <div class="row" id="cityList">
    <div>
      <h1>여행지</h1>
    </div>
    <br>
    <div class="col s12 m6 13" v-for="(region,i) in regionData" :key="i">
      <Region :region="region"></Region>
    </div>
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
      regionList: ['경기', '제주', '강원'],
      regionData: regionData
    }
  },
  components: {
    Region
  }
}
</script>

<style scoped>

div {
  border: 1px solid black;
  padding: 0.25em;
  margin: 0.25em;
  border-radius: 0.25em;
}

.row {
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
}
.row .col {
  float: left;
  box-sizing: border-box;
  padding: 0 0.75rem;
  min-height: 1px;
}
.row .col.s12 {
  width: 100%;
  margin-left: auto;
  left: auto;
  right: auto;
}

.div {
  margin: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
}

.citynamefont {
  font-size: 1.4rem;
  /* font-weight: 600; */
  font-family: 'Montserrat', sans-serif;
  overflow-x: hidden;
  overflow-y: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.b {
  font-weight: bolder;
}
.h6 {
  line-height: 1.4;
}
@media (max-width: 670px) {
  .article h6 {
    margin: 3px 0 0 1px !important;
    font-size: 16px;
  }
}

city-card-contents-subtitle {
  /* font-size: 0.9rem; */
  margin: 8px 0 !important;
  /* font-weight: 400; */
  color: #333;
}
</style>