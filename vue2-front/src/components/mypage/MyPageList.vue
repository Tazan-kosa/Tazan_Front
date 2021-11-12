<template>
  <div class="wrapper">
    <div class="container">
      <div class="top-background-div"></div>
      <div class="top-container">
        <div class="profilePhotoContainer">
          <div class="profilePhoto-text" id="profilePhote">{{ initial }}</div>
        </div>

        <div class="text">{{ this.userName }}</div>
        <!--        <button class="btn-normal" onclick="goToMyPage()">프로필 수정</button>-->
      </div>
      <div>
        <div class="row">
          <div class="index-section">
            <div class="index-circle">
              <h5 style="font-family: 'Montserrat' !important">
                <b>나의 일정</b>
              </h5>
              <div>
                <h2 style="line-height: 1" id="myPlan">2</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="section-divider"></div> -->
    <div class="container uk-container-large">
      <div class="uk-padding-small">
        <div class="section-title-container">
          <h3 class="section-title"><b>나의 일정</b></h3>
        </div>
        <!-- 페이징 처리중 -->

        <!-- 일정카드 박히는 부분  -->
        <span id="resultArea">
          <div style="margin:16px 0;">
          <div v-for="(mypage, index) in plan" :key="index">
              <div class="uk-card uk-card-default uk-grid-collapse uk-grid uk-grid-stack" style="padding:16px"
                   uk-grid="">
                <div class="uk-width-1-3@m uk-first-column">
                  <div class="uk-grid" uk-grid="" style="margin: 0; height: 60%">
                    <div class="uk-width-1-2 info-container uk-first-column">
                      <img class="width:100%" src="" alt="">
                      <div class="share-circle" id="sharedLogo_idx_0" style="display: none;">공유</div>
                    </div>
                    <div class="uk-width-1-2 info-container">
                      <div class="travel-title"></div>
                      <div class="uk-text-meta">
                        대한민국 {{ mypage.region }}
                      </div>
                      <!--                <div class="uk-text-meta" style="font-size: 12px;margin-top: 8px;">-->
                      <!--                  {{ this.userName }}-->
                      <!--                </div>-->
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
                            <input class="uk-input uk-form-blank uk-form-width-medium small-text" type="text"
                                                               placeholder="mypage.planTitle"
                                                               value=""
                                                        >
                          </div>
                        </div>
                      </div>
                      <div class="uk-width-1-2 info-container-top">
                        <div class="small-title">
                          최종수정

                          <span class="small-text" style="line-height: 40px;">
                                              {{ mypage.planDate.slice(0, 10) }}
                                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="uk-grid" uk-grid="" style="margin: 0; height: 50%">
                      <div class="uk-width-1-2 info-container-bottom uk-first-column">
                        <div class="small-title">
                          여행일자

                          <span class="small-text">
      <!--                                        2021.11.9-2021.11.18-->
                          {{ mypage.startDate.slice(0, 10) + " - " + mypage.endDate.slice(0, 10) }}
                                          </span>
                        </div>
                      </div>
                      <div class="uk-width-1-2 info-container-bottom">
                        <div class="small-title">
                          {{}}

                          <span class="small-text">
                                          {{}}
                                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="uk-grid uk-grid-stack" uk-grid="" style="margin: 0; height: 40%">
                  <div class="uk-width-expand@m info-container uk-first-column">
                    <div class="uk-text-center uk-grid uk-width-1-1 uk-padding-small" uk-grid="">
                      <div class="uk-width-1-4 uk-first-column">
                        <div>
                          <button class="uk-button uk-button-large uk-card-default" id="modifySavedRoute_idx_0">
                            일정 수정
                          </button>
                        </div>
                      </div>
                      <div class="uk-width-1-4">
                        <div class="uk-inline">
                          <button class="uk-button uk-button-large uk-card-default" type="button" aria-expanded="false"
                                  @click="planDetail(mypage.planID)">
                            상세 보기
                          </button>
                        </div>
                      </div>
                      <div class="uk-width-1-4">
                        <div>
                          <button class="uk-button uk-button-large uk-card-default"
                                  uk-toggle="target:#modal-center_idx_0"
                                  onclick="modalCenterBtn(0)"
                                  aria-expanded="false">
                            일정 공유
                          </button>
                        </div>
                      </div>
                      <div class="uk-width-1-4">
                        <div>
                          <button class="uk-button uk-button-large uk-card-default" id="deleteSavedBtn_0"
                                  @click="deleteSavedRoute(mypage.planID)">
                            삭제
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                </div>
            </div>
          </div>
        </span>

        <!--        <div id="pageSectionDiv" class="pagination-container">
                  <div class="pagination-container">
                    <a id="travelListP" href="#" onclick="getTravelListNextPage('p')"><i class="material-icons">chevron_left</i></a>
                    <span id="pageList"><a onclick="getTravelListPage(1)" id="pageButton1" class="s-button"> 1 </a></span>
                    <a id="travelListN" href="#" onclick="getTravelListNextPage('n')"><i
                        class="material-icons">chevron_right</i></a>
                  </div>
                </div>-->
      </div>
      <div class="info-container p-5">
        <button class="btn-normal" onclick="location.href='/' ">홈으로 가기</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "MyPageList",
  data() {
    return {
      PlanDate: [],
      planList: [],
      userId: '',
      startDate: '',
      endDate: '',
      text: '',
      mydate: '',
      userName: '',
      plan: '',
    }
  },
  components: {
    // MyPageListTest
  },
  created() {
    this.userName = localStorage.getItem('nickname')

    var id = localStorage.getItem('id');
    //"/plan/myPlan/{userID}"
    axios.get(`http://kosa3.iptime.org:50201/plan/myPlan/${id}`)
        .then(response => {
          if (response.status == 200) {
            console.log(response)
            this.plan = response.data
          }
        }).catch(err => {
      console.log("에러발생: " + err)
      alert("에러발생");
    })
  },
  methods: {
    planDetail(id) {
      this.$router.push(`/planDetail/${id}`)
    },
    deleteSavedRoute(id) {
      axios.delete(`http://kosa3.iptime.org:50201/planDelete/${id}`)
          .then(result => {
            if (result.status == 200) {
              alert("여행계획을 삭제했습니다.");
              // this.$router.go(this.$router.currentRoute).then((() => window.scrollTo(0, 0)))
              // if(this.$route.path!=='/mypagelist') this.$router.push('/mypagelist').then((() => window.scrollTo(0, 0)))
            }
          }).catch(err => {
        console.log("에러발생: " + err)
        //에러 처리 할 곳
        alert("에러발생");
      })
    }
  }
}
</script>

