<template>
  <div>
    <header class="py-5" id="headerstyle">
      <div class="container px-4 px-lg-5">
        <div class="text-center text-white">
          <h1 class="display-4 fw-bolder">후기 리스트</h1>
          <p class="lead fw-normal text-white-50 mb-0">검색 키워드를 입력 해주세요!<br>원래대로 돌아오려면 새로고침을 하시거나 빈내용을 검색하세요</p>
          <div class="input-group mb-3">
            <input id="searchbar" type="text" class="form-control form-control-lg" placeholder="후기 제목/지역 이름 등" @keyup.enter="searchTourList">
            <button class="input-group-text btn-success" @click="searchTourList"><i class="bi bi-search me-2"></i>
              Search
            </button>
          </div>
        </div>
      </div>
    </header>

    <section class="py-0">
      <div class="container px-4 px-lg-5 mt-3">
        <Select @selectedDate="selectedDate" :enddate="enddate" :startdate="startdate"/>
        <p class="datewarning" v-if="startdate>enddate"><b>날짜입력 오류입니다. 다시 확인해주세요.</b></p>
        <CheckBox :tagname="Tagnames" :checkedtag="checkedtag"/>
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
import CheckBox from "@/components/list/CheckBox";
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
    }
  },
  components: {
    ReviewBox,
    CheckBox,
    Select

  },
  methods: {
    searchTourList() {
      const value = document.getElementById("searchbar").value
      axios.get(`http://kosa3.iptime.org:50201/review/search/${value}`)
          .then(result => {
            this.ReviewItemList=result.data
            console.log(this.ReviewItemList)
          })
          .catch(function (err) {
            console.log("에러발생: " + err)
          })
    },
    selectedDate({start, end}) {
      this.startdate = start
      this.enddate = end
      if (start <= end) {
        axios.get(`http://kosa3.iptime.org:50201/review/selectdate/${this.startdate}/${this.enddate}`)
            .then(result => {
              console.log(result.data)
              this.ReviewItemList = result.data
            })
            .catch(function (err) {
              console.log("에러발생: " + err)
            })
      }
    }
  },
  created() {
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
          this.ReviewItemList=result.data
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
p{
  margin-bottom: 0px;
}
#searchbar {
  text-align: center;
}
.button2 {
  border-radius: 4px;
}

.checkbox {
  display: flex;
  margin-bottom: 5px;
}

header {
  background: #00BF72;
}

.datewarning {
  color: red;
}

.datewarning b {
  font-size: 15px;
}
</style>