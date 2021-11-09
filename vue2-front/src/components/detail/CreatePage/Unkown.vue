<template>
  <div>
    <div class="main">
      <div>
        <h1>테스트님의 여행 계획표</h1>
        <div class="sub_title">
          <b-form-input
              v-model="text"
              placeholder="여행 제목을 적어 주세요."
          ></b-form-input>
        </div>
      </div>
      <div class="save_plan">
        <!--        <div class="sub_main">-->
        <div class="left">
          <div>{{ this.region }}</div>
          <div>여행일자</div>
          <div class="datePicker">
            <!--              <b-form-datepicker></b-form-datepicker>-->
            <DatePicker/>
            <!--            <b-form-datepicker v-model="value" :min="min" :max="max"></b-form-datepicker>-->
            <!--            <p>Value: '{{ value }}'</p>-->
          </div>
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
        <!--          <div class="save_plan_button">
                    <b-button variant="primary">Save</b-button>
                  </div>-->
      </div>


      <div class="right">
        <div>추천 장소</div>
        <div>
          <RecomPlace :recomList="recomList" @recived="planList_add"/>
        </div>
      </div>

    </div>

    <!--    </div>-->
  </div>
</template>

<script>
// import UnkownList from "./UnkownList";

import RecomPlace from "./RecomPlace";
// import RecomPlaceSave from "./RecomPlaceSave";
import DatePicker from "../DatePicker";
import axios from "axios";
import DayList from "./DayList";
// import SpotCard from "./SpotCard";
export default {
  name: "Unkown",
  data() {
    return {
      recomList: [],
      totalPlan: [[]],
      totalPlan_tour: [[]],
      cnt: 0, //index
    }
  },
  methods: {
    planList_add(result) {
      this.totalPlan[this.cnt].push(result)
      this.totalPlan_tour[this.cnt].push(result.tourId)
    },
    dayList_add() {
      this.cnt += 1
      this.totalPlan.push([])
      this.totalPlan_tour.push([])
    },
  },
  components: {
    DayList,
    DatePicker,
    RecomPlace
  },
  props: {
    region: String,
  },
  created() {

    axios.get(`http://kosa3.iptime.org:50201/search/${this.region}`)
        .then(res => {
          console.log(res.data)
          this.recomList = res.data;

        })
        .catch(err => {
          console.log(err)
        })
  },
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
  /*width: 400px;*/
  /*height: 700px;*/
  height: 100%;
  /*float: left;*/
}

.left {
  width: 250px;
  height: 100%;
}

.thr_main {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
#DayList {
  display: flex;
}

.thr_main_sub {
  display: flex;
  /*width: 100%;*/
}

.save_plan {
  /*display: flex;*/
  width: 1000px;
}

/*.save_plan_button {
  flex-direction: column;
}*/

.right {
  width: 300px;
  height: 100%;
}


</style>