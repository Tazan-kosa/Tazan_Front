<template>
  <div>
    <div class="main">
      <div>
        <h1>
          <span id="userName">{{ userName }}</span>님의 여행 계획표
        </h1>
        <div class="sub_title">
          <b-form-input
              v-model="text"
              placeholder="여행 제목을 적어 주세요."
          ></b-form-input>
        </div>
      </div>
      <div class="save_plan">
        <div class="sub_main">
          <div class="left">
            <div>{{ this.region }}</div>
            <!--        <div>여행일자</div>-->

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
              {{ test }}
            </div>
            <!--          <button @click="save">save</button>-->

            <!--          <DatePicker/>-->
          </div>


          <div class="thr_main">
            <!--          <div class="thr_main_sub" v-for="(date, index) in DateAdd" :key="index">-->
            <div class="thr_main_sub" v-for="(plan,i) in totalPlan" :key="i">
              <div>
                {{ i + 1 }} 일차
              </div>

              <!--            <div>{{ cnt + 1 }}일차</div>-->
              <DayList :daylist="plan" class="thr_main_sub">
              </DayList>
            </div>
            <div>
              <b-button variant="outline-primary" type="submit" @click="dayList_add">일정추가</b-button>
            </div>
          </div>

        </div>
        <div class="right">
          <div>추천 장소</div>
          <div>
            <RecomPlace :recomList="recomList" @recived="planList_add"/>
          </div>
        </div>
      </div>




      <!--    </div>-->

      <!--    </div>-->

      <div class="save_plan_button">
        <b-button variant="primary" @click="SavePlan">Save</b-button>
      </div>
      <div class="save_plan_button">
        <b-button variant="primary" @click="DeletePlan">Delete</b-button>
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
      cnt: 0, //index

      //
      userName: '',
      userID: '',

      // value1: [new Date(2019, 9, 8), new Date(2019, 9, 19)],
      // value2: [],
      mydate: '',
      utc: '',
      datetime: '',
      date: '',
      range: '',
      text: '',


    }
  },
  methods: {
    planList_add(result) {
      this.totalPlan[this.cnt].push(result) // object
      this.totalPlan_tour[this.cnt].push(result.tourId)
    },
    dayList_add() {
      var test = new Date(this.mydate[0])
      test.setDate((test.getDate() + (this.cnt) + 1))
      if (test > this.mydate[1]) {
        alert('일정 길이를 초과합니다!')
      } else {
        this.cnt += 1
        this.totalPlan.push([])
        this.totalPlan_tour.push([])
      }
    },
    SavePlan() {
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
      if (confirm("저장 하시겠습니까?")) {
        axios.post('http://kosa3.iptime.org:50201/plan/create', planVO, {
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
          },
        }).then(request => {
          if (request.status === 200) {
            console.log(request.data)
            this.$router.push(`/planDetail/${request.data}`)
          }
        }).catch(function (err) {
          console.log("에러발생: " + err)
          //에러 처리 할 곳
          alert("에러발생");
        })
      }
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
    this.userName = localStorage.getItem('nickname')
    this.userID = localStorage.getItem('id')


    // this.utc = curr.getTime() + (curr.getTimezoneOffset() * 60 * 1000);

    axios.get(`http://kosa3.iptime.org:50201/search/${this.region}`)
        .then(response => {
          console.log(response.data)
          this.recomList = response.data;

        })
        .catch(err => {
          console.log(err)
        })

  }
  ,
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

.sub_main {
  display: flex;
  /*position: relative;*/
  /*width: 400px;*/
  /*height: 700px;*/
  height: 100%;
  /*float: left;*/
}

.left {
  width: 250px;
  height: 100%;
}

.datepicpick {
  width: 230px;
  height: 100%;
}

.thr_main {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.thr_main_sub {
  display: flex;
  width: 100%;
}

.save_plan {
  display: flex;
  /*width: 1000px;*/
}

/*.save_plan_button {
  flex-direction: column;
}*/

.right {
  width: 300px;
  height: 100%;
}


</style>