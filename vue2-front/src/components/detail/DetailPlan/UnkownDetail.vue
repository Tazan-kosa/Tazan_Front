<template>
<div class="detail_page">
  <div class="detail_nav"></div>
  <div class="detail_cover">
    <div class="cover_img"
         style="background:url('http://img.earthtory.com/img/city_images/310/seoul_1425373106.jpg') no-repeat;background-size:cover;background-position:center center;"></div>
    <div class="cover_bottom">
      <div class="cover_bottom_left">
        <div class="plan_title">{{ plan.title }}</div>
        <div class="plan_info">
          <div class="plan_date">2015.08.01~2015.08.03 (3일)</div>
        </div>
      </div>
    </div>
  </div>
  <div class="detail_mnu_box"></div>
  <div class="detail_wrap_content">
    <div class="content_left">
      <div class="day_box">
        <div class="info_box">
          <div class="info_txt"></div>
          <div class="info_day">
            <div class="day_info_left">
              <!-- 여행 시작 날짜 -->
              <div class="date">{{ plan.startDate }}</div>
              <!-- 여행 장소 -->
              <div class="day_title">{{ plan.region }}</div>
            </div>
          </div>
        </div>
        <!-- day 리스트 -->
        <div class="day_list_box">
          <div class="day_list_num">
            <!-- 날짜 1일 ~ x일 -->
            <div class="sch_num">1</div>
          </div>
          <div class="list_content">
            <img
                src="http://img.earthtory.com/img/place_img/310/6752_0_et.jpg"
                alt="" class="spot_img"
                onerror="this.src='/res/img/common/no_img/sight55.png';"
                onclick="window.open('/ko/city/seoul_310/attraction/seoul-city-hall_6752');"
                style="cursor:pointer;">
            <div class="spot_content_box">
              <!-- 여행 행사 추가한 것 일차 별로 -->
              <div class="spot_name" onclick="window.open('/ko/city/seoul_310/attraction/seoul-city-hall_6752');" style="cursor:pointer;">서울 시청</div>
              <!-- 태그 이름 -->
              <div class="spot_info">
                <div class="tag">관공서/정부청사</div>
                <div class="clear"></div>
              </div>
            </div>
            <!-- 사진 또는  -->
            <div class="spot_btn_box">
              <img src="/res/img/mypage/plan/sub/map_ico.png" alt="" class="spot_btn map_view" onclick="set_center(37.56658600,126.97792800)">
              <img src="/res/img/mypage/plan/sub/info_ico.png" alt="" class="spot_btn spot_info_btn" onclick="window.open('/ko/city/seoul_310/attraction/seoul-city-hall_6752');">
              <div class="clear"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 지도 -->
    <div class="content_right"></div>
  </div>

</div>
</template>

<script>
import axios from "axios";

export default {
  name: "UnkownDetail",
  data () {
    return {
      PlanDate: [],
      planList: [],
      userId: '',
      planId: '',
      startDate: '',
      endDate: '',
    }
  },
  created() {
    // this.userId = localStorage.getItem('id');
    // this.planId = this.$route.params.planID;
    this.planId = this.$route.params.planId;
    axios.get(`http://kosa3.iptime.org:50201/planDetail/${this.planId}`)
        .then(result => {
          if (result.status == 200 ) {
            console.log(result)
            this.plan = result.data
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
    let curr = new Date(m1);
    let timeString_KR = curr.toLocaleString("ko-KR", {timeZone: "Asia/Seoul"});
    console.log(timeString_KR)
  },
  methods: {
  }
}
</script>

<style scoped>

</style>