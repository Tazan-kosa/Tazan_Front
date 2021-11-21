<template>
  <div>
    <div class="main">
      <div class="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light"
           data-src="https://photo.coolenjoy.net/data/editor/1707/Bimg_20170718024901_dhqkcnyb.png"
           data-sizes="(min-width: 650px) 650px, 100vw" uk-img>
        <div class="container px-4 px-lg-5">
          <div class="text-center text-white">
            <h1 class="display-4 fw-bolder">
              <span id="userName">{{ this.nickname }}</span>님의 여행 수정
            </h1>
            <br>

            <div class="wrap">
              <div class="sub_title" role="group">
                <b-form-input
                    size="sm"
                    class="w-25 p-3 mb-1 text-black plantitle"
                    placeholder="제목작성"
                    :value="plan.planTitle"
                ></b-form-input>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 class="uk-heading-line"><span></span></h1>
      <div class="save_plan">
        <div class="sub_main">
          <v-card class="left_container">
            <div class="left">
              <div>
                <h2 class="region_f">{{ plan.region }}</h2>
              </div>
              <div>
                여행 일자
              </div>
              <date-picker
                  class="datepicpick"
                  type="date"
                  v-model="mydate_up"
                  :lang="lang"
                  range
                  confirm
                  format="YYYY-MM-DD"
                  :placeholder="mydate"
                  @change="updateddate"
              >
                여행일자
                {{ mydate }}
              </date-picker>
            </div>
            <br>
            <v-card>
              <v-card>
                <div>
                  여행 시작 날짜 : {{ defaultstartDate }}
                </div>
                &nbsp;
                <div>
                  여행 시작 날짜 : {{ defaultendDate }}
                </div>
              </v-card>
            </v-card>
            <br>
            <v-card>
              <v-card>
                <div>
                  여행 수정 날짜 : {{ mydate_up[0] }}
                </div>
                &nbsp;
                <div>
                  여행 수정 날짜 : {{ mydate_up[1] }}
                </div>
              </v-card>
            </v-card>
            <br><br>
            <v-card
                class="left_container_img"
            >
              <img
                  max-height="300"
                  max-width="300"
                  :src="require(`/src/assets/yacht_tazan_logo.png`)"
              >
            </v-card>
          </v-card>
          <v-card class="thr_main">
            <v-col class="thr_main_sub" v-for="(plan,index) in plan.planList" :key="index">
              <div class="thr_main_day">

                <v-avatar
                    class="thr_main_day_list"
                >
                  {{ index + 1 }} 일차
                </v-avatar>

              </div>

              <DayList
                  id="scrollDiv"
                  :daylist="plan"
                  class="thr_main_list"
                  :index1="index"
                  @tourListDelete="DeleteList"
              >
              </DayList>

            </v-col>

            <div class="uk-margin">
              <b-button pill variant="outline-primary" type="submit" @click="dayList_add">일정 추가</b-button>
              &nbsp;
              <b-button pill variant="outline-danger" type="submit" @click="dayList_delete">일정 삭제</b-button>
            </div>
          </v-card>
          <v-card class="right">
            <div class="recom_f">추천 장소</div>
            <div>
              <RecomPlace :recomList="recomList" @recived="planList_add" class="right_list"/>
            </div>
          </v-card>
        </div>
      </div>
      <div class="save_plan_button">
        <b-button variant="primary" @click="UpdateWrite">Update</b-button>
      </div>
    </div>
  </div>
</template>

<script>
import DayList from "./DayList";
import 'vue2-datepicker/index.css';
import 'vue2-datepicker/locale/ko';
import RecomPlace from "./RecomPlace";
import DatePicker from "vue2-datepicker";

