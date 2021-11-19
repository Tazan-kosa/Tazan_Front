<template>
  <div>
    <div class="spot-card" v-for="(spot, i) in recomList" :key="i">
      <SpotCard :spot="spot" @PutList="PutLists"/>
    </div>
  </div>
</template>

<script>
import SpotCard from "./SpotCard";
export default {
  name: "RecomPlace",
  components: {
    SpotCard
  },
  props: {
    recomList: Array,
  },
  methods:{
    PutLists(reciv){
      this.$emit('recived', reciv)
    }
  }
}
</script>

<style scoped>
/**/
div {
  padding: 0.25em;
  margin: 0.25em;
  border-radius: 0.25em;
}
div {
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
}
.spot-card {
  width: 100%;
}

img {
  border-style: none;
  vertical-align: middle;
  max-width: 100%;
  height: auto;
  box-sizing: border-box;

}

.spot-card img {
  width: 80px !important;
  height: 80px !important;
  max-width: none !important;
  object-fit: cover;
}

@media (max-width: 1600px) and (min-width: 600px) {
  #spotsList img {
    width: 65px !important;
    height: 65px !important;
  }
}

span {
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
}

</style>