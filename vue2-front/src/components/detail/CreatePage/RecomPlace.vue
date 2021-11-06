<template>
  <ul class="ul-style">
<!--    -->
    <li class="spot-card" id="appendDiv1230">
      <div>
        <div>
          <div class="centered">
            <img
                src="https://www.myro.co.kr/getSpotImage/gyeongju?no=1230"
                alt="Image"
                id="cartImgNo1230"
                loading="lazy">
          </div>
        </div>
      </div>
      <div class="placelistndwrap">
        <span class="placelistnd2" title="황리단길">
          <h7>황리단길</h7>
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
<!--    -->
    <li class="spot-card" id="appendDiv1230">
      <div>
        <div>
          <div class="centered"><img src="https://www.myro.co.kr/getSpotImage/gyeongju?no=1230" alt="Image"
                                     id="cartImgNo1230" loading="lazy"></div>
        </div>
      </div>
      <div class="placelistndwrap"><span class="placelistnd2" title="황리단길"><h7>황리단길</h7></span></div>
      <div class="spotBtnWrap">
        <div title="선택목록 장소에 추가" class="btn spotbtncss" onclick="addSpotToSelectedSpots(1230)"><i
            class="material-icons">add</i>
        </div>
      </div>
    </li>
    <li class="spot-card" id="appendDiv1230">
      <div>
        <div>
          <div class="centered"><img src="https://www.myro.co.kr/getSpotImage/gyeongju?no=1230" alt="Image"
                                     id="cartImgNo1230" loading="lazy"></div>
        </div>
      </div>
      <div class="placelistndwrap"><span class="placelistnd2" title="황리단길"><h7>황리단길</h7></span></div>
      <div class="spotBtnWrap">
        <div title="선택목록 장소에 추가" class="btn spotbtncss" onclick="addSpotToSelectedSpots(1230)"><i
            class="material-icons">add</i>
        </div>
      </div>
    </li>
  </ul>

</template>

<script>
export default {
  name: "RecomPlace"
}
</script>

<style scoped>
/**/
div {
  border: 1px solid black;
  padding: 0.25em;
  margin: 0.25em;
  border-radius: 0.25em;
}
/**/


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
div {
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
}
.ul-style {
  padding: 0;
  margin: 0;
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
  margin: 16px 8px !important;
  display: flex;
  position: relative;
}
img {
  border-style: none;
  vertical-align: middle;
  max-width: 100%;
  height: auto;
  box-sizing: border-box;
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
.spotbtncss {
  padding: 0 8px !important;
  box-shadow: none !important;
  background-color: transparent !important;
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
.btn {
  border: none;
  border-radius: 2px;
  display: inline-block;
  height: 36px;
  line-height: 36px;
  padding: 0 16px;
  text-transform: uppercase;
  vertical-align: center;
  -webkit-tap-highlight-color: transparent;
  font-size: 14px;
  outline: 0;
  text-decoration: none;
  /*color: #fff;*/
  text-align: center;
  letter-spacing: 0.5px;
  /*transition: background-color 0.2s ease-out;*/
  /*cursor: pointer;*/
}
</style>