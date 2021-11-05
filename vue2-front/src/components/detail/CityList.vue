<template>
  <div class="row" id="cityList">
    <div id="modal-city-detail_idx_jeju" class="uk-flex-top city-info-modal uk-modal" uk-modal="">
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
                 style="background-image: url(src/assets/image/jeju.jpg);"></div>
          </div>
          <div class="uk-width-2-3@l">
            <div class="uk-padding-large">
              <h2 style="font-family: 'Montserrat'; font-weight: 900;margin-bottom:0;">
                JEJU
              </h2>
              <div style="font-family: 'Montserrat';font-size:1.2rem">
                대한민국 제주도
              </div>
              <p class="main-city-info-p">
                섬 전체가 하나의 거대한 관광자원인 제주도. 에메랄드빛 물빛이 인상적인 협재 해수욕장은 제주 대표 여행지며, 파도가 넘보는 주상절리와 바다 위 산책로인 용머리 해안은 제주에서만 볼 수
                있는 천혜의 자연경관으로 손꼽힌다. 드라마 촬영지로 알려진 섭지코스는 꾸준한 사랑을 받고 있으며 한라봉과 흑돼지, 은갈치 등은 제주를 대표하는 음식이다.
              </p>
              <button class="uk-button myro-color-button uk-button-large"
                      onclick="window.location.href='/myro2?city=jeju'">일정만들기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col s12 m6 l3" name="asia">
      <input type="hidden" value="koreajeju대한민국 제주도">
      <a style="color:inherit!important;
      text-decoration: none!important;"
         href="#modal-city-detail_idx_jeju"
         uk-toggle=""
        aria-expanded="false">
      <div class="card city-card-style hoverable z-depth-2" style="margin:0;">
        <div class="ribbon-wrapper-1"><span class="uk-label new-label">New</span></div>
        <div class="card-image imgbox">
          <img src="src/assets/image/jeju.jpg" alt="city" loading="lazy">
        </div>
        <div class="city-card-contents-div">
          <span class="city-card-contents-title">
            <div class="citynamefont">
              <b>JEJU</b><br>
              <h6 class="city-card-contents-subtitle"> 대한민국 제주도</h6>
            </div>
          </span>
        </div>
      </div>
    </a></div>
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
                 style="background-image: url('https://myro.co.kr/myro_image/city/namwon.jpg');"></div>
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
        <div class="card-image imgbox"><img src="/myro_image/city/namwon.jpg" alt="city" loading="lazy"></div>
        <div class="city-card-contents-div"><span class="city-card-contents-title"><div
            class="citynamefont"><b>NAMWON</b><br><h6 class="city-card-contents-subtitle"> 대한민국 남원</h6></div></span>
        </div>
      </div>
    </a></div>
    <div id="modal-city-detail_idx_yeosu" class="uk-flex-top city-info-modal uk-modal" uk-modal="">
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
                 style="background-image: url('https://myro.co.kr/myro_image/city/yeosu.jpg');"></div>
          </div>
          <div class="uk-width-2-3@l">
            <div class="uk-padding-large">
              <h2 style="font-family: 'Montserrat'; font-weight: 900;margin-bottom:0;">
                YEOSU
              </h2>
              <div style="font-family: 'Montserrat';font-size:1.2rem">
                대한민국 여수
              </div>
              <p class="main-city-info-p">
                국제 해양관광의 중심 전남 여수시. 3천여 그루의 동백나무로 가득 찬 붉은 섬 오동도는 웰빙 트래킹 코스를 갖추고 있어 한층 더 운치 있다. 해상 케이블카를 타면 마치 바다 위를 걷는
                듯한 느낌이 들며 탁 트인 바다 전망을 감상할 수 있다. 노래 가사에도 나오는 낭만적이고 황홀한 여수의 밤바다는 돌산대교와 음악분수가 함께 어우러져 멋진 야경을 선사한다. 공식 밥도둑
                게장백반과 돌산 갓김치, 갈치조림 등 풍부한 먹거리까지 갖춘 인기 만점 관광지!
              </p>
              <div class="uk-child-width-1-4 uk-grid-small uk-text-center uk-grid uk-grid-stack" style="margin: 16px 0"
                   uk-grid="">
                <div class="main-city-symbol-container">
                  <i class="material-icons" style="font-size: 32px; margin: 8px">person</i>
                  <div class="main-city-info-text">
                    81
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
                      onclick="window.location.href='/myro2?city=yeosu'">일정만들기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
