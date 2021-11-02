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
        <h4> 20xx.xx.xx - 20xx.xx.xx</h4>
      </div>

      <div class="sub_main">
        <div class="left">
          <div>여행 장소</div>
          <div>여행일자</div>
          <div class="datePicker">
            <b-form-timepicker></b-form-timepicker>
            <b-form-datepicker></b-form-datepicker>
          </div>
        </div>

        <!--        <div class="thr_main_sub">-->

        <div class="thr_main">
          <div>
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
          </div>
          <div>
            <div>1일차</div>
            <div>메인 계획 일정표</div>
          </div>
        </div>


        <div class="right">
          <div>추천 장소</div>
          <div>
            <UnkownList/>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
// import UnkownList from "./UnkownList";

export default {
  name: "Unkown",
  components: {
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
  width: 100%;
  height: 100%;
}

thr_main_sub {
  display: flex;
  width: 100%;
  display: flex;
}

.right {
  width: 300px;
  height: 100%;
}


</style>