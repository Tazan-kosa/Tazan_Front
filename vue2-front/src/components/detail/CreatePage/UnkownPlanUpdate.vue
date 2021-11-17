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
                    size="sm"
                    class="w-25 p-3 mb-1 text-light"
                    :placeholder="plan.planTitle"
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
                <h2>{{ plan.region }}</h2>
              </div>
              <!--            <div
                              placeholder="Select date range"
                          >
                            {{ startDate + " - " + endDate }}
                          </div>-->
              <date-picker
                  class="datepicpick"
                  v-model="mydate"
                  type="date"
                  :lang="lang"
                  range
                  confirm
                  format="YYYY-MM-DD"
              >
                <!--                :placeholder= startDate + " - " + endDate-->
                {{ startDate + " - " + endDate }}
              </date-picker>
              <div>
              </div>
            </div>
          </v-card>
          <v-card class="thr_main">
            <v-col class="thr_main_sub" v-for="(plan,index) in plan.planList" :key="index">
              <div class="thr_main_day">
                <h6>
                  {{ index + 1 }} 일차
                </h6>
              </div>
              <DayList
                  id="scrollDiv"
                  :daylist="plan"
                  class="thr_main_list"
                  :index1="index"
                  @tourListDelete="DeleteList"
              >
              </DayList>
              <!--              <DayList :daylist="plan" class="thr_main_sub">-->
              <!--              </DayList>-->
            </v-col>

            <div class="uk-margin">
              <b-button pill variant="outline-primary" type="submit" @click="dayList_add">일정 추가</b-button>
              &nbsp;
              <b-button pill variant="outline-danger" type="submit" @click="dayList_delete">일정 삭제</b-button>
            </div>
          </v-card>
          <v-card class="right">
            <div>추천 장소</div>
            <div>
              <RecomPlace :recomList="recomList" @recived="planList_add" class="right_list"/>
            </div>
          </v-card>
        </div>
      </div>
      <div class="save_plan_button">
        <b-button variant="primary" @click="reviewWrite">Update</b-button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import DayList from "./DayList";
import 'vue2-datepicker/index.css';
import 'vue2-datepicker/locale/ko';
import RecomPlace from "./RecomPlace";
import DatePicker from "vue2-datepicker";

export default {
  name: "UnkownPlanDetail",
  data() {
    return {
      recomList: [],
      totalPlan: [[]],
      totalPlan_tour: [[]],
      PlanDate: [],
      planList: [],
      cnt: 0, //index
      userName: '',
      userId: '',
      planId: '',
      startDate: '',
      endDate: '',
      text: '',
      mydate: '',
      nickname: '',
      plan: '',
      datetime: '',

    }
  },
  created() {
    console.log(this.$route.params.planId);
    this.nickname = localStorage.getItem('nickname')
    this.planId = this.$route.params.planId;
    this.userId = localStorage.getItem('id');

    axios.get(`http://kosa3.iptime.org:50201/planDetail/${this.planId}`)
        .then(res => {
          if (res.status == 200) {
            this.plan = res.data
            var sd = new Date(this.plan.startDate)
            this.startDate = sd.getFullYear() + "-" + (sd.getMonth() + 1) + "-" + sd.getDate();
            var ed = new Date(this.plan.endDate)
            this.endDate = ed.getFullYear() + "-" + (ed.getMonth() + 1) + "-" + ed.getDate();
          }
        }).catch(err => {
      console.log("에러발생: " + err)
      //에러 처리 할 곳
      alert("에러발생");
    })
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
    dayList_delete() {
      var test = new Date(this.mydate[0])

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
      this.totalPlan[listObject.index1].splice(listObject.index2, 1)
      this.totalPlan_tour[listObject.index1].splice(listObject.index2, 1)

    },
    //  ####################### 이 부분은 업데이트 관련 로직으로 사용할 예정 ##############################
    /*SavePlan() {
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


      if (confirm("저장 하시겠습니까?")) {
        axios.post('http://kosa3.iptime.org:50201/plan/create', planVO, {
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
          },
        }).then(request => {
          if (request.status === 200) {

            this.$router.push(`/planDetail/${request.data}`)
          }
        }).catch(function () {
          alert("제목 길이는 공백포함 1자이상 45자이하 입니다!");
        })
      }
    },
    //  ####################### 이 부분은 업데이트 관련 로직으로 사용할 예정 ##############################
    reviewWrite() {
      axios.get(`http://kosa3.iptime.org:50201/review/reviewWrite/${this.planId}`).then(res=> {
        if(res.status == 200){
            this.$router.push({
              name: 'Review',
              params: {
                reviewData: res.data,
                planData: this.plan
              }
            }).then((() => window.scrollTo(0, 0)))
        }
      }).catch(err => {
        console.log("에러 발생: " + err)
      });
    }*/
    //  ####################### 이 부분은 업데이트 관련 로직으로 사용할 예정 ##############################
  },
  components: {
    DayList,
    RecomPlace,
    DatePicker
  },
  props: {
    region: String
  }
}
</script>

<style scoped>
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

.thr_main .sub_main {
  border: 1px solid black;
  padding: 0.25em;
  margin: 0.25em;
  border-radius: 0.25em;
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

.sub_main {
  display: flex;
  position: relative;
  width: 100%;
  /*height: 700px;*/
  height: 100%;
  /*float: left;*/
  /*justify-content: space-between;*/
  /*  */
  border: 1px solid black;
  padding: 0.25em;
  margin: 0.25em;
  border-radius: 0.25em;
}

.left_container {
  display: flex;
  width: 25%;
  height: 100%;
  flex-direction: column;
  /**/
  /*border: 1px solid black;*/
  padding: 0.25em;
  margin: 0.25em;
  border-radius: 0.25em;
}

.left {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  /**/
  /*border: 1px solid black;*/
  padding: 0.25em;
  margin: 0.25em;
  border-radius: 0.25em;
}

.thr_main {
  display: flex;
  flex-direction: column;
  width: 75%;
  height: 100%;
  /**/
  /*border: 1px solid black;*/
  padding: 0.25em;
  margin: 0.25em;
  border-radius: 0.25em;
}

.right {
  width: 20%;
  height: 100%;
  /**/
  /*border: 1px solid black;*/
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

/*
.thr_main_day {
  display: flex;
  width: 100px;
  text-align: center;
  flex-wrap: nowrap;
  justify-content: space-around;
}*/
.thr_main_day {
  font-size: 1rem;
  font-weight: 700;
  color: #5dc9dd;
  display: flex;
  position: relative;

}

.thr_main_list {
  /*height: 5px;*/
  overflow-x: auto;
  /*overflow-x: scroll;*/
  display: flex;
  width: 963px;
  text-align: left;
  height: inherit;
  /**/
  /*border: 1px solid black;*/
  padding: 0.25em;
  margin: 0.25em;
  border-radius: 0.25em;
  box-shadow: 0px 2px 2px 0px rgb(0 0 0 / 14%);
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
  /**/
  padding: 0.25em;
  margin: 0.25em;
  border-radius: 0.25em;
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


</style>