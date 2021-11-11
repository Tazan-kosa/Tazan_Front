<template>
  <div>
  <div v-for="(mypage, index) in plan" :key="index">
    <div style="margin:16px 0;" >
      <div class="uk-card uk-card-default uk-grid-collapse uk-grid uk-grid-stack" style="padding:16px" uk-grid="">
        <div class="uk-width-1-3@m uk-first-column">
          <div class="uk-grid" uk-grid="" style="margin: 0; height: 60%">
            <div class="uk-width-1-2 info-container uk-first-column">
              <img class="width:100%" src="https://myro.co.kr/myro_image/city/gyeongju.jpg" alt="">
              <div class="d-day-circle">D-5</div>
              <div class="share-circle" id="sharedLogo_idx_0" style="display: none;">공유</div>
            </div>
            <div class="uk-width-1-2 info-container">
              <div class="travel-title"></div>
              <div class="uk-text-meta">
                대한민국 {{ mypage.region }}
              </div>
              <div class="uk-text-meta" style="font-size: 12px;margin-top: 8px;">
                {{ this.userName }}
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
                  {{ mypage.planTitle }}
                  <div class="uk-inline">
                    <a class="uk-form-icon uk-form-icon-flip uk-icon" uk-icon="icon: file-edit"
                       onclick="inputTravelName(0)" id="inputTravelNameBtn_idx_0">
                      <svg width="20"
                           height="20"
                           viewBox="0 0 20 20"
                           xmlns="http://www.w3.org/2000/svg">
                        <path fill="none" stroke="#000"
                              d="M18.65,1.68 C18.41,1.45 18.109,1.33 17.81,1.33 C17.499,1.33 17.209,1.45 16.98,1.68 L8.92,9.76 L8,12.33 L10.55,11.41 L18.651,3.34 C19.12,2.87 19.12,2.15 18.65,1.68 L18.65,1.68 L18.65,1.68 Z"></path>
                        <polyline fill="none" stroke="#000"
                                  points="16.5 8.482 16.5 18.5 3.5 18.5 3.5 1.5 14.211 1.5"></polyline>
                      </svg>
                    </a>

                    <input class="uk-input uk-form-blank uk-form-width-medium small-text" type="text" placeholder="여행이름"
                           id="inputTravelName_idx_0" value="hh">
                  </div>

                  <!-- <span class="small-text">
                      9세 조준형의 파리 여행
                  </span> -->
                </div>
              </div>
              <div class="uk-width-1-2 info-container-top">
                <div class="small-title">
                  최종수정

                  <span class="small-text" style="line-height: 40px;">
                                        {{ mypage.planDate }}
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
                    {{ mypage.startDate + " - " + mypage.endDate }}
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
                  <button class="uk-button uk-button-large uk-card-default" type="button" aria-expanded="false">
                    일정표
                  </button>
                  <div uk-dropdown="mode: click" class="uk-dropdown">
                    <ul class="uk-nav uk-dropdown-nav">
                      <li>
                        <a href="myroMobile1?savedRouteToken=32902671860e5ec86b9bf1ae25d44e3f">모바일 일정표</a>
                      </li>
                      <li>
                        <a href="#" onclick="getScheduleFileByExcelInMyPage(0)">엑셀 일정표</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="uk-width-1-4">
                <div>
                  <button class="uk-button uk-button-large uk-card-default" uk-toggle="target:#modal-center_idx_0"
                          onclick="modalCenterBtn(0)"
                          aria-expanded="false">
                    일정 공유
                  </button>
                </div>
              </div>
              <div class="uk-width-1-4">
                <div>
                  <button class="uk-button uk-button-large uk-card-default" id="deleteSavedBtn_0"
                          onclick="deleteSavedRoute(0)">
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
</template>

<script>
import axios from "axios";

export default {
  name: "MyPageListTest",
  data() {
    return {
      PlanDate: [],
      planList: [],
      userId: '',
      planId: '',
      startDate: '',
      endDate: '',
      text: '',
      mydate: ''
    }
  },
  created() {
    this.userName = localStorage.getItem('nickname')
    // this.userId = this.$route.params.planId;
    var id = localStorage.getItem('id');
    // axios.get(`http://kosa3.iptime.org:50201/TT/${this.userId}`)
    axios.get(`http://kosa3.iptime.org:50201/plan/${id}`)
        .then(res => {
          if (res.status == 200) {
            console.log(res)
            this.plan = res.data
            // this.Plan.PlanDate = this.Plan.planDate.substr(0, 10)
            // axios.get(`http://kosa3.iptime.org:50201/planDetail/${res.data.planID}`).then(res => {
            /*axios.get(`http://kosa3.iptime.org:50201/planDetail/${res.data.planID}`).then(res => {
              if(res.status == 200) {
                this.planItemData = res.data.plan;
                this.planUserID = res.data.userID;
                console.log("planid : " + this.planUserID)
              }
            }).catch(err => {
              console.log("에러발생: " + err)
              //에러 처리 할 곳
              alert("에러발생");
            })
          }*/
          }
        }).catch(err => {
      console.log("에러발생: " + err)
      //에러 처리 할 곳
      alert("에러발생");
    })
    let m1 = this.plan.startDate;
    console.log(m1)

  },
  components: {},
  props: {
    plan: Object
  }
}
</script>

<style scoped>

</style>