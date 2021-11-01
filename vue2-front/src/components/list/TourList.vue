<template>
  <div>
    <header class="py-5">
      <div class="container px-4 px-lg-5 my-5">
        <div class="text-center text-white">
          <h1 class="display-4 fw-bolder">여행지 리스트</h1>
          <p class="lead fw-normal text-white-50 mb-0">여행가고싶은 지역을 입력해주세요!<br>원래대로 돌아오려면 새로고침을 하시거나 빈내용을 검색하세요</p>
            <div class="input-group mb-3">
              <input id="searchbar" type="text" class="form-control form-control-lg" placeholder="예시) 경기/강남/제주/해운대" @keyup.enter="searchTourList">
              <button class="input-group-text btn-success" @click="searchTourList"><i class="bi bi-search me-2"></i> Search</button>
            </div>
        </div>
      </div>
    </header>
    <!--main page-->
    <section class="py-0">
      <div class="container px-4 px-lg-5 mt-3">
        <Select @selectedDate="selectedDate" :enddate="enddate" :startdate="startdate"/>
        <p class="datewarning" v-if="startdate>enddate"><b>날짜입력 오류입니다. 다시 확인해주세요.</b></p>
        <!--        <CheckBox :tagname="Tagnames" :checkedtag="checkedtag" @checkedtag="checkedtaglist" />-->
        <CheckBox :tagname="Tagnames" :checkedtag="checkedtag"/>
        <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          <!-- <Select/> -->
          <Box v-for="(item, i) in TourItemList" :key="i" :item="item" :checkedtag="checkedtag"/>
        </div>
      </div>
    </section>
  </div>
</template>
<script>

// import TourItemList from './sample.js'
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
      // TourItemList: TourItemList,
      TourItemList: [],
      Tagnames: Tagname,
      checkedtag: ['관광지', '문화시설', '축제공연행사', '여행코스', '레포츠', '숙박', '쇼핑', '음식점'],
      startdate:'',
      enddate:'',
    }
  },
  components: {
    Box,
    CheckBox,
    Select
  },
  methods: {
    // checkedtaglist(tags) {
    //   this.checkedtag = tags
    //   console.log(this.checkedtag)
    // }
    searchTourList() {
      const value = document.getElementById("searchbar").value
      axios.get(`http://kosa3.iptime.org:50219/search/${value}`)
          .then(result => {
            this.TourItemList=result.data
          })
          .catch(function (err) {
            console.log("에러발생: " + err)
          })
    },
    selectedDate({start,end}){
      this.startdate=start
      this.enddate=end
      if(start<=end){
        axios.get(`http://kosa3.iptime.org:50219/selectdate/${this.startdate}/${this.enddate}`)
            .then(result => {
              this.TourItemList=result.data
            })
            .catch(function (err) {
              console.log("에러발생: " + err)
            })
      }
    }
  },
  created() {
    var temp =new Date()
    var year = temp.getFullYear();
    var month = temp.getMonth() + 1;
    var day = temp.getDate();

    if(month < 10){
      month = '0' + month;
    }
    if(day < 10){
      day = '0' + day;
    }
    this.startdate=year + '-' + month + '-' + day
    this.enddate=year + '-' + month + '-' + day
    axios.get('http://kosa3.iptime.org:50219/testdb')
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
#searchbar{
  text-align: center;
}
.button2 {
  border-radius: 4px;
}

.checkbox {
  display: flex;
  margin-bottom: 5px;
}

.datewarning{
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

::-moz-placeholder {  /* Firefox 19+ */
  text-align: center;
}

:-ms-input-placeholder {
  text-align: center;
}
</style>