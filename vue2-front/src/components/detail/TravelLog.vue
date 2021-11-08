<template>
  <div class="uk-margin-large info-section">
    <div class="main-section-text-container">
      <div class="main-section-title">여행기</div>
      <div class="uk-text-meta main-section-subtitle">TRAVELOG</div>
    </div>

    <div class="uk-slider-container-offset uk-slider uk-slider-container" uk-slider="">
      <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1">
        <ul class="uk-slider-items uk-child-width-1-2@s uk-grid" style="transform: translate3d(0px, 0px, 0px);">
          <li name="getBlog" tabindex="-1" class="uk-active">
            <div class="uk-cover-container" style="cursor: pointer" onclick="goToBlog(0)">
              <img src="/myro_image/blog_minhae9191.jpg" alt="image" loading="lazy">
              <div class="uk-overlay-primary uk-position-cover" style="background: rgba(34, 34, 34, 0.3)"></div>
              <div class="uk-position-center uk-panel">
                <h3>남원 가볼 만한 곳</h3>
                <div class="main-source-text">by 미네쿠의 세계여행</div>
              </div>
            </div>
          </li>
          <li name="getBlog" tabindex="-1" class="uk-active">
            <div class="uk-cover-container" style="cursor: pointer" onclick="goToBlog(1)">
              <img src="/myro_image/blog_63misschoi.jpg" alt="image" loading="lazy">
              <div class="uk-overlay-primary uk-position-cover" style="background: rgba(34, 34, 34, 0.3)"></div>
              <div class="uk-position-center uk-panel">
                <h3>전라도 남원 가볼 만한 곳 간단 정리</h3>
                <div class="main-source-text">by 유지의 오늘</div>
              </div>
            </div>
          </li>
          <li name="getBlog" tabindex="-1">
            <div class="uk-cover-container" style="cursor: pointer" onclick="goToBlog(2)">
              <img src="/myro_image/blog_pih870318.jpg" alt="image" loading="lazy">
              <div class="uk-overlay-primary uk-position-cover" style="background: rgba(34, 34, 34, 0.3)"></div>
              <div class="uk-position-center uk-panel">
                <h3>남원 가볼 만한 곳</h3>
                <div class="main-source-text">by 초코혜 365일 매일이 여행</div>
              </div>
            </div>
          </li>
          <li name="getBlog" tabindex="-1">
            <div class="uk-cover-container" style="cursor: pointer" onclick="goToBlog(3)">
              <img src="/myro_image/blog_2ndtori.jpg" alt="image" loading="lazy">
              <div class="uk-overlay-primary uk-position-cover" style="background: rgba(34, 34, 34, 0.3)"></div>
              <div class="uk-position-center uk-panel">
                <h3>남원 여행 1박2일 일정짜기</h3>
                <div class="main-source-text">by 뷰스타</div>
              </div>
            </div>
          </li>
          <li name="getBlog" tabindex="-1">
            <div class="uk-cover-container" style="cursor: pointer" onclick="goToBlog(4)">
              <img src="/myro_image/blog_withdayfly.jpg" alt="image" loading="lazy">
              <div class="uk-overlay-primary uk-position-cover" style="background: rgba(34, 34, 34, 0.3)"></div>
              <div class="uk-position-center uk-panel">
                <h3>남원 여행 여행경로 정리</h3>
                <div class="main-source-text">by 판타의 트래블로그</div>
              </div>
            </div>
          </li>
          <li name="getBlog" tabindex="-1">
            <div class="uk-cover-container" style="cursor: pointer" onclick="goToBlog(5)">
              <img src="/myro_image/blog_001.jpg" alt="image" loading="lazy">
              <div class="uk-overlay-primary uk-position-cover" style="background: rgba(34, 34, 34, 0.3)"></div>
              <div class="uk-position-center uk-panel">
                <h3>2박 3일 제주 여행 일정</h3>
                <div class="main-source-text">by MYRO blog</div>
              </div>
            </div>
          </li>
          <li name="getBlog" tabindex="-1">
            <div class="uk-cover-container" style="cursor: pointer" onclick="goToBlog(6)">
              <img src="/myro_image/blog_002.jpg" alt="image" loading="lazy">
              <div class="uk-overlay-primary uk-position-cover" style="background: rgba(34, 34, 34, 0.3)"></div>
              <div class="uk-position-center uk-panel">
                <h3>더 짠내투어 부산편 코스 정리</h3>
                <div class="main-source-text">by MYRO blog</div>
              </div>
            </div>
          </li>
        </ul>

        <a class="uk-position-center-left uk-position-small uk-hidden-hover uk-icon uk-slidenav-previous uk-slidenav" href="#" uk-slidenav-previous="" uk-slider-item="previous"><svg width="14" height="24" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.4" points="12.775,1 1.225,12 12.775,23 "></polyline></svg></a>
        <a class="uk-position-center-right uk-position-small uk-hidden-hover uk-icon uk-slidenav-next uk-slidenav" href="#" uk-slidenav-next="" uk-slider-item="next"><svg width="14" height="24" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.4" points="1.225,23 12.775,12 1.225,1 "></polyline></svg></a>
      </div>

      <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin"><li uk-slider-item="0" class="uk-active"><a href=""></a></li><li uk-slider-item="1"><a href=""></a></li><li uk-slider-item="2"><a href=""></a></li><li uk-slider-item="3"><a href=""></a></li><li uk-slider-item="4"><a href=""></a></li><li uk-slider-item="5"><a href=""></a></li><li uk-slider-item="6"><a href=""></a></li></ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "TravelLog"
}
</script>

<style scoped>

</style>