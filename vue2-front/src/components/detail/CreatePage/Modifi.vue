<template>
  <div>
    <div class="main">
      <div class="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light"
           data-src="https://images.unsplash.com/photo-1490822180406-880c226c150b?fit=crop&w=650&h=433&q=80"
           data-srcset="https://images.unsplash.com/photo-1490822180406-880c226c150b?fit=crop&w=650&h=433&q=80 650w,
                  https://images.unsplash.com/photo-1490822180406-880c226c150b?fit=crop&w=1300&h=866&q=80 1300w"
           data-sizes="(min-width: 650px) 650px, 100vw" uk-img>
        <div class="container px-4 px-lg-5">
          <div class="text-center text-white">
            <h1 class="display-4 fw-bolder">
              <span id="userName">{{ this.nickname }}</span>님의 여행 계획표
            </h1>
            <br>

            <div class="wrap">
              <div class="sub_title">
                <b-form-input
                    v-model="text"
                    :placeholder="plan.planTitle"
                ></b-form-input>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 class="uk-heading-line"><span></span></h1>

      <div class="save_plan uk-flex">
        <div class="sub_main uk-margin-bottom uk-margin-top uk-margin-right">

          <div class="left uk-margin uk-margin-top uk-margin-right">
            <div class="uk-card uk-card-default uk-card-body">
            <div>{{ plan.region }}</div>
            <date-picker
                class="datepicpick"
                v-model="mydate"
                type="date"
                :lang="lang"
                range
                confirm
                format="YYYY-MM-DD"
                placeholder="Select date range"
            >
              여행일자
            </date-picker>
            <div>
            </div>
          </div>
          <div class="thr_main">
<!--            -->
            <div
                class="thr_main_sub"
                v-for="(plan,index) in plan.planList"
                :key="index"
                >
              <div class="thr_main_day">
                {{ index + 1 }} 일차
              </div>

              <DayList
                  id="scrollDiv"
                  :daylist="plan"
                  class="thr_main_list uk-flex uk-flex-center"
                  :index1="index"
                  @tourListDelete="DeleteList"
              >
              </DayList>
            </div>

            <div class="uk-margin">
              <button class="uk-button uk-button-primary" type="submit" @click="dayList_add">일정 추가</button>
              &nbsp;
              <button class="uk-button uk-button-danger" type="submit" @click="dayList_delete">일정 삭제</button>
            </div>
          </div>

          <div class="right">
            <div>추천 장소</div>
            <div>
              <RecomPlace :recomList="recomList" @recived="planList_add" class="right_list"/>
            </div>
          </div>
        </div>
<!--        <div class="right">
          <div>추천 장소</div>
          <div>
            <RecomPlace :recomList="recomList" @recived="planList_add"/>
          </div>
        </div>-->
      </div>
      <div class="save_plan_button">
        <b-button variant="primary" @click="UpdatePlan">Update</b-button>
      </div>
    </div>
  </div>
</template>

<script>
// import UnkownList from "./UnkownList";

import RecomPlace from "./RecomPlace";
// import RecomPlaceSave from "./RecomPlaceSave";
// import DatePicker from "../DatePicker";
import axios from "axios";
import DayList from "./DayList";
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
import 'vue2-datepicker/locale/ko';

