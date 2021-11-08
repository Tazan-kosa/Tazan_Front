<template>
  <div class="row" id="cityList">


    <div v-for="(region,i) in regionData" :key="i">
      <Region :region="region"></Region>
    </div>


    <!--    남원 모달 + 리스트-->
    <div id="modal-city-detail_idx_namwon" class="uk-flex-top city-info-modal uk-modal" uk-modal="">
      <div class="uk-modal-dialog uk-width-auto uk-margin-auto-vertical" style="max-width: 1400px !important;">
        <button class="uk-modal-close-full uk-close-large uk-icon uk-close" type="button" uk-close="">
          <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <line fill="none" stroke="#000" stroke-width="1.4" x1="1" y1="1" x2="19" y2="19"></line>
            <line fill="none" stroke="#000" stroke-width="1.4" x1="19" y1="1" x2="1" y2="19"></line>
          </svg>
        </button>
        <div class="uk-grid-match uk-grid-small uk-grid uk-grid-stack" uk-grid="">
          <div class="uk-width-1-3@l">
            <div class="uk-background-cover"
                 style="background-image: url('./image/namwon.jpg');"></div>
          </div>
          <div class="uk-width-2-3@l">
            <div class="uk-padding-large">
              <h2 style="font-family: 'Montserrat'; font-weight: 900;margin-bottom:0;">
                NAMWON
              </h2>
              <div style="font-family: 'Montserrat';font-size:1.2rem">
                대한민국 남원
              </div>
              <p class="main-city-info-p">
                춘향의 사랑이 남겨진 남원. 남원의 대표 광한루는 춘향과 몽룡의 사랑이 시작된 곳으로 연못 위에 세워진 오작교가 운치를 더한다. 5가지의 테마로 꾸며진 춘향 테마파크와 작가 최명희의
                대하소설의 무대가 되었던 &lt;혼불&gt; 문학관도 가볼 만하다.지리산 바래봉은 철쭉제가 열리는 봄에 여행하기 좋다.
              </p>
              <div class="uk-child-width-1-4 uk-grid-small uk-text-center uk-grid uk-grid-stack" style="margin: 16px 0"
                   uk-grid="">
                <div class="main-city-symbol-container">
                  <i class="material-icons" style="font-size: 32px; margin: 8px">person</i>
                  <div class="main-city-info-text">
                    431
                  </div>
                </div>
                <div class="main-city-symbol-container">
                  <i class="material-icons" style="font-size: 32px; margin: 8px">bolt</i>
                  <div class="main-city-info-text">
                    220v
                  </div>
                </div>
                <div class="main-city-symbol-container">
                  <i class="material-icons" style="font-size: 32px; margin: 8px">language</i>
                  <div class="main-city-info-text">
                    -
                  </div>
                </div>
                <div class="main-city-symbol-container">
                  <i class="material-icons" style="font-size: 32px; margin: 8px">history</i>
                  <div class="main-city-info-text">
                    0 시간
                  </div>
                </div>
              </div>
              <button class="uk-button myro-color-button uk-button-large"
                      onclick="window.location.href='/myro2?city=namwon'">일정만들기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col s12 m6 l3" name="asia"><input type="hidden" value="koreanamwon대한민국 남원"><a
        style="color:inherit!important;text-decoration: none!important;" href="#modal-city-detail_idx_namwon"
        uk-toggle="" aria-expanded="false">
      <div class="card city-card-style hoverable z-depth-2" style="margin:0;">
        <div class="ribbon-wrapper-1"><span class="uk-label new-label">New</span></div>
        <div class="card-image imgbox"><img src="./image/namwon.jpg" alt="city" loading="lazy"></div>
        <div class="city-card-contents-div"><span class="city-card-contents-title"><div
            class="citynamefont"><b>NAMWON</b><br><h6 class="city-card-contents-subtitle"> 대한민국 남원</h6></div></span>
        </div>
      </div>
    </a>
    </div>


  </div>
</template>

<script>
import Region from '../pages/Region'
import regionData from '../../assets/data/get_ko'
export default {
  name: "CityList",
  data() {
    return {
      regionList: ['경기','제주','강원'],
      regionData:regionData
    }
  },
  components:{
    Region
  }
}
</script>

<style scoped>
div {
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
}

.row {
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
}

.row .col {
  float: left;
  box-sizing: border-box;
  padding: 0 9.75rem;
  min-height: 1px;
}

.row .col.s12 {

}

@media only screen and (min-width: 601px) {
  .row .col.m6 {
    width: 50%;
    margin-left: auto;
    left: auto;
    right: auto;
  }
}

.city-info-modal {
  z-index: 10000 !important;
}

.uk-modal {
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  overflow-y: auto;
  opacity: 0;
  transition: opacity .15s linear;
}

@media (min-width: 640px) {
  .uk-modal {
    padding: 50px 30px;
  }
}

.uk-flex-top {
  align-items: flex-start;
}
</style>