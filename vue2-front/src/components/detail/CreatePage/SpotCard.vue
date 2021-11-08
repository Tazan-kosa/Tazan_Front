<template>
  <li class="spot-card">
    <div>
      <div>
        <div class="centered">
          <img
              :src="spot.img"
              alt="Image"
              loading="lazy">
        </div>
      </div>
    </div>
    <div class="placelistndwrap">
        <span class="placelistnd2" title="">
          <h7>{{ this.spot.title }}</h7>
        </span>
    </div>
    <div class="spotBtnWrap">
      <div
          title="선택목록 장소에 추가"
          class="btn spotbtncss"
          onclick="addSpotToSelectedSpots(1230)"
      >
        <i class="material-icons">add</i>
      </div>
    </div>
  </li>

</template>

<script>
export default {
  name: "SpotCard",
  props:{
    spot:Object
  }
}
</script>

<style scoped>

</style>