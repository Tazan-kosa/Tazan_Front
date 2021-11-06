<template>
  <div id="modal-city-detail_idx_jeju" class="uk-flex-top city-info-modal uk-modal uk-flex uk-open" uk-modal="">
    <div class="uk-modal-dialog uk-width-auto uk-margin-auto-vertical" style="max-width: 1400px !important;">
      <button class="uk-modal-close-full uk-close-large uk-icon uk-close" type="button" uk-close="">
        <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <line fill="none" stroke="#000" stroke-width="1.4" x1="1" y1="1" x2="19" y2="19"></line>
          <line fill="none" stroke="#000" stroke-width="1.4" x1="19" y1="1" x2="1" y2="19"></line>
        </svg>
      </button>
      <div class="uk-grid-match uk-grid-small uk-grid uk-grid-stack" uk-grid="">
        <div class="uk-width-1-3@l uk-first-column">
          <div class="uk-background-cover"
               style="background-image: url('https://myro.co.kr/myro_image/city/jeju.jpg');"></div>
        </div>
        <div class="uk-width-2-3@l uk-first-column">
          <div class="uk-padding-large">
            <h2 style="font-family: 'Montserrat'; font-weight: 900;margin-bottom:0;">
              JEJU
            </h2>
            <div style="font-family: 'Montserrat';font-size:1.2rem">
              대한민국 제주도
            </div>
            <p class="main-city-info-p">
              섬 전체가 하나의 거대한 관광자원인 제주도. 에메랄드빛 물빛이 인상적인 협재 해수욕장은 제주 대표 여행지며, 파도가 넘보는 주상절리와 바다 위 산책로인 용머리 해안은 제주에서만 볼 수 있는
              천혜의 자연경관으로 손꼽힌다. 드라마 촬영지로 알려진 섭지코스는 꾸준한 사랑을 받고 있으며 한라봉과 흑돼지, 은갈치 등은 제주를 대표하는 음식이다.
            </p>
            <div class="uk-child-width-1-4 uk-grid-small uk-text-center uk-grid" style="margin: 16px 0" uk-grid="">
              <div class="main-city-symbol-container uk-first-column">
                <i class="material-icons" style="font-size: 32px; margin: 8px">person</i>
                <div class="main-city-info-text">
                  1958
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
                    onclick="window.location.href='/myro2?city=jeju'">일정만들기
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Jeju"
}
</script>

<style scoped>

</style>