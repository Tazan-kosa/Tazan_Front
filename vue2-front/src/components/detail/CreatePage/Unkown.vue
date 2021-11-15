<template>
  <div>
    <div class="main">
<!--      <div class="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light" data-src="region.img" uk-img>-->
      <div>
        <h1>
          <span id="userName">{{ userName }}</span>님의 여행 계획표
        </h1>
        <div class="sub_title">
          <b-form-input
              v-model="text"
              placeholder="여행 제목을 적어 주세요."
          ></b-form-input>
<!--          <div class="mt-2">Value: {{ text }}</div>-->
        </div>
      </div>
      <div class="save_plan">
        <div class="sub_main">
          <div class="left">
            <div>{{ this.region }}</div>
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
          </div>
          <div class="thr_main">
<!--            -->
            <div
                class="thr_main_sub"
                v-for="(plan,index) in totalPlan"
                :key="index"
                >
              <div class="thr_main_day">
                {{ index + 1 }} 일차
              </div>

              <DayList
                  id="scrollDiv"
                  :daylist="plan"
                  class="thr_main_list"
                  :index1="index"
                  @tourListDelete="DeleteList"
              >
              </DayList>
            </div>

            <div>
              <b-button variant="outline-primary" type="submit" @click="dayList_add">일정추가</b-button>
              <b-button variant="outline-primary" type="submit" @click="dayList_delete">일정삭제</b-button>
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
        <b-button variant="primary" @click="SavePlan">Save</b-button>
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
      userName: '',
      userID: '',
      mydate: '',
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
        }).catch(function () {
          alert("제목 길이는 공백포함 45자 이내로 입력해야 합니다!");
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