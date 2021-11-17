<template>
  <div>
    <div class="main">
      <div>
        <h1>테스트님의 여행 계획표</h1>
        <div class="sub_title">
          <div>여행 제목</div>
          <div>제목을 정하라우
          </div>
        </div>

      </div>
      <div class="save_plan">
        <div class="sub_main">
          <div class="left">
            <div>여행 장소</div>
            <div>여행일자</div>
            <div class="datePicker">
<!--              <b-form-datepicker></b-form-datepicker>-->
              <DatePicker/>
              <!--            <b-form-datepicker v-model="value" :min="min" :max="max"></b-form-datepicker>-->
              <!--            <p>Value: '{{ value }}'</p>-->
            </div>
          </div>

          <!--        <div class="thr_main_sub">-->

          <div class="thr_main">
            <div class="thr_main_sub">
              <div>1일차</div>
              <div>
                <div>내용</div>
              </div>
<!--              <div>메인 계획 일정표</div>-->
<!--              <RecomPlaceSave/>-->
<!--              내 스스로-->
<!--              <div style="display:flex;padding:8px;width:100%">
                <div>
                  <img src="https://www.myro.co.kr/getSpotImage/gyeongju?no=1189" alt="Image" loading="lazy" style="width: 45px; height: 45px;">
                </div>
                <div class="addcartdpottextdiv">
                  <h7 class="placelistnd" title="불국사">불국사</h7>
                </div>
              </div>-->
            </div>
            <div>
              <b-button variant="outline-primary" type="submit">일정추가</b-button>
            </div>
            <!--          <div>
                        <div>1일차</div>
                        <div>메인 계획 일정표</div>
                      </div>
                      <div>
                        <div>1일차</div>
                        <div>메인 계획 일정표</div>
                      </div>
                      <div>
                        <div>1일차</div>
                        <div>메인 계획 일정표</div>
                      </div>-->
          </div>
          <div class="save_plan_button">
            <b-button variant="primary">Save</b-button>
          </div>
        </div>


        <div class="right">
          <div>추천 장소</div>
          <div>
<!--            <UnkownList/>-->
            <RecomPlace/>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
// import UnkownList from "./UnkownList";

import RecomPlace from "./RecomPlace";
// import RecomPlaceSave from "./RecomPlaceSave";
import DatePicker from "../DatePicker";
export default {
  name: "Unkown",

  components: {
    DatePicker,
    // RecomPlaceSave,
    RecomPlace
    // UnkownList
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
  /*width: 400px;*/
  /*height: 700px;*/
  height: 100%;
  /*float: left;*/
}

.left {
  width: 400px;
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
  width: 100%;
}
/*.save_plan_button {
  flex-direction: column;
}*/

.right {
  width: 300px;
  height: 100%;
}


</style>