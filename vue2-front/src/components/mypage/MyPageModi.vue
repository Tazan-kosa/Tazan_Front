<template>
  <div class="wrapper">
    <div class="containerTop">
      <div class="top-background-div"></div>
      <div class="top-container">
        <div class="profilePhotoContainer">
          <div class="profilePhoto-text" id="profilePhote">김</div>
        </div>

        <div class="text">김제민</div>
        <button class="btn-normal" onclick="goToMyPage()">프로필 수정</button>
      </div>
      <div>
        <div class="row">
          <div class="index-section">
            <div class="index-circle">
              <h5 style="font-family: 'Montserrat' !important">
                <b>나의 일정</b>
              </h5>
              <div>
                <h2 style="line-height: 1" id="myPlan">1</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="section-divider"></div> -->
    <div class="containerMain">
      <div class="padding-small">
        <div class="section-title-container">
          <h3 class="section-title"><b>나의 일정</b></h3>
        </div>
        <!-- 페이징 처리중 -->

        <!-- 일정카드 박히는 부분 by 준영 -->
        <span id="resultArea">
          <div style="margin:16px 0;">
            <div class="card card-default grid-collapse grid grid-stack" style="padding:16px" grid="">
              <div class="width-1-3@m first-column">
                <div class="grid" grid="" style="margin: 0; height: 60%">
                    <div class="width-1-2 info-container first-column">
                        <img class="width:100%" src="https://myro.co.kr/myro_image/city/jeju.jpg" alt="">
                      <!--                      <img class="width:100%" src="src/assets/image/jeju.jpg" alt="">-->
                        <div class="share-circle" id="sharedLogo_idx_0" style="display: none;">공유</div>
                    </div>
                    <div class="width-1-2 info-container">
                        <div class="travel-title">JEJU</div>
                        <div class="text-meta">
                            대한민국 제주도
                        </div>
                        <div class="text-meta" style="font-size: 12px;margin-top: 8px;">
                            kimmjen@kakao.com
                        </div>
                        <div class="info-container" style="margin-top: 40px">
                            <div style="
                                    display: flex;
                                    justify-content: center;
                                    align-items: center;
                                    width: 50px;
                                    height: 50px;
                                    border-radius: 50%;
                                    background-color: #717171;
                                    color: #fff;
                                    font-weight: 700;
                                ">
                                L
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="width-2-3@m grid-margin first-column">
                <div class="grid grid-stack" grid="" style="margin: 0; height: 60%">
                    <div class="width-expand@m first-column" style="padding: 16px">
                        <div class="grid" grid="" style="margin: 0; height: 50%">
                            <div class="width-1-2 info-container-top first-column">
                                <div class="small-title">
                                    여행이름
                                    <div class="inline">
                                        <a class="form-icon form-icon-flip icon" icon="icon: file-edit"
                                           onclick="inputTravelName(0)" id="inputTravelNameBtn_idx_0"><svg width="20"
                                                                                                           height="20"
                                                                                                           viewBox="0 0 20 20"
                                                                                                           xmlns="http://www.w3.org/2000/svg"><path
                                            fill="none" stroke="#000"
                                            d="M18.65,1.68 C18.41,1.45 18.109,1.33 17.81,1.33 C17.499,1.33 17.209,1.45 16.98,1.68 L8.92,9.76 L8,12.33 L10.55,11.41 L18.651,3.34 C19.12,2.87 19.12,2.15 18.65,1.68 L18.65,1.68 L18.65,1.68 Z"></path><polyline
                                            fill="none" stroke="#000"
                                            points="16.5 8.482 16.5 18.5 3.5 18.5 3.5 1.5 14.211 1.5"></polyline></svg></a>

                                        <input class="
                                                input
                                                form-blank
                                                form-width-medium
                                                small-text
                                            " type="text" placeholder="여행이름" id="inputTravelName_idx_0" value="ㄴㅇㄹㄴㅇㄹ">
                                    </div>

                                  <!-- <span class="small-text">
                                      9세 조준형의 파리 여행
                                  </span> -->
                                </div>
                            </div>
                            <div class="
                                    width-1-2
                                    info-container-top
                                ">
                                <div class="small-title">
                                    최종수정

                                    <span class="small-text" style="
                                            line-height: 40px;
                                        ">
                                        2021.11.1
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="grid" grid="" style="margin: 0; height: 50%">
                            <div class="width-1-2 info-container-bottom first-column">
                                <div class="small-title">
                                    여행일자

                                    <span class="small-text">
                                        2021.11.8-2021.11.10
                                    </span>
                                </div>
                            </div>
                            <div class="
                                    width-1-2
                                    info-container-bottom
                                ">
                                <div class="small-title">
                                    선택장소

                                    <span class="small-text">
                                        29
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="grid grid-stack" grid="" style="margin: 0; height: 40%">
                    <div class="width-expand@m info-container first-column">
                        <div class="
                                text-center
                                grid
                                width-1-1
                                padding-small
                            " grid="">
                            <div class="width-1-4 first-column">
                                <div>
                                    <button class="
                                            button
                                            button-large
                                            card-default
                                        " id="modifySavedRoute_idx_0">
                                        일정 수정
                                    </button>
                                </div>
                            </div>
                            <div class="width-1-4">
                                <div class="inline">
                                    <button class="
                                            button
                                            button-large
                                            card-default
                                        " type="button" aria-expanded="false">
                                        일정표
                                    </button>
                                    <div uk-dropdown="mode: click" class="dropdown">
                                        <ul class="
                                                nav
                                                dropdown-nav
                                            ">
                                            <li>
                                                <a href="myroMobile1?savedRouteToken=a7a79fb727a9c09412cf449f2320c2a8">모바일
                                                    일정표</a>
                                            </li>
                                            <li>
                                                <a href="#" onclick="getScheduleFileByExcelInMyPage(0)">엑셀
                                                    일정표</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="width-1-4">
                                <div>
                                    <button class="
                                            button
                                            button-large
                                            card-default
                                        " toggle="target:#modal-center_idx_0" onclick="modalCenterBtn(0)"
                                            aria-expanded="false">
                                        일정 공유
                                    </button>
                                </div>
                            </div>
                            <div class="width-1-4">
                                <div>
                                    <button class="
                                            button
                                            button-large
                                            card-default
                                        " id="deleteSavedBtn_0" onclick="deleteSavedRoute(0)">
                                        삭제
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="modal-center_idx_0" class="flex-top modal" modal="">
            <div class="
                    modal-dialog
                    modal-body
                    margin-auto-vertical
                ">
            </div>
        </div>


        <div id="modal-send-email_idx_0" class="flex-top modal" modal="">
            <div class="
                    modal-dialog
                    modal-body
                    margin-auto-vertical
                ">
            </div>
        </div>
    </div></span>
        <div id="pageSectionDiv" class="pagination-container">
          <div class="pagination-container">
            <a id="travelListP" href="#" onclick="getTravelListNextPage('p')"><i class="material-icons">chevron_left</i></a>
            <span id="pageList"><a onclick="getTravelListPage(1)" id="pageButton1" class="s-button"> 1 </a></span>
            <a id="travelListN" href="#" onclick="getTravelListNextPage('n')"><i
                class="material-icons">chevron_right</i></a>
          </div>
        </div>
      </div>
      <div class="info-container p-5">
        <button class="btn-normal" onclick="location.href='/' ">홈으로 가기</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyPageModi"
}
</script>

