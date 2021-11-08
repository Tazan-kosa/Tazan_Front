<template>
  <div class="uk-margin-large info-section">
    <div class="main-section-text-container">
      <div class="main-section-title">인기 여행지</div>
      <div class="uk-text-meta main-section-subtitle">POPULAR DESTINATIONS</div>
    </div>

    <div class="uk-position-relative uk-visible-toggle uk-light uk-slider uk-slider-container" tabindex="-1" uk-slider="">
      <ul class="uk-slider-items uk-grid" id="topCityListForWebPage" style="transform: translate3d(0px, 0px, 0px);">
        <a class="uk-width-1-3 uk-active" href="#modal-city-detail_idx_jeju" uk-toggle="" aria-expanded="false" tabindex="-1">
          <li>
            <div class="uk-panel" style="width:100%;">
              <img style="width:100%;" src="/myro_image/city/jeju.jpg" alt="cityimage" loading="lazy">
              <div class="main-photo-linear"></div>
              <div class="uk-position-bottom uk-text-center" style="margin-bottom:8px;">
                <h3 uk-slider-parallax="x: 100,-100" style="font-family: 'Montserrat'; font-weight: 900;margin-bottom:8px;">JEJU</h3>
                <p uk-slider-parallax="x: 200,-200" style="margin-top:0;">대한민국 제주도</p>
              </div>
            </div>
          </li>
        </a>
        <a class="uk-width-1-3 uk-active" href="#modal-city-detail_idx_paris" uk-toggle="" aria-expanded="true" tabindex="-1">
          <li>
            <div class="uk-panel" style="width:100%;">
              <img style="width:100%;" src="/myro_image/city/paris.jpg" alt="cityimage" loading="lazy">
              <div class="main-photo-linear"></div>
              <div class="uk-position-bottom uk-text-center" style="margin-bottom:8px;">
                <h3 uk-slider-parallax="x: 100,-100" style="font-family: 'Montserrat'; font-weight: 900;margin-bottom:8px;">PARIS</h3>
                <p uk-slider-parallax="x: 200,-200" style="margin-top:0;">프랑스 파리</p>
              </div>
            </div>
          </li>
        </a>
        <a class="uk-width-1-3 uk-active" href="#modal-city-detail_idx_newyork" uk-toggle="" aria-expanded="true" tabindex="-1">
          <li>
            <div class="uk-panel" style="width:100%;">
              <img style="width:100%;" src="/myro_image/city/newyork.jpg" alt="cityimage" loading="lazy">
              <div class="main-photo-linear"></div>
              <div class="uk-position-bottom uk-text-center" style="margin-bottom:8px;">
                <h3 uk-slider-parallax="x: 100,-100" style="font-family: 'Montserrat'; font-weight: 900;margin-bottom:8px;">NEWYORK</h3>
                <p uk-slider-parallax="x: 200,-200" style="margin-top:0;">미국 뉴욕</p>
              </div>
            </div>
          </li>
        </a>
        <a class="uk-width-1-3" href="#modal-city-detail_idx_london" uk-toggle="" aria-expanded="true" tabindex="-1">
          <li>
            <div class="uk-panel" style="width:100%;">
              <img style="width:100%;" src="/myro_image/city/london.jpg" alt="cityimage" loading="lazy">
              <div class="main-photo-linear"></div>
              <div class="uk-position-bottom uk-text-center" style="margin-bottom:8px;">
                <h3 uk-slider-parallax="x: 100,-100" style="font-family: 'Montserrat'; font-weight: 900;margin-bottom:8px;">LONDON</h3>
                <p uk-slider-parallax="x: 200,-200" style="margin-top:0;">영국 런던</p>
              </div>
            </div>
          </li>
        </a>
        <a class="uk-width-1-3" href="#modal-city-detail_idx_namwon" uk-toggle="" aria-expanded="false" tabindex="-1">
          <li>
            <div class="uk-panel" style="width:100%;">
              <img style="width:100%;" src="/myro_image/city/namwon.jpg" alt="cityimage" loading="lazy">
              <div class="main-photo-linear"></div>
              <div class="uk-position-bottom uk-text-center" style="margin-bottom:8px;">
                <h3 uk-slider-parallax="x: 100,-100" style="font-family: 'Montserrat'; font-weight: 900;margin-bottom:8px;">NAMWON</h3>
                <p uk-slider-parallax="x: 200,-200" style="margin-top:0;">대한민국 남원</p>
              </div>
            </div>
          </li>
        </a>
        <a class="uk-width-1-3" href="#modal-city-detail_idx_busan" uk-toggle="" aria-expanded="false" tabindex="-1">
          <li>
            <div class="uk-panel" style="width:100%;">
              <img style="width:100%;" src="/myro_image/city/busan.jpg" alt="cityimage" loading="lazy">
              <div class="main-photo-linear"></div>
              <div class="uk-position-bottom uk-text-center" style="margin-bottom:8px;">
                <h3 uk-slider-parallax="x: 100,-100" style="font-family: 'Montserrat'; font-weight: 900;margin-bottom:8px;">BUSAN</h3>
                <p uk-slider-parallax="x: 200,-200" style="margin-top:0;">대한민국 부산</p>
              </div>
            </div>
          </li>
        </a></ul>

      <a class="uk-position-center-left uk-position-small uk-hidden-hover uk-icon uk-slidenav-previous uk-slidenav" href="#" uk-slidenav-previous="" uk-slider-item="previous"><svg width="14" height="24" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.4" points="12.775,1 1.225,12 12.775,23 "></polyline></svg></a>
      <a class="uk-position-center-right uk-position-small uk-hidden-hover uk-icon uk-slidenav-next uk-slidenav" href="#" uk-slidenav-next="" uk-slider-item="next"><svg width="14" height="24" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.4" points="1.225,23 12.775,12 1.225,1 "></polyline></svg></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "PopularDestination"
}
</script>

<style scoped>

</style>