<template>
  <div>
    <div>
      <!-- 메인페이지 시작 -->
      <div id="tour-main" class="carousel slide" data-bs-ride="carousel">
        <ol class="carousel-indicators">
          <li data-bs-target="#tour-main" data-bs-slide-to="0" class="active"></li>
          <li data-bs-target="#tour-main" data-bs-slide-to="1"></li>
          <li data-bs-target="#tour-main" data-bs-slide-to="2"></li>
        </ol>

        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="container">
              <!-- 메인비디오 - 1 -->
              <video class="main-video" muted autoplay loop>
                <source src="../../assets/bg_v_jeonju_1080.mp4" type="video/mp4">
              </video>
            </div>
          </div>

          <div class="carousel-item">
            <div class="container">
              <!-- 메인비디오 - 2 -->
              <video class="main-video" muted autoplay loop>
                <source src="../../assets/bg_v_seoul_2_1080.mp4" type="video/mp4">
              </video>
            </div>
          </div>

          <div class="carousel-item">
            <div class="container">
              <!-- 메인비디오 - 3 -->
              <video class="main-video" muted autoplay loop>
                <source src="../../assets/bg_v_Incheon_3_1080.mp4" type="video/mp4">
              </video>
            </div>
          </div>
        </div>

        <!-- 다음비디오 좌우 화살표 -->
        <a class="carousel-control-prev text-decoration-none w-10 ps-3" href="#tour-main"
           role="button" data-bs-slide="prev">
          <img src="../../assets/left-rbg.png" height="24" width="24" alt="prev-left-btn"/></a>
        <a class="carousel-control-next text-decoration-none w-10 pe-3" href="#tour-main"
           role="button" data-bs-slide="next">
          <img src="../../assets/right-rbg.png" height="24" width="24" alt="next-right-btn"/></a>
      </div>
    </div>

    <!-- 여행지 리스트 -->
    <section class="container py-5">
      <div class="row text-center pt-3">
        <div class="col-lg-6 m-auto">
          <h1 class="h1">베스트 추천 여행지✈️</h1>
        </div>
      </div>
      <div class="row">
        <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          <Box id="listbox" v-for="(item, i) in TourItemList" :key="i" :item="item" :checkedtag="checkedtag"/>
        </div>
      </div>
    </section>
    <!-- 여행지 리스트 끝 -->

    <!-- 여행 후기 리스트 시작 -->
    <section class="container py-5">
      <div class="row text-center pt-3">
        <div class="col-lg-6 m-auto">
          <h1 class="h1">이달의 베스트 여행후기✍️</h1>
        </div>
      </div>
      <div class="row">
        <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          <ReviewBox id="listbox" v-for="(item, i) in ReviewItemList" :key="i" :item="item" :checkedtag="checkedtag"/>
        </div>
      </div>
    </section>
    <!-- 여행 후기 리스트 끝 -->
    <!-- 메인 페이지 끝 -->
  </div>

</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./main.css";
import Tagname from "@/components/list/tagnames";
import Box from '../list/Box'
import ReviewBox from "../list/ReviewBox";

export default {
  name: 'Main',

  data() {
    return {
      TourItemList: [],
      ReviewItemList: [],
      Tagnames: Tagname,
      checkedtag: ['관광지', '문화시설', '축제공연행사', '여행코스', '레포츠', '숙박', '쇼핑', '음식점'],
    }
  },
  components: {
    Box, ReviewBox
  },
  methods: {

  },
  created() {
    this.$axios.get('/tourListTopFour')
        .then(result => {
          this.TourItemList = result.data
        })
        .catch(function (err) {
          console.log("에러발생: " + err)
        })
    this.$axios.get('/review/recent')
        .then(result => {
          this.ReviewItemList = result.data
        })
        .catch(function (err) {
          console.log("에러발생: " + err)
        })
  }
}
</script>

<style scoped>
#listbox {
  float: left;
}

.main-video {
  width: 100%;
}

h1 {
  font-family: 'Jua', Noto Sans KR, sans-serif;
}
</style>