<style scoped>
/*div {*/
/*  border: 1px solid black;*/
/*  padding: 0.25em;*/
/*  margin: 0.25em;*/
/*  border-radius: 0.25em;*/
/*}*/
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

.container {
  width: 100vw;
  display: block;
  background: #fff;
  max-width: 1400px;
  /* padding: 40px 0; */
  /* box-shadow: 0 0 8px rgba(0, 0, 0, 0.1); */
}

.section-divider {
  height: 5px;
  background-color: #fafafa;
  width: 100%;
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

.grid-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
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

.medium-text {
  font-size: 14px;
  text-align: center;
  color: #616161;
  padding: 8px;
}

.divider-container {
  position: relative;
  text-align: center;
  margin: 8px;
}

.divider {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height: 1px;
  width: 100%;
  background-color: #fafafa;
}

.socialBtn-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.btn-normal {
  display: block;
  width: 140px;
  padding: 16px 24px;
  margin: 8px;
  border-radius: 4;
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

.favorite-container {
  display: flex;
  align-items: center;
  width: 100%;
  overflow-x: auto;
  padding: 16px 8px;
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

.flex-container-top {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70%;
}

.flex-container-bottom {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30%;
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

.date-section {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #fafafa;
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

/* .section-title-container {
    border-left: 5px solid #26dbe1;
    padding-left: 8px;
} */

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

.cm-toggle-container {
  display: flex;
  align-items: center;
}

.cm-toggle {
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;
  position: relative;
  border: 0;
  outline: 0;
  cursor: pointer;
}

.cm-toggle:after {
  content: '';
  width: 48px;
  height: 24px;
  display: inline-block;
  background: rgba(196, 195, 195, 0.55);
  border-radius: 18px;
  clear: both;
}

.cm-toggle:before {
  content: '';
  width: 24px;
  height: 24px;
  display: block;
  position: absolute;
  left: 0;
  border-radius: 50%;
  background: rgb(255, 255, 255);
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.6);
}

/* Shift the handle to left on check event */

.cm-toggle:checked:before {
  left: 24px;
  box-shadow: -1px 1px 3px rgba(0, 0, 0, 0.6);
}

/* Transition for smoothness */

.cm-toggle,
.cm-toggle:before,
.cm-toggle:after,
.cm-toggle:checked:before,
.cm-toggle:checked:after {
  transition: ease 0.3s;
  -webkit-transition: ease 0.3s;
  -moz-transition: ease 0.3s;
  -o-transition: ease 0.3s;
}

.myro-color:checked:after {
  background: #cee4e9;
}

.uk-table td {
  vertical-align: middle;
}

.d-day-circle {
  font-family: 'Montserrat';
  position: absolute;
  top: 8px;
  left: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #26dbe1;
  color: #fff;
  font-weight: 700;
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

.email-send-btn {
  background-color: #26dbe1;
  color: #fff;
}

.myro-icon-button {
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 36px;
  cursor: pointer;
  margin-left: 8px;
}

.mobile-travel-container {
  box-shadow: rgb(31 38 135 / 10%) 0px 8px 32px 0px;
  /* backdrop-filter: blur(4px); */
  background: rgba(255, 255, 255, 0.25);
  border-radius: 4px;
  border-width: initial !important;
  border-style: none !important;
  border-color: initial !important;
  border-image: initial !important;
  margin: 16px 0;
  display: flex;
  flex-direction: column;
}

.mobile-travel-flex-top {
  display: flex;
  padding: 8px;
  height: 120px;
}

.mobile-travel-flex-bottom {
  display: flex;
  justify-content: space-between;
  padding: 8px;
  height: 60px;
}

.mobile-travel-info-container {
  display: flex;
  flex-direction: column;
  padding-left: 16px;
}

.mobile-travel-name-text {
  font-size: 1rem;
}

.mobile-small-text {
  color: #999;
  font-size: 11px;
}

.mobile-travel-info-day-text {
  font-size: 1rem;
  font-family: 'Montserrat';
  color: #ffa500;
  margin: 2px 0;
}

.mobile-travel-button {
  border-radius: 0px;
  backdrop-filter: blur(4px);
  color: rgb(255, 255, 255);
  box-shadow: rgb(31 38 135 / 5%) 0px 8px 32px 0px !important;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Montserrat';
  color: #000;
  font-size: 12px;
  width: 60px;
  padding: 8px 4px;
}

.mobile-d-day-circle {
  font-family: 'Montserrat';
  position: absolute;
  top: 12px;
  left: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #26dbe1;
  color: #fff;
  font-weight: 700;
  font-size: 10px;
}

.mobile-share-circle {
  font-family: 'Montserrat';
  position: absolute;
  top: 12px;
  left: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #ffcb2b;
  color: #fff;
  font-weight: 700;
  font-size: 10px;
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