<!--    여수-->
    <div class="col s12 m6 l3" name="asia"><input type="hidden" value="koreayeosu대한민국 여수"><a
        style="color:inherit!important;text-decoration: none!important;" href="#modal-city-detail_idx_yeosu"
        uk-toggle="" aria-expanded="false">
      <div class="card city-card-style hoverable z-depth-2" style="margin:0;">
        <div class="ribbon-wrapper-1"><span class="uk-label new-label">New</span></div>
        <div class="card-image imgbox"><img src="/myro_image/city/yeosu.jpg" alt="city" loading="lazy"></div>
        <div class="city-card-contents-div"><span class="city-card-contents-title"><div
            class="citynamefont"><b>YEOSU</b><br><h6 class="city-card-contents-subtitle"> 대한민국 여수</h6></div></span>
        </div>
      </div>
    </a></div>
    <div id="modal-city-detail_idx_busan" class="uk-flex-top city-info-modal uk-modal" uk-modal="">
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
                 style="background-image: url('https://myro.co.kr/myro_image/city/busan.jpg');"></div>
          </div>
          <div class="uk-width-2-3@l">
            <div class="uk-padding-large">
              <h2 style="font-family: 'Montserrat'; font-weight: 900;margin-bottom:0;">
                BUSAN
              </h2>
              <div style="font-family: 'Montserrat';font-size:1.2rem">
                대한민국 부산
              </div>
              <p class="main-city-info-p">
                우리나라 제2의 수도 부산광역시. 부산 대표 관광지로 손꼽히는 해운대는 밤에는 마린시티의 야경이 더해져 더욱 화려한 해변이 된다. 감천문화마을은 사진 찍기에 좋으며, 매해 가을마다
                개최되는 아시아 최대 규모의 영화제인 부산국제영화제와 함께 부산의 구석구석을 즐겨보는 것도 좋다. 전통시장 투어가 있을 만큼 먹거리가 가득한 부산의 맛기행은 필수!
              </p>
              <div class="uk-child-width-1-4 uk-grid-small uk-text-center uk-grid uk-grid-stack" style="margin: 16px 0"
                   uk-grid="">
                <div class="main-city-symbol-container">
                  <i class="material-icons" style="font-size: 32px; margin: 8px">person</i>
                  <div class="main-city-info-text">
                    352
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
                      onclick="window.location.href='/myro2?city=busan'">일정만들기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
