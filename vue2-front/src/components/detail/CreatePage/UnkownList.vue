<template>
  <li class="spot-card" id="appendDiv1000">
    <div>
      <div>
        <div class="centered">
          <img
              src="https://www.myro.co.kr/getSpotImage/namwon?no=1000"
              alt="Image"
              id="cartImgNo1000"
              loading="lazy"
          >
        </div>
      </div>
    </div>
    <div class="placelistndwrap">
      <span class="placelistnd2" title="광한루원(Gwanghalluwon)">
        <h7>광한루원<br>
          <div class="spot-eng-small-text">Gwanghalluwon
            <div></div>
            <div class="spotBtnWrap">
              <div title="장소 정보" class="btn spotbtncss" onclick="spotInfoModal(1000)">
                <i class="material-icons" style="color:#e0e0e0;">info</i>
              </div>
              <div title="선택목록 장소에 추가" class="btn spotbtncss" onclick="addSpotToSelectedSpots(1000)">
                <i class="material-icons">add</i>
              </div>
            </div>
          </div>
        </h7>
      </span>
    </div>
  </li>
</template>

<script>
export default {
  name: "UnkownList"
}
</script>

<style scoped>
.spot-card {
  box-shadow: rgb(31 38 135 / 10%) 0px 8px 32px 0px;
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
#spotsList img {
  width: 80px !important;
  height: 80px !important;
  max-width: none !important;
  object-fit: cover;
}
</style>