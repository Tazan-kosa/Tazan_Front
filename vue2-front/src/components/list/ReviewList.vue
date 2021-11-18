<template>
  <div>
    <header class="py-3" id="headerstyle">
      <div class="container px-4 px-lg-5 c1">
        <div class="text-center text-white">
          <h1 class="display-4 fw-bolder listTitle">Tazan Review</h1>
          <h6 class="listsubTitle">먼저 다녀온 사람들의 후기를 확인해보세요</h6>
          <p class="lead fw-normal mb-0 searchnotion">검색 키워드를 입력 해주세요!<br>원래대로 돌아오려면 새로고침을 하시거나 빈내용을 검색하세요</p>
          <div class="input-group mb-3 mt-3">
            <input id="searchbar" type="text" class="form-control form-control-lg" placeholder="후기 제목/지역 이름 등"
                   @keyup.enter="searchReviewList">
            <button class="input-group-text btn-success" @click="searchReviewList"><i class="bi bi-search me-2"></i>
              Search
            </button>
          </div>
        </div>
      </div>
    </header>

    <section class="py-0">
      <div class="container px-4 px-lg-5 mt-3 c2">
        <div class="box">
          <Select :enddate="enddate" :startdate="startdate"/>
          <b-button variant="primary" class="reviewBtn p-2" @click="goRiviewWrite">여행 후기 작성</b-button>
        </div>
        <p class="datewarning" v-if="startdate>enddate"><b>날짜입력 오류입니다. 다시 확인해주세요.</b></p>
        <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          <ReviewBox v-for="(item, i) in ReviewItemList" :key="i" :item="item" :checkedtag="checkedtag"/>
        </div>
      </div>
    </section>
  </div>
</template>
<script>

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Tagname from "@/components/list/tagnames";
import ReviewBox from './ReviewBox'
import axios from 'axios'
import Select from "@/components/list/Select";

export default {
  name: 'ReviewList',
  data() {
    return {
      ReviewItemList: [],
      Tagnames: Tagname,
      checkedtag: ['관광지', '문화시설', '축제공연행사', '여행코스', '레포츠', '숙박', '쇼핑', '음식점'],
      startdate: '',
      enddate: '',
      userID: '',
    }
  },
  components: {
    ReviewBox,

    Select

  },
  methods: {
    goRiviewWrite() {
      console.log()
      if (this.userID == null) {
        alert("로그인 후 이용 부탁드립니다.")
        this.$router.push('/login').then((() => window.scrollTo(0, 0)))
      } else {
        this.$router.push('/review');
      }
    },
    searchReviewList() {
      var value = document.getElementById("searchbar").value
      var start = document.querySelector("#startdate").value
      var end = document.querySelector("#enddate").value
      this.startdate = start
      this.enddate = end
      if (start <= end) {
        if (!value) {
          value = "noneKeyword"
        }
        axios.get(`http://kosa3.iptime.org:50201/review/search/${value}/${this.startdate}/${this.enddate}`)
            .then(result => {
              this.ReviewItemList = result.data
            })
            .catch(function (err) {
              console.log("에러발생: " + err)
            })
      }
    },
  },
  created() {
    this.userID = localStorage.getItem('id')
    var temp = new Date()
    var year = temp.getFullYear();
    var month = temp.getMonth() + 1;
    var day = temp.getDate();

    if (month < 10) {
      month = '0' + month;
    }
    if (day < 10) {
      day = '0' + day;
    }
    this.startdate = year + '-' + month + '-' + day
    this.enddate = year + '-' + month + '-' + day
    axios.get('http://kosa3.iptime.org:50201/review/reviewList')
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
#headerstyle {
  background-image: url('https://cdn.pixabay.com/photo/2017/06/05/11/01/airport-2373727_960_720.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

}

p {
  margin-bottom: 0px;
}

.c1 {
  padding-bottom: 0px;
}

.listsubTitle {
  color: #e0e0e0;
  font-size: 1em;
  padding-bottom: 15px;
}

.listTitle {
  color: #0e69ff;
  font-size: 4em;
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: white
}

.searchnotion {
  color: #a2a0a6;
}

#searchbar {
  text-align: center;
}

.button2 {
  border-radius: 4px;
}

header {
  background: #00BF72;
}

.datewarning {
  text-align: center;
  color: red;
}

.box {
  display: flex;
}

.reviewBtn {
  width: fit-content;
  height: fit-content;
  text-align: center;
  margin-top: 10px;
  margin-left: 20px;
}
</style>