<!--    뷰선-->
    <div class="col s12 m6 l3" name="asia"><input type="hidden" value="koreabusan대한민국 부산"><a
        style="color:inherit!important;text-decoration: none!important;" href="#modal-city-detail_idx_busan"
        uk-toggle="" aria-expanded="false">
      <div class="card city-card-style hoverable z-depth-2" style="margin:0;">
        <div class="card-image imgbox"><img src="/myro_image/city/busan.jpg" alt="city" loading="lazy"></div>
        <div class="city-card-contents-div"><span class="city-card-contents-title"><div
            class="citynamefont"><b>BUSAN</b><br><h6 class="city-card-contents-subtitle"> 대한민국 부산</h6></div></span>
        </div>
      </div>
    </a></div>
    <div id="modal-city-detail_idx_gangneung" class="uk-flex-top city-info-modal uk-modal" uk-modal="">
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
                 style="background-image: url('https://myro.co.kr/myro_image/city/gangneung.jpg');"></div>
          </div>
          <div class="uk-width-2-3@l">
            <div class="uk-padding-large">
              <h2 style="font-family: 'Montserrat'; font-weight: 900;margin-bottom:0;">
                GANGNEUNG
              </h2>
              <div style="font-family: 'Montserrat';font-size:1.2rem">
                대한민국 강릉
              </div>
              <p class="main-city-info-p">
                은은한 커피향이 남다른 강원도 강릉시. 그중에도 카페거리로 유명한 안목해변은 발이 닿는 어디든 향긋한 커피 한 잔에 지평선 끝까지 펼쳐지는 바다 풍경은 덤으로 얻을 수 있다. 일출 명소로
                유명한 정동진과 야경이 아름다운 경포대는 대표 여행 코스! 구름도 머물다 간다는 해발 1,100m에 위치한 강릉 안반데기 마을은 전망대에 올라 드넓게 펼쳐진 배추밭이 붉게 물드는 일출
                전경이 일품이다.
              </p>
              <div class="uk-child-width-1-4 uk-grid-small uk-text-center uk-grid uk-grid-stack" style="margin: 16px 0"
                   uk-grid="">
                <div class="main-city-symbol-container">
                  <i class="material-icons" style="font-size: 32px; margin: 8px">person</i>
                  <div class="main-city-info-text">
                    165
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
                      onclick="window.location.href='/myro2?city=gangneung'">일정만들기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
<!--    강릉-->
    <div class="col s12 m6 l3" name="asia"><input type="hidden" value="koreagangneung대한민국 강릉"><a
        style="color:inherit!important;text-decoration: none!important;" href="#modal-city-detail_idx_gangneung"
        uk-toggle="" aria-expanded="false">
      <div class="card city-card-style hoverable z-depth-2" style="margin:0;">
        <div class="card-image imgbox"><img src="/myro_image/city/gangneung.jpg" alt="city" loading="lazy"></div>
        <div class="city-card-contents-div"><span class="city-card-contents-title"><div class="citynamefont"><b>GANGNEUNG</b><br><h6
            class="city-card-contents-subtitle"> 대한민국 강릉</h6></div></span></div>
      </div>
    </a></div>
    <div id="modal-city-detail_idx_jeonju" class="uk-flex-top city-info-modal uk-modal" uk-modal="">
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
                 style="background-image: url('https://myro.co.kr/myro_image/city/jeonju.jpg');"></div>
          </div>
          <div class="uk-width-2-3@l">
            <div class="uk-padding-large">
              <h2 style="font-family: 'Montserrat'; font-weight: 900;margin-bottom:0;">
                JEONJU
              </h2>
              <div style="font-family: 'Montserrat';font-size:1.2rem">
                대한민국 전주
              </div>
              <p class="main-city-info-p">
                한국의 멋이 살아있는 전주. 도심 한복판에 자리한 한옥마을에 들어서면 시대를 거슬러가는 기분이다. '경사스러운 터에 지어진 궁궐'이란 의미의 경기전에 들어서면 대나무가 서로 부대끼며 내는
                소리에 귀 기울이게 된다. 전주 야경투어 명소의 대표인 전동성당과 한옥마을을 한눈에 내려다볼 수 있는 오목대 역시 빼놓을 수 없는 곳. 마을 전체가 미술관인 자만 벽화마을은 전주의 대표
                포토 존이다.
              </p>
              <div class="uk-child-width-1-4 uk-grid-small uk-text-center uk-grid uk-grid-stack" style="margin: 16px 0"
                   uk-grid="">
                <div class="main-city-symbol-container">
                  <i class="material-icons" style="font-size: 32px; margin: 8px">person</i>
                  <div class="main-city-info-text">
                    60
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
                      onclick="window.location.href='/myro2?city=jeonju'">일정만들기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