<style scoped>
div {
  border: 1px solid black;
  padding: 0.25em;
  margin: 0.25em;
  border-radius: 0.25em;
}

* {
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
}

body {
  min-height: 100vh;
  width: 100%;
  background: #fff;
  color: #000;
}

.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  min-height: 100vh;
  padding: 100px 30px;
}

.top-background-div {
  height: 140px;
  background-color: #fff;
}

@media (max-width: 600px) {
  .top-background-div {
    height: 80px;
  }
}

.profilePhotoContainer {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #000;
  margin: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.profilePhoto-text {
  font-size: 1.4rem;
  color: #fff;
  font-family: 'Montserrat';
}

@media (max-width: 600px) {
  .wrapper {
    padding: 60px 30px;
  }

  .profilePhotoContainer {
    width: 80px;
    height: 80px;
  }
}

.containerTop {
  width: 100vw;
  display: block;
  background: #fff;
  max-width: 1400px;
  /* padding: 40px 0; */
  /* box-shadow: 0 0 8px rgba(0, 0, 0, 0.1); */
}



@media (max-width: 600px) {
  .container {
    width: 90vw;
  }
}

.top-container {
  margin-top: -80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

@media (max-width: 600px) {
  .top-container {
    margin-top: -60px;
  }
}

.info-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 !important;
}


.container .text {
  font-family: 'Montserrat';
  font-size: 35px;
  font-weight: 600;
  text-align: center;
  color: #000000;
}

@media (max-width: 600px) {
  .container .text {
    font-size: 1.4rem;
  }
}

.small-text {
  font-size: 12px;
  /* text-align: center; */
  color: #616161;
  letter-spacing: 1px;
  padding: 8px;
}



.btn-normal {
  display: block;
  width: 140px;
  padding: 16px 24px;
  margin: 8px;
  border-radius: 4px;
  border: 1px solid #e0e0e0;
  font-size: 0.9rem;
  text-align: center;
  outline: none;
  cursor: pointer;
  background-color: #fff;
}

.index-section {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* height: 120px; */
}

.index-section button {
  box-shadow: none !important;
}

@media (max-width: 600px) {
  .index-section button {
    width: 100%;
    border-radius: unset;
    background-color: #fff;
  }

  .index-section .btn-group {
    width: 100%;
    border-radius: unset;
  }

  .index-section .btn-danger {
    background-color: #f80c35;
  }
}


.index-circle {
  height: 120px;
  width: 120px;
  border-radius: 50%;
  /* border: 5px solid #cee4e9; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}


@media (max-width: 600px) {
  .flex-container-top {
    height: auto;
    padding: 24px 0 8px 0;
  }

  .flex-container-bottom {
    height: auto;
    /* padding: 8px 0; */
  }
}

