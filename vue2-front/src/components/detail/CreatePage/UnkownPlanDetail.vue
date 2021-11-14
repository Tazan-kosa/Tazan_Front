<template>
  <div>
    <div class="main">
      <div>
        <h1>
          <!--          <span id="userName">{{ plan.userID }}</span>님의 여행 계획표-->
          <span id="userName">{{ this.nickname }}</span>님의 여행 계획표

        </h1>
        <div class="sub_title">
          <h1
          >
            {{ plan.planTitle }}
          </h1>
        </div>
      </div>
      <div class="save_plan">
        <div class="sub_main">
          <div class="left">
            <!--            <div>{{ plan.region }}</div>-->
            <div
                placeholder="Select date range"
            >
              {{ plan.startDate.slice(0, 10) + " - " + plan.endDate.slice(0, 10) }}
            </div>
            <div>
            </div>
          </div>


          <div class="thr_main">
            <div class="thr_main_sub" v-for="(plan,index) in plan.planList" :key="index">
              <div>
                {{ index + 1 }} 일차
              </div>
              <DayListV2 :daylist="plan" class="thr_main_sub">
              </DayListV2>
            </div>
          </div>
        </div>
      </div>
      <div class="save_plan_button">
        <b-button variant="primary" @click="reviewWrite">Review</b-button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import DayListV2 from "./DayListV2";
import 'vue2-datepicker/index.css';
import 'vue2-datepicker/locale/ko';

export default {
  name: "UnkownPlanDetail",
  data() {
    return {
      PlanDate: [],
      planList: [],
      userId: '',
      planId: '',
      startDate: '',
      endDate: '',
      text: '',
      mydate: '',
      nickname: '',
    }
  },
  created() {
    this.nickname = localStorage.getItem('nickname')
    this.planId = this.$route.params.planId;
    this.userId = localStorage.getItem('id');

    axios.get(`http://kosa3.iptime.org:50201/planDetail/${this.planId}`)
        .then(res => {
          if (res.status == 200) {
            console.log(res)
            this.plan = res.data

          }
        }).catch(err => {
      console.log("에러발생: " + err)
      //에러 처리 할 곳
      alert("에러발생");
    })
    let m1 = this.plan.startDate;
    console.log(m1)
    let curr = new Date(m1);
    let startDate = curr.toLocaleString("ko-KR", {timeZone: "Asia/Seoul"});
    console.log(startDate)
  },
  methods: {
    reviewWrite() {
      axios.get(`http://kosa3.iptime.org:50201/review/reviewWrite/${this.planId}`).then(res=> {
        if(res.status == 200){
            console.log(res.data.reviewTitle)
            this.$router.push({
              name: 'Review',
              params: {
                reviewData: res.data,
                planData: this.plan
              }
            }).then((() => window.scrollTo(0, 0)))
        }
      }).catch(err=> {
        console.log("에러 발생: " + err)
      });
    }
  },
  components: {
    DayListV2,
  },
  props: {
    plan: Object
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

.sub_main {
  display: flex;
  position: relative;
  width: 100%;
  /*height: 700px;*/
  height: 100%;
  /*float: left;*/
}

.left {
  width: 10%;
  height: 100%;
}


.thr_main {
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 100%;
}

.thr_main_sub {
  display: flex;
  width: 100%;
  text-align: left;
  height:inherit;
  overflow-x: auto;
}

.thr_main_sub::-webkit-scrollbar {
  height: 5px;
}
.thr_main_sub::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.thr_main_sub::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}
.thr_main_sub::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.save_plan {
  display: flex;
  /*width: 1000px;*/
  justify-content: space-between;
}
.save_plan {
  /*display: flex;*/
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