export default {
  name: "UnkownPlanUpdate",

  data() {
    return {
      lang: {
        formatLocale: {
          firstDayOfWeek: 1,
        },
        monthBeforeYear: false,
      },
      mydate: '',
      recomList: [],
      planDate: [],
      planList: [],
      userId: '',
      planId: '',
      text: '',
      nickname: '',
      plan: '',
      mydate_up: '',
      cnt: 0,
      startDate:'',
      endDate:'',
      defaultstartDate:'',
      defaultendDate:''
    }
  },
  created() {
    this.nickname = localStorage.getItem('nickname')
    this.planId = this.$route.params.planId;
    this.userId = localStorage.getItem('id');

    this.$axios.get(`/api/user/planDetail/${this.planId}`)
        .then(res => {
          if (res.status == 200) {
            this.plan = res.data

            this.startDate = this.dateFormmatter(this.plan.startDate);
            this.defaultstartDate= this.dateFormmatter(this.plan.startDate);


            this.endDate = this.dateFormmatter(this.plan.endDate);
            this.defaultendDate=this.dateFormmatter(this.plan.endDate);
            this.mydate = this.startDate + " - " + this.endDate
            this.cnt=this.plan.planList.length-1
            this.$axios.get(`/api/user/search/${this.plan.region}`)
                .then(response => {

                  this.recomList = response.data;

                })
                .catch(err => {
                  console.log(err)
                })

          }
        }).catch(err => {
      console.log("에러발생: " + err)
      alert("에러발생");
    })


  },

  methods: {
    planList_add(result) {
      if (this.mydate == '') {
        alert('날짜를 먼저 선택해주세요')
      } else {
        this.plan.planList[this.cnt].push(result) // object
      }
    },
    updateddate() {

      this.mydate_up[0] = this.dateFormmatter(this.mydate_up[0]);

      this.startDate= this.dateFormmatter(this.mydate_up[0]);

      this.mydate_up[1] = this.dateFormmatter(this.mydate_up[1]);

      this.endDate= this.dateFormmatter(this.mydate_up[1]);

      this.mydate = this.startDate + " - " + this.endDate
    },
    dayList_add() {
      if (this.mydate == '') {
        alert('날짜를 먼저 선택해주세요')
      } else {
        var test = new Date(this.startDate)

        test.setDate((test.getDate() + (this.cnt) + 1))
        if (test > new Date(this.endDate)) {
          alert('일정 길이를 초과합니다!')

        } else {
          this.cnt += 1
          this.plan.planList.push([])
        }
      }
    },
    dayList_delete() {

      if (this.plan.planList.length <= 1) {
        alert('일정은 1일차부터 시작입니다.')
      } else {
        var test = new Date(this.startDate)
        test.setDate((test.getDate() + (this.cnt) + 1))
        if (test > this.endDate) {
          alert('일정은 1일차부터 시작입니다.!')
        } else {
          this.cnt -= 1;
          this.plan.planList.pop()
        }
      }
    },
    DeleteList(listObject) {
      this.plan.planList[listObject.index1].splice(listObject.index2, 1)
    },
    UpdateWrite() {

      var calc=(new Date(this.endDate)-new Date(this.startDate))/86400000
      if (calc+1<this.plan.planList.length){
        alert("일정의 길이가 총 일정 수 보다 많습니다!")
      }
      else if (calc+1>this.plan.planList.length){
        alert("일정의 길이가 총 일정 수 보다 적습니다!")
      }
      else if(this.plan.planList.length<1){
        alert("일정이 입력되지 않았습니다!")
      }
      else{
        let planVO = {};
        planVO.startDate = this.startDate;
        planVO.endDate = this.endDate;
        planVO.planTitle = document.querySelector(".plantitle").value
        planVO.planID=this.plan.planID;

        var i=0,j=0
        var array=[]
        for (i=0;i<this.plan.planList.length;i++){
          var ary=[]
          for (j=0;j<this.plan.planList[i].length;j++){
            ary.push(this.plan.planList[i][j].tourId)
          }
          array.push(ary)
        }

        planVO.planList = array


        if (confirm("저장 하시겠습니까?")) {
          this.$axios.put('/api/user/plan/planUpdate', planVO).then(request => {
            if (request.status === 200) {
              this.$router.push(`/planDetail/${this.plan.planID}`)
            }
          }).catch(function () {
            alert("제목 길이는 공백포함 1자이상 45자이하 입니다!");
          })
        }
      }
    },
    dateFormmatter(date){
      var temp = new Date(date)
      var year = temp.getFullYear();
      var month = temp.getMonth() + 1;
      var day = temp.getDate();

      if (month < 10) {
        month = '0' + month;
      }
      if (day < 10) {
        day = '0' + day;
      }
      return(year + '-' + month + '-' + day);

    }
  },
  components: {
    DayList,
    RecomPlace,
    DatePicker
  },
}
</script>

<style scoped>
.region_f {
  font-size: 5em;
  font-weight: 1000 !important;
}
.recom_f {
  font-weight: 1000 !important;
}
.text-black {
  text-align: left;
}
.w-25 {
  width: 35% !important;
}
.p-3 {
  padding: 1rem !important;
}
.sub_main {
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  /*  */
  border: 1px solid black;
  padding: 0.25em;
  margin: 0.25em;
  border-radius: 0.25em;
  justify-content: space-around;
  flex: 1;
}

.thr_main_sub {
  font-size: 1rem;
  font-weight: 700;
  color: #5dc9dd;
  display: flex;
  position: relative;
}
.thr_main_day_list {
  color: #5dc9dd;
  font-size: 18px !important;
  font-weight: 900 !important;
  margin-right: auto;
  text-align: center;
  width:100%
}

.sub_title {
  display: flex;
  justify-content: center;

}

.main {
  text-align: center;
}

.datepicpick {
  width: 95%;
  height: 100%;
}

.left_container {
  display: flex;
  width: 25%;
  height: 100%;
  flex-direction: column;
  padding: 0.25em;
  margin: 0.25em;
  border-radius: 0.25em;
}

.left {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  padding: 0.25em;
  margin: 0.25em;
  border-radius: 0.25em;
}

.thr_main {
  display: flex;
  flex-direction: column;
  width: 65%;
  height: 100%;
  padding: 0.25em;
  margin: 0.25em;
  border-radius: 0.25em;
}

.right {
  width: 20%;
  height: 100%;
  padding: 0.25em;
  margin: 0.25em;
  border-radius: 0.25em;
}

.right_list {
  width: 100%;
  height: 100%;
}


/*리스트*/
.thr_main_sub {
  display: flex;
  width: 100%;
}

.thr_main_day {
  display: flex;
  width: 100px;
  text-align: center;
  flex-wrap: nowrap;
  font-size: 1rem;
  font-weight: 700;
  color: #5dc9dd;
  display: flex;
  position: relative;
}

.thr_main_list {
  overflow-x: auto;
  display: flex;
  width: 963px;
  text-align: left;
  height: inherit;
  padding: 0.25em;
  margin: 0.25em;
  border-radius: 0.25em;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
}

.thr_main_list::-webkit-scrollbar {
  height: 5px;
}

.thr_main_list::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.thr_main_list::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}

.thr_main_list::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.save_plan {
  display: flex;
  justify-content: space-between;
  padding: 0.25em;
  margin: 0.25em;
  border-radius: 0.25em;
}
</style>