.section-title {
  font-family: 'Montserrat' !important;
}

.travel-title {
  font-family: 'Montserrat' !important;
  font-size: 1.6rem;
  font-weight: 700;
  color: #000;
}

@media (max-width: 600px) {
  .section-title {
    font-size: 1rem;
  }

  .index-section h6 {
    font-size: 0.8rem;
  }

  .travel-title {
    font-size: 1.4rem;
  }
}


@media (max-width: 600px) {
  .date-section {
    /* display: none; */
    position: absolute;
    top: 10px;
    background-color: transparent;
  }

  .date-section .section-title {
    color: #fff;
    font-size: 1rem;
  }
}

.small-title {
  font-size: 1rem;
  font-weight: 700;
  color: #5dc9dd;
}

.small-text {
  font-size: 0.9rem;
  color: #000;
  font-family: 'Montserrat';
}

.info-container-top {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.info-container-bottom {
  display: flex;
  flex-direction: column;
  justify-content: center;
}


.uk-table td {
  vertical-align: middle;
}



.share-circle {
  font-family: 'Montserrat';
  position: absolute;
  top: 8px;
  left: 66px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #ffcb2b;
  color: #fff;
  font-weight: 700;
}


@media (max-width: 600px) {
  .mypage-share-button {
    font-size: 12px !important;
    padding: 8px 16px !important;
  }

  .share-mobile-view-container {
    padding: 0 !important;
    margin: 8px 0 0 0 !important;
  }

  .share-mobile-view-btn {
    padding: 0 !important;
  }
}

.pagination-container {
  display: flex;
  justify-content: center;
  align-content: center;
}

.pagination-container a {
  color: #000 !important;
  margin: 0 4px !important;
}

</style>