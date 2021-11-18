<template>
  <div class="spot-card">
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
    <div class="placelistndwrap ">
<!--      uk-hidden-->
        <span class="placelistnd2" title="">
          <h6>{{ this.spot.title }}</h6>
        </span>
    </div>
    <div class="spotBtnWrap">
      <div
          title="선택목록 장소에 추가"
          onclick=""
      >
        <button class="material-icons" @click="planList_add">add</button>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "SpotCard",
  methods: {
    planList_add () {
      this.$emit("PutList",this.spot)
    }
  },
  props:{
    spot:Object
  }
}
</script>

<style scoped>


ul {
  list-style: none;
  border: 0;
  vertical-align: baseline;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
  display: block;
}
ul-style {
  padding: 0;
  margin: 0;
}

div {
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
}


/**/
.spot-card {
  box-shadow: 0px 8px 32px 0px;
  backdrop-filter: blur(4px);
  background: rgba(255, 255, 255, 0.25);
  border-radius: 4px;
  border-width: initial !important;
  border-style: none !important;
  border-color: initial !important;
  border-image: initial !important;
  margin: 16px 1px !important;
  display: flex;
  /*position: relative;*/
  justify-content: left;
  width: 100%;
  /*overflow: hidden;*/
}
.placelistndwrap {
  width: 100%;
}
img {
  border-style: none;
  vertical-align: middle;
  max-width: 100%;
  height: auto;
  box-sizing: border-box;
}

img {
  width: 80px !important;
  height: 80px !important;
  max-width: none !important;
  object-fit: cover;
  /*overflow: hidden;*/
}


#spotsList img {
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

/*이름*/
.placelistndwrap {
  position: relative;
  padding: 8px !important;
  width: calc(100% - 80px);
}

@media (max-width: 1600px) and (min-width: 600px) {

  .placelistndwrap {
    width: calc(100% - 65px);
  }
}

span {
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
}

.placelistnd2 {
  display: block;
  line-height: 1.2;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin: 2px 0 0 3px;
}

@media (max-width: 1600px) and (min-width: 600px) {
  .placelistnd2 {
    line-height: 1 !important;
  }
}

.spotBtnWrap {
  position: absolute !important;
  right: 0 !important;
  bottom: 0 !important;
  display: flex;
}

@media (max-width: 1600px) and (min-width: 600px) {
  .spotbtncss {
    width: 40px !important;
    padding: 0 !important;
    height: 30px !important;
    line-height: 30px !important;
    display: flex !important;
    justify-content: center;
    align-items: center;
  }
}


</style>