<!--    전주-->
    <div class="col s12 m6 l3" name="asia"><input type="hidden" value="koreajeonju대한민국 전주"><a
        style="color:inherit!important;text-decoration: none!important;" href="#modal-city-detail_idx_jeonju"
        uk-toggle="" aria-expanded="false">
      <div class="card city-card-style hoverable z-depth-2" style="margin:0;">
        <div class="card-image imgbox"><img src="/myro_image/city/jeonju.jpg" alt="city" loading="lazy"></div>
        <div class="city-card-contents-div"><span class="city-card-contents-title"><div
            class="citynamefont"><b>JEONJU</b><br><h6 class="city-card-contents-subtitle"> 대한민국 전주</h6></div></span>
        </div>
      </div>
    </a></div>
    <div id="modal-city-detail_idx_gyeongju" class="uk-flex-top city-info-modal uk-modal" uk-modal="">
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
                 style="background-image: url('https://myro.co.kr/myro_image/city/gyeongju.jpg');"></div>
          </div>
          <div class="uk-width-2-3@l">
            <div class="uk-padding-large">
              <h2 style="font-family: 'Montserrat'; font-weight: 900;margin-bottom:0;">
                GYEONGJU
              </h2>
              <div style="font-family: 'Montserrat';font-size:1.2rem">
                대한민국 경주
              </div>
              <p class="main-city-info-p">
                지붕 없는 박물관 경주. 경주는 그만큼 발길이 닿는 어느 곳이든 문화 유적지를 만날 수 있는 곳이다. 밤이면 더 빛나는 안압지를 비롯해 허허벌판에 자리를 굳건히 지키고 있는 첨성대.
                뛰어난 건축미를 자랑하는 불국사 석굴암까지 어느 하나 빼놓을 수 없다. 경주 여행의 기록을 남기고 싶다면 스탬프 투어를 이용해보는 것도 좋다. 16곳의 명소를 탐방할 때마다 찍히는 도장
                모으는 재미가 쏠쏠하다. 모바일 앱으로도 스탬프 투어 참여가 가능하다.
              </p>
              <div class="uk-child-width-1-4 uk-grid-small uk-text-center uk-grid uk-grid-stack" style="margin: 16px 0"
                   uk-grid="">
                <div class="main-city-symbol-container">
                  <i class="material-icons" style="font-size: 32px; margin: 8px">person</i>
                  <div class="main-city-info-text">
                    220
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
                      onclick="window.location.href='/myro2?city=gyeongju'">일정만들기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
<!--    경주-->
    <div class="col s12 m6 l3" name="asia"><input type="hidden" value="koreagyeongju대한민국 경주"><a
        style="color:inherit!important;text-decoration: none!important;" href="#modal-city-detail_idx_gyeongju"
        uk-toggle="" aria-expanded="false">
      <div class="card city-card-style hoverable z-depth-2" style="margin:0;">
        <div class="card-image imgbox"><img src="/myro_image/city/gyeongju.jpg" alt="city" loading="lazy"></div>
        <div class="city-card-contents-div"><span class="city-card-contents-title"><div
            class="citynamefont"><b>GYEONGJU</b><br><h6 class="city-card-contents-subtitle"> 대한민국 경주</h6></div></span>
        </div>
      </div>
    </a></div>
    <div id="modal-city-detail_idx_andong" class="uk-flex-top city-info-modal uk-modal" uk-modal="">
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
                 style="background-image: url('https://myro.co.kr/myro_image/city/andong.jpg');"></div>
          </div>
          <div class="uk-width-2-3@l">
            <div class="uk-padding-large">
              <h2 style="font-family: 'Montserrat'; font-weight: 900;margin-bottom:0;">
                ANDONG
              </h2>
              <div style="font-family: 'Montserrat';font-size:1.2rem">
                대한민국 안동
              </div>
              <p class="main-city-info-p">
                마을 전체가 유네스코 세계문화유산에 등재되어 있는 안동 하회마을. 퇴계 이황 선생의 가르침이 남아있는 도산서원과 그가 거닐던 예던길은 한적한 등산 코스로 좋다. 아기자기한 그림으로 채워진
                신세동 벽화마을과 환상적인 야경을 볼 수 있는 월영교도 빼놓을 수 없다.
              </p>
              <div class="uk-child-width-1-4 uk-grid-small uk-text-center uk-grid uk-grid-stack" style="margin: 16px 0"
                   uk-grid="">
                <div class="main-city-symbol-container">
                  <i class="material-icons" style="font-size: 32px; margin: 8px">person</i>
                  <div class="main-city-info-text">
                    56
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
                      onclick="window.location.href='/myro2?city=andong'">일정만들기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
