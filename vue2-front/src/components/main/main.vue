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
              <!-- main-video page 1 -->
              <video class="main-video" muted autoplay loop>
                <source src="../../assets/bg_v_jeonju_1080.mp4" type="video/mp4">
              </video>
            </div>
          </div>

          <div class="carousel-item">
            <div class="container">
              <!-- main-video page 2 -->
              <video class="main-video" muted autoplay loop>
                <source src="../../assets/bg_v_seoul_2_1080.mp4" type="video/mp4">
              </video>
            </div>
          </div>

          <div class="carousel-item">
            <div class="container">
              <!-- main-video page 3 -->
              <video class="main-video" muted autoplay loop>
                <source src="../../assets/bg_v_Incheon_3_1080.mp4" type="video/mp4">
              </video>
            </div>
          </div>
        </div>
        <!-- 동영상 이동-->
        <a class="carousel-control-prev text-decoration-none w-10 ps-3" href="#tour-main"
           role="button" data-bs-slide="prev" id="video-move-icon-1">
          <i class="fas fa-chevron-left"></i>
        </a>

        <a class="carousel-control-next text-decoration-none w-10 pe-3" href="#tour-main"
           role="button" data-bs-slide="next" id="video-move-icon-2">
          <i class="fas fa-chevron-right"></i>
        </a>
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
    <!-- 여행지 리스트 끝-->

    <!-- 여행후기 리스트 -->
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
    <!-- 여행후기 리스트 끝-->
    <!-- 메인페이지 끝-->
  </div>

</template>

<script>
// importing bootstrap 5 Modules, list component
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
    this.$axios.get('http://kosa3.iptime.org:50201/testdbTopFour')
        .then(result => {
          this.TourItemList = result.data
        })
        .catch(function (err) {
          console.log("에러발생: " + err)
        })
    this.$axios.get('http://kosa3.iptime.org:50201/review/recent')
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
/*.travel-container {*/
/*  overflow-x: scroll;*/
/*  display: flex;*/
/*}*/

#listbox {
  float: left;
}

.main-video {
  width: 100%;
}

#video-move-icon-1:hover {
  background-color: #E2E2E2;
}

#video-move-icon-2:hover {
  background-color: #E2E2E2;
}

</style>