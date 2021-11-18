<template>
  <div>
    <header class="py-3" id="headerstyle">
      <div class="container px-4 px-lg-5 c1">
        <div class="text-center text-white">
          <h1 class="display-4 fw-bolder listTitle">Tazan Place</h1>
          <h6 class="listsubTitle">각각의 특색이 살아있는 지역 행사입니다</h6>
          <p class="lead fw-normal mb-0 searchnotion">검색 키워드를 입력 해주세요!<br>원래대로 돌아오려면 새로고침을 하시거나 빈내용을 검색하세요</p>
          <div class="input-group mb-3 mt-3">
            <input id="searchbar" type="text" class="form-control form-control-lg" placeholder="행사 지역/행사 이름 등"
                   @keyup.enter="searchTourList">
            <button class="input-group-text btn-success" @click="searchTourList"><i class="bi bi-search me-2"></i>
              Search
            </button>
          </div>
        </div>
      </div>
    </header>
    <section class="py-0">
      <div class="container px-4 px-lg-5 mt-3 c2">
        <Select :enddate="enddate" :startdate="startdate"/>
        <p class="datewarning" v-if="startdate>enddate"><b>날짜입력 오류입니다. 다시 확인해주세요.</b></p>
        <CheckBox :tagname="Tagnames" :checkedtag="checkedtag"/>
        <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          <Box v-for="(item, i) in TourItemList" :key="i" :item="item" :checkedtag="checkedtag"/>
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
import Box from './Box.vue'
import axios from 'axios'
import Select from "@/components/list/Select";

export default {
  name: 'TourList',
  data() {
    return {
      TourItemList: [],
      Tagnames: Tagname,
      checkedtag: ['관광지', '문화시설', '축제공연행사', '여행코스', '레포츠', '숙박', '쇼핑', '음식점'],
      startdate: '',
      enddate: '',
    }
  },
  components: {
    Box,
    CheckBox,
    Select
  },
  methods: {
    searchTourList() {
      var value = document.getElementById("searchbar").value
      var start = document.querySelector("#startdate").value
      var end = document.querySelector("#enddate").value
      this.startdate = start
      this.enddate = end
      if(start<=end){
        if(!value){
          value="_"
        }
        axios.get(`http://kosa3.iptime.org:50201/search/${value}/${this.startdate}/${this.enddate}`)
            .then(result => {
              this.TourItemList = result.data
            })
            .catch(function (err) {
              console.log("에러발생: " + err)
            })
      }
    },
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
    axios.get('http://kosa3.iptime.org:50201/tourList')
        .then(result => {
          this.TourItemList = result.data
        })
        .catch(function (err) {
          console.log("에러발생: " + err)
        })
  }

}
</script>

<style scoped>

#headerstyle {
  background-image: url('https://cdn.pixabay.com/photo/2019/08/12/06/13/republic-of-korea-4400510_960_720.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

p {
  margin-bottom: 0px;
}

.c1{
  padding-bottom: 0px;
}

.listsubTitle{
  color:#13bea6;
  font-size: 1em;
  padding-bottom: 15px;
}
.listTitle{
  color:#12806d;
  font-size: 4em;
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: black;
}
.searchnotion{
  color:#bfbdb8;
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

.datewarning {
  text-align: center;
  color: red;
}

header {
  background: #008E9B;
}

::-webkit-input-placeholder {
  text-align: center;
}

:-moz-placeholder { /* Firefox 18- */
  text-align: center;
}

::-moz-placeholder { /* Firefox 19+ */
  text-align: center;
}

:-ms-input-placeholder {
  text-align: center;
}
</style>