<!--    아ㅏㄴ동-->
    <div class="col s12 m6 l3" name="asia"><input type="hidden" value="koreaandong대한민국 안동"><a
        style="color:inherit!important;text-decoration: none!important;" href="#modal-city-detail_idx_andong"
        uk-toggle="" aria-expanded="false">
      <div class="card city-card-style hoverable z-depth-2" style="margin:0;">
        <div class="card-image imgbox"><img src="/myro_image/city/andong.jpg" alt="city" loading="lazy"></div>
        <div class="city-card-contents-div"><span class="city-card-contents-title"><div
            class="citynamefont"><b>ANDONG</b><br><h6 class="city-card-contents-subtitle"> 대한민국 안동</h6></div></span>
        </div>
      </div>
    </a></div>
    <div id="modal-city-detail_idx_mokpo" class="uk-flex-top city-info-modal uk-modal" uk-modal="">
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
                 style="background-image: url('https://myro.co.kr/myro_image/city/mokpo.jpg');"></div>
          </div>
          <div class="uk-width-2-3@l">
            <div class="uk-padding-large">
              <h2 style="font-family: 'Montserrat'; font-weight: 900;margin-bottom:0;">
                MOKPO
              </h2>
              <div style="font-family: 'Montserrat';font-size:1.2rem">
                대한민국 목포
              </div>
              <p class="main-city-info-p">
                아름다운 한 폭의 동양화를 연상시키는 유달산에서 다도해의 경관을 한눈에 감상할 수 있다. 때묻지 않은 자연을 간직한 사랑의 섬 외달도는 전국에서 휴양하기 좋은 섬 30위 안에 선정될 만큼
                아름다운 바다와 해변이 특징이다. 목포 평화광장 앞 바다에는 음악에 맞춰 빛과 물이 어우러지는 세계 최대의 춤추는 바다분수가 있어 이색적인 볼거리를 제공하고 있다. 갯벌 속의 인삼이라
                불리는 세 발 낙지는 목포의 대표적인 토산품 중 하나이며 일부 지역에서만 잡히는 지역 특산품이다.
              </p>
              <div class="uk-child-width-1-4 uk-grid-small uk-text-center uk-grid uk-grid-stack" style="margin: 16px 0"
                   uk-grid="">
                <div class="main-city-symbol-container">
                  <i class="material-icons" style="font-size: 32px; margin: 8px">person</i>
                  <div class="main-city-info-text">
                    36
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
                      onclick="window.location.href='/myro2?city=mokpo'">일정만들기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
