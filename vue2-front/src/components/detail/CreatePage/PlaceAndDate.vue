<template>
<div style="margin: 16px 0;">
  <div style="padding: 16px">
    <!-- 사진 -->
    <div>
      <div class=""></div>
    </div>
    <!-- 내용 -->
    <div>
      <!-- 일정 내용 -->
      <div class="">
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
      <!-- 일정 수정 -->
      <div class="">
      <!-- 큰 틀 -->
        <div class="">
      <!-- 틀 -->
          <div class="">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div></div>
  <div></div>
</div>
<!--  <div style="margin:16px 0;">
    <div class="uk-card uk-card-default uk-grid-collapse uk-grid uk-grid-stack" style="padding:16px" uk-grid="">
      <div class="uk-width-1-3@m uk-first-column">
        <div class="uk-grid" uk-grid="" style="margin: 0; height: 60%">
          <div class="uk-width-1-2 info-container uk-first-column">
            <img class="width:100%" src="https://myro.co.kr/myro_image/city/jeju.jpg" alt="">
            <div class="d-day-circle">D-6</div>
            <div class="share-circle" id="sharedLogo_idx_1" style="display: none;">공유</div>
          </div>
          <div class="uk-width-1-2 info-container">
            <div class="travel-title">JEJU</div>
            <div class="uk-text-meta">
              대한민국 제주도
            </div>
            <div class="uk-text-meta" style="font-size: 12px;margin-top: 8px;">
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
      <div class="uk-width-2-3@m uk-grid-margin uk-first-column">
        <div class="uk-grid uk-grid-stack" uk-grid="" style="margin: 0; height: 60%">
          <div class="uk-width-expand@m uk-first-column" style="padding: 16px">
            <div class="uk-grid" uk-grid="" style="margin: 0; height: 50%">
              <div class="uk-width-1-2 info-container-top uk-first-column">
                <div class="small-title">
                  여행이름
                  <div class="uk-inline">
                    <a class="uk-form-icon uk-form-icon-flip uk-icon" uk-icon="icon: file-edit" onclick="inputTravelName(1)" id="inputTravelNameBtn_idx_1"><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" d="M18.65,1.68 C18.41,1.45 18.109,1.33 17.81,1.33 C17.499,1.33 17.209,1.45 16.98,1.68 L8.92,9.76 L8,12.33 L10.55,11.41 L18.651,3.34 C19.12,2.87 19.12,2.15 18.65,1.68 L18.65,1.68 L18.65,1.68 Z"></path><polyline fill="none" stroke="#000" points="16.5 8.482 16.5 18.5 3.5 18.5 3.5 1.5 14.211 1.5"></polyline></svg></a>

                    <input class="
                                                uk-input
                                                uk-form-blank
                                                uk-form-width-medium
                                                small-text
                                            " type="text" placeholder="여행이름" id="inputTravelName_idx_1" value="ddd">
                  </div>

                  &lt;!&ndash; <span class="small-text">
                      9세 조준형의 파리 여행
                  </span> &ndash;&gt;
                </div>
              </div>
              <div class="
                                    uk-width-1-2
                                    info-container-top
                                ">
                <div class="small-title">
                  최종수정

                  <span class="small-text" style="
                                            line-height: 40px;
                                        ">
                                        2021.11.2
                                    </span>
                </div>
              </div>
            </div>
            <div class="uk-grid" uk-grid="" style="margin: 0; height: 50%">
              <div class="uk-width-1-2 info-container-bottom uk-first-column">
                <div class="small-title">
                  여행일자

                  <span class="small-text">
                                        2021.11.10-2021.11.11
                                    </span>
                </div>
              </div>
              <div class="
                                    uk-width-1-2
                                    info-container-bottom
                                ">
                <div class="small-title">
                  선택장소

                  <span class="small-text">
                                        8
                                    </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="uk-grid uk-grid-stack" uk-grid="" style="margin: 0; height: 40%">
          <div class="uk-width-expand@m info-container uk-first-column">
            <div class="
                                uk-text-center
                                uk-grid
                                uk-width-1-1
                                uk-padding-small
                            " uk-grid="">
              <div class="uk-width-1-4 uk-first-column">
                <div>
                  <button class="
                                            uk-button
                                            uk-button-large
                                            uk-card-default
                                        " id="modifySavedRoute_idx_1">
                    일정 수정
                  </button>
                </div>
              </div>
              <div class="uk-width-1-4">
                <div class="uk-inline">
                  <button class="
                                            uk-button
                                            uk-button-large
                                            uk-card-default
                                        " type="button" aria-expanded="false">
                    일정표
                  </button>
                  <div uk-dropdown="mode: click" class="uk-dropdown">
                    <ul class="
                                                uk-nav
                                                uk-dropdown-nav
                                            ">
                      <li>
                        <a href="myroMobile1?savedRouteToken=c2921f886cdbea364030d908746f5910">모바일
                          일정표</a>
                      </li>
                      <li>
                        <a href="#" onclick="getScheduleFileByExcelInMyPage(1)">엑셀
                          일정표</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="uk-width-1-4">
                <div>
                  <button class="
                                            uk-button
                                            uk-button-large
                                            uk-card-default
                                        " uk-toggle="target:#modal-center_idx_1" onclick="modalCenterBtn(1)" aria-expanded="false">
                    일정 공유
                  </button>
                </div>
              </div>
              <div class="uk-width-1-4">
                <div>
                  <button class="
                                            uk-button
                                            uk-button-large
                                            uk-card-default
                                        " id="deleteSavedBtn_1" onclick="deleteSavedRoute(1)">
                    삭제
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="modal-center_idx_1" class="uk-flex-top uk-modal" uk-modal="">
      <div class="
                    uk-modal-dialog
                    uk-modal-body
                    uk-margin-auto-vertical
                ">
        <button class="uk-modal-close-default uk-icon uk-close" type="button" uk-close=""><svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.1" x1="1" y1="1" x2="13" y2="13"></line><line fill="none" stroke="#000" stroke-width="1.1" x1="13" y1="1" x2="1" y2="13"></line></svg></button>

        <div style="
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;
                    ">
          <h3 style="
                            font-family: 'Montserrat' !important;
                            font-weight: 700;
                        ">
            PARIS
          </h3>
          <div style="
                            text-align: center;
                            word-break: keep-all;
                            color: #616161;
                            font-size: 0.9rem;
                        ">
            나의 여행 일정 공유
          </div>
          <div class="uk-text-center uk-grid uk-width-1-1 uk-padding-small uk-grid-stack" uk-grid="">
            <div class="uk-width-1-2">
              <div>
                <button id="kakaoLinkBtn_idx_1" class="
                                        uk-button
                                        uk-button-large
                                        uk-card-default
                                        mypage-share-button
                                    ">
                  카카오톡 공유
                </button>
              </div>
            </div>
            <div class="uk-width-1-2">
              <div>
                <button class="
                                        uk-button
                                        uk-button-large
                                        uk-card-default
                                        mypage-share-button
                                    " uk-toggle="target: #modal-send-email_idx_1" aria-expanded="false">
                  이메일 전송 공유
                </button>
              </div>
            </div>
          </div>

          <table class="uk-table">
            <caption>
              공유된 친구
            </caption>
            <thead>
            <tr>
              <th>닉네임</th>
              <th>ID or EMAIL</th>

              <th>관리</th>
            </tr>
            </thead>

            <tbody id="sharedEmailList_idx_1">

            </tbody>
          </table>
        </div>
      </div>
    </div>


    <div id="modal-send-email_idx_1" class="uk-flex-top uk-modal" uk-modal="">
      <div class="
                    uk-modal-dialog
                    uk-modal-body
                    uk-margin-auto-vertical
                ">
        <button class="uk-modal-close-default uk-icon uk-close" type="button" uk-close=""><svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.1" x1="1" y1="1" x2="13" y2="13"></line><line fill="none" stroke="#000" stroke-width="1.1" x1="13" y1="1" x2="1" y2="13"></line></svg></button>

        <div style="
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;
                    ">
          <h3 style="
                            font-family: 'Montserrat' !important;
                            font-weight: 700;
                        ">
            이메일 공유
          </h3>
          <div class="uk-text-meta" style="
                            text-align: center;
                            word-break: keep-all;
                            font-size: 0.9rem;
                        ">
            생성된 일정을 이메일을 통해 공유합니다.
          </div>

          <div class="uk-margin" style="width: 100%">
            <div class="uk-margin">
              <div class="uk-margin-small" style="
                                    display: flex;
                                    align-items: center;
                                ">
                <label class="uk-form-label" for="form-stacked-text">이메일</label>
                <div class="
                                        uk-icon-button
                                        myro-icon-button
                                    " id="appendEmailInput" onclick="appendEmailInput(1)">
                  +
                </div>
                <div class="
                                        uk-icon-button
                                        myro-icon-button
                                    " id="htmlEmailInput" onclick="htmlEmailInput()">
                  -
                </div>
                <div class="uk-text-meta" style="
                                        word-break: keep-all;
                                        font-size: 0.8rem;
                                        margin-left: 8px;
                                    ">
                  (최대 10명까지 전송 가능)
                </div>
              </div>
              <div class="uk-form-controls" id="sendEmailList_idx_1">
                <input class="uk-input" type="email" placeholder="E-mail 주소 입력" name="emailAddress_idx_1">
              </div>
            </div>
          </div>

          <div>
            <div>
              <button class="
                                    uk-button
                                    uk-button-large
                                    uk-card-default
                                    email-send-btn
                                " onclick="saveRouteAndSendEmailInMyPage(1)">
                발 송
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>-->
</template>

<script>
export default {
  name: "PlaceAndDate",
  components: {
  }
}
</script>

<style scoped>
div {
  border: 1px solid black;
  padding: 0.25em;
  margin: 0.25em;
  border-radius: 0.25em;
}

</style>