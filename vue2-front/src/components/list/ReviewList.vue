<template>
  <div>
    <header class="py-5">
      <div class="container px-4 px-lg-5 my-5">
        <div class="text-center text-white">
          <h1 class="display-4 fw-bolder">후기 리스트</h1>
          <p class="lead fw-normal text-white-50 mb-0">후기 검색 키워드를 입력해주세요!</p>
            <div class="input-group mb-3">
              <input id="searchbar" type="text" class="form-control form-control-lg" placeholder="관광지/문화시설 | 경기/서울">
              <button class="input-group-text btn-success" @click="searchTourList"><i class="bi bi-search me-2"></i> Search</button>
            </div>
        </div>
      </div>
    </header>
    <!--main page-->
    <section class="py-0">
      <div class="container px-4 px-lg-5 mt-3">
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

export default {
  name: 'TourList',
  data() {
    return {
      // TourItemList: TourItemList,
      TourItemList: [],
      Tagnames: Tagname,
      checkedtag: ['관광지', '문화시설', '축제공연행사', '여행코스', '레포츠', '숙박', '쇼핑', '음식점']
    }
  },
  components: {
    Box,
    CheckBox,

  },
  methods: {
    // checkedtaglist(tags) {
    //   this.checkedtag = tags
    //   console.log(this.checkedtag)
    // }
    searchTourList() {
      const value = document.getElementById("searchbar").value
      axios.get(`http://210.178.22.18:3000/search/${value}`)
          .then(result => {
            console.log(result.data)

          })
          .catch(function (err) {
            console.log("에러발생: " + err)
          })
    }
  },
  created() {
    axios.get('http://210.178.22.18:3000/test')
        .then(result => {
          this.TourItemList = result.data.sample
        })
        .catch(function (err) {
          console.log("에러발생: " + err)
        })
  }

}
</script>

<style scoped>
.button2 {
  border-radius: 4px;
}

.checkbox {
  display: flex;
  margin-bottom: 5px;
}

header {
  background: #008E9B;
}
</style>