<!--    목포-->
    <div class="col s12 m6 l3" name="asia"><input type="hidden" value="koreamokpo대한민국 목포"><a
        style="color:inherit!important;text-decoration: none!important;" href="#modal-city-detail_idx_mokpo"
        uk-toggle="" aria-expanded="false">
      <div class="card city-card-style hoverable z-depth-2" style="margin:0;">
        <div class="card-image imgbox"><img src="/myro_image/city/mokpo.jpg" alt="city" loading="lazy"></div>
        <div class="city-card-contents-div"><span class="city-card-contents-title"><div
            class="citynamefont"><b>MOKPO</b><br><h6 class="city-card-contents-subtitle"> 대한민국 목포</h6></div></span>
        </div>
      </div>
    </a></div>
    <div id="modal-city-detail_idx_pohang" class="uk-flex-top city-info-modal uk-modal" uk-modal="">
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
                 style="background-image: url('https://myro.co.kr/myro_image/city/pohang.jpg');"></div>
          </div>
          <div class="uk-width-2-3@l">
            <div class="uk-padding-large">
              <h2 style="font-family: 'Montserrat'; font-weight: 900;margin-bottom:0;">
                POHANG
              </h2>
              <div style="font-family: 'Montserrat';font-size:1.2rem">
                대한민국 포항
              </div>
              <p class="main-city-info-p">
                경북 동남부에 위치해 한반도에서 가장 빨리 해가 뜨는 고장으로 알려진 경상북도 포항은 천혜의 해안선을 가진 해양경관의 보고이다. 특히 감포에서 구룡포까지 바닷가 도로에 펼쳐지는 풍광은
                세계적인 미항인 나폴리나 시드니를 능가하는 아름답고 환상적 해양자원이다. 북부, 칠포해수욕장을 비롯한 여러 해수욕장이 있고 국립 등대박물관, 호미곶 등 해양관광자원은 포항의 대표적
                관광자원이다.
              </p>
              <div class="uk-child-width-1-4 uk-grid-small uk-text-center uk-grid uk-grid-stack" style="margin: 16px 0"
                   uk-grid="">
                <div class="main-city-symbol-container">
                  <i class="material-icons" style="font-size: 32px; margin: 8px">person</i>
                  <div class="main-city-info-text">
                    15
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
                      onclick="window.location.href='/myro2?city=pohang'">일정만들기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
<!--    포항-->
    <div class="col s12 m6 l3" name="asia"><input type="hidden" value="koreapohang대한민국 포항"><a
        style="color:inherit!important;text-decoration: none!important;" href="#modal-city-detail_idx_pohang"
        uk-toggle="" aria-expanded="false">
      <div class="card city-card-style hoverable z-depth-2" style="margin:0;">
        <div class="ribbon-wrapper-1"><span class="uk-label new-label">New</span></div>
        <div class="card-image imgbox"><img src="/myro_image/city/pohang.jpg" alt="city" loading="lazy"></div>
        <div class="city-card-contents-div"><span class="city-card-contents-title"><div
            class="citynamefont"><b>POHANG</b><br><h6 class="city-card-contents-subtitle"> 대한민국 포항</h6></div></span>
        </div>
      </div>
    </a></div>
    <div id="modal-city-detail_idx_ulleung" class="uk-flex-top city-info-modal uk-modal" uk-modal="">
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
                 style="background-image: url('https://myro.co.kr/myro_image/city/ulleung.jpg');"></div>
          </div>
          <div class="uk-width-2-3@l">
            <div class="uk-padding-large">
              <h2 style="font-family: 'Montserrat'; font-weight: 900;margin-bottom:0;">
                ULLEUNG
              </h2>
              <div style="font-family: 'Montserrat';font-size:1.2rem">
                대한민국 울릉도
              </div>
              <p class="main-city-info-p">
                수백만 년 전 자연의 모습을 고스란히 간직한 울릉군. 겨울철 설경이 뛰어난 나리분지와 울릉도의 숨은 비경인 관음도는 약 14m 높이의 관음쌍굴을 보기 위해 많은 이들이 발걸음 한다.
                생김새에 따른 이색 암석 형상들도 눈에 띄는데, 새끼를 등에 업은 거북바위부터 바닷물을 들이키는 코끼리바위, 영지버섯 모양의 버섯바위까지 다양해 바위 기행은 이곳에서만 즐길 수 있는
                특별한 여행 테마이다. 자원의 보물 창고인 독도도 꼭 한번 다녀와야 할 여행지!
              </p>
              <div class="uk-child-width-1-4 uk-grid-small uk-text-center uk-grid uk-grid-stack" style="margin: 16px 0"
                   uk-grid="">
                <div class="main-city-symbol-container">
                  <i class="material-icons" style="font-size: 32px; margin: 8px">person</i>
                  <div class="main-city-info-text">
                    0
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
                      onclick="window.location.href='/myro2?city=ulleung'">일정만들기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