export default {
  name: "Unkown",
  data() {
    return {
      lang: {
        formatLocale: {
          firstDayOfWeek: 1,
        },
        monthBeforeYear: false,
      },
      recomList: [],
      totalPlan: [[]],
      totalPlan_tour: [[]],
      PlanDate: [],
      planList: [],
      userId: '',
      planId: '',
      startDate: '',
      endDate: '',
      text: '',
      mydate: '',
      nickname: '',
      plan:'',
    }
  },
  methods: {
    planList_add(result) {
      this.totalPlan[this.cnt].push(result) // object
      this.totalPlan_tour[this.cnt].push(result.tourId)
    },
    dayList_add() {
      var test = new Date(this.mydate[0])
      console.log(test)
      test.setDate((test.getDate() + (this.cnt) + 1))
      if (test > this.mydate[1]) {
        alert('일정 길이를 초과합니다!')
      } else {
        this.cnt += 1
        this.totalPlan.push([])
        this.totalPlan_tour.push([])
      }
    },
    dayList_delete() {
      var test = new Date(this.mydate[0])
      console.log(test)
      test.setDate((test.getDate() + (this.cnt) + 1))
      if (test < this.mydate[1]) {
        alert('일정은 1일차부터 시작입니다.!')
      } else {
        this.cnt -= 1
        this.totalPlan.pop()
        // this.totalPlan_tour.push([])

        // this.cnt -= 1
        // this.totalPlan.splice([0], )
        // this.totalPlan_tour.pop([])
      }
    },
    DeleteList(listObject) {
      this.totalPlan[listObject.index1].splice(listObject.index2,1)
      this.totalPlan_tour[listObject.index1].splice(listObject.index2,1)

    },
    UpdatePlan() {
      let planVO = {};
      planVO.userID = localStorage.getItem("id");
      // reviewVO.userID = 1//localStorage.getItem("id")
      planVO.region = this.region;
      planVO.startDate = this.mydate[0];
      planVO.endDate = this.mydate[1];
      // PlanVO.date =;

      // planVO.planDate = plandate;

      planVO.planTitle = this.text;
      planVO.planList = this.totalPlan_tour;

      console.log(planVO)
      axios.put(`http://kosa3.iptime.org:50201/planDetail/${this.planId}`)
          .then(res => {
            if (res.status == 200) {
              this.plan = res.data
              var sd = new Date(this.plan.startDate)
              this.startDate=sd.getFullYear()+"-"+(sd.getMonth()+1)+"-"+sd.getDate();
              var ed = new Date(this.plan.endDate)
              this.endDate=ed.getFullYear()+"-"+(ed.getMonth()+1)+"-"+ed.getDate();
            }
          }).catch(err => {
        console.log("에러발생: " + err)
        //에러 처리 할 곳
        alert("에러발생");
      })
    },
  },
  components: {
    // DatePicker,
    DayList,
    RecomPlace,
    DatePicker
  }
  ,
  props: {
    region: String,
  }
  ,
  created() {
    this.nickname = localStorage.getItem('nickname')
    this.planId = this.$route.params.planId;
    this.userId = localStorage.getItem('id');

    axios.get(`http://kosa3.iptime.org:50201/planDetail/${this.planId}`)
        .then(res => {
          if (res.status == 200) {
            this.plan = res.data
            var sd = new Date(this.plan.startDate)
            this.startDate=sd.getFullYear()+"-"+(sd.getMonth()+1)+"-"+sd.getDate();
            var ed = new Date(this.plan.endDate)
            this.endDate=ed.getFullYear()+"-"+(ed.getMonth()+1)+"-"+ed.getDate();
          }
        }).catch(err => {
      console.log("에러발생: " + err)
      //에러 처리 할 곳
      alert("에러발생");
    })

    /*axios.get(`http://kosa3.iptime.org:50201/plan/myPlan/${userId}`)
        .then(response => {
          if (response.status == 200) {
            console.log(response)
            this.plan = response.data
          }
        }).catch(() => {
      alert("에러발생");
    })*/

  },
  mounted() {

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

.sub_title {
  display: flex;
  justify-content: center;

}

.datePicker {
  display: flex;
}

.main {
  text-align: center;
}
.datepicpick {
  width: 95%;
  height: 100%;
}

.sub_main {
  display: flex;
  position: relative;
  width: 100%;
  /*height: 700px;*/
  height: 100%;
  /*float: left;*/
  /*justify-content: space-between;*/
}

.left {
  display: flex;
  width: 20%;
  height: 100%;
  flex-direction: column;
}
.thr_main {
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 100%;
}
.right {
  width: 20%;
  height: 100%;
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
  justify-content: space-around;
}
.thr_main_list {
  /*height: 5px;*/
  overflow-x: auto;
  /*overflow-x: scroll;*/
  display: flex;
  width: 963px;
  text-align: left;
  height:inherit;
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
  /*width: 1000px;*/
  justify-content: space-between;
}

/*.save_plan_button {
  flex-direction: column;
}*/




</style>