<!--    울릉도-->
    <div class="col s12 m6 l3" name="asia"><input type="hidden" value="koreaulleung대한민국 울릉도"><a
        style="color:inherit!important;text-decoration: none!important;" href="#modal-city-detail_idx_ulleung"
        uk-toggle="" aria-expanded="false">
      <div class="card city-card-style hoverable z-depth-2" style="margin:0;">
        <div class="ribbon-wrapper-1"><span class="uk-label new-label">New</span></div>
        <div class="card-image imgbox"><img src="/myro_image/city/ulleung.jpg" alt="city" loading="lazy"></div>
        <div class="city-card-contents-div"><span class="city-card-contents-title"><div
            class="citynamefont"><b>ULLEUNG</b><br><h6 class="city-card-contents-subtitle"> 대한민국 울릉도</h6></div></span>
        </div>
      </div>
    </a></div>
<!-- 서울-->
    <div id="modal-city-detail_idx_seoul" class="uk-flex-top city-info-modal uk-modal" uk-modal="">
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
                 style="background-image: url('https://myro.co.kr/myro_image/city/seoul.jpg');"></div>
          </div>
          <div class="uk-width-2-3@l">
            <div class="uk-padding-large">
              <h2 style="font-family: 'Montserrat'; font-weight: 900;margin-bottom:0;">
                SEOUL
              </h2>
              <div style="font-family: 'Montserrat';font-size:1.2rem">
                대한민국 서울
              </div>
              <p class="main-city-info-p">
                과거와 현재가 공존하며 하루가 다르게 변하는 서울을 여행하는 일은 매일이 새롭다. 도시 한복판에서 600년의 역사를 그대로 안고 있는 아름다운 고궁들과 더불어 대한민국의 트렌드를
                이끌어나가는 예술과 문화의 크고 작은 동네들을 둘러볼 수 있는 서울은 도시 여행에 최적화된 장소다.
              </p>
              <div class="uk-child-width-1-4 uk-grid-small uk-text-center uk-grid uk-grid-stack" style="margin: 16px 0"
                   uk-grid="">
                <div class="main-city-symbol-container">
                  <i class="material-icons" style="font-size: 32px; margin: 8px">person</i>
                  <div class="main-city-info-text">
                    106
                  </div>
                </div>
                <div class="main-city-symbol-container">
                  <i class="material-icons" style="font-size: 32px; margin: 8px">bolt</i>
                  <div class="main-city-info-text">
                    220V
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
                      onclick="window.location.href='/myro2?city=seoul'">일정만들기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col s12 m6 l3" name="asia"><input type="hidden" value="koreaseoul대한민국 서울"><a
        style="color:inherit!important;text-decoration: none!important;" href="#modal-city-detail_idx_seoul"
        uk-toggle="" aria-expanded="false">
      <div class="card city-card-style hoverable z-depth-2" style="margin:0;">
        <div class="card-image imgbox"><img src="/myro_image/city/seoul.jpg" alt="city" loading="lazy"></div>
        <div class="city-card-contents-div"><span class="city-card-contents-title"><div
            class="citynamefont"><b>SEOUL</b><br><h6 class="city-card-contents-subtitle"> 대한민국 서울</h6></div></span>
        </div>
      </div>
    </a></div>
  </div>
</template>

<script>
export default {
  name: "CityList"
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