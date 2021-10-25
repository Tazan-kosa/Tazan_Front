<template>
  <div>
    <header class="py-5">
      <div class="container px-4 px-lg-5 my-5">
        <div class="text-center text-white">
          <h1 class="display-4 fw-bolder">여행지 리스트</h1>
          <p class="lead fw-normal text-white-50 mb-0">여행의 키워드를 입력해주세요! / 여행가고싶은 지역을 입력해주세요!</p>
          <div class="input-group rounded">
            <input type="search" class="form-control rounded" placeholder="ex) 경기/서울/부산  | 궁궐/관람/레저 " aria-label="Search"
                   aria-describedby="search-addon"/>
            <button class="button2">
              <span class="input-group-text border-0" id="search-addon">
                <i class="bi bi-search"></i>
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
    <!--main page-->
    <section class="py-0">
      <div class="container px-4 px-lg-5 mt-3">
        <CheckBox :tagname="Tagnames" @checkedtag="checkedtaglist"/>
        <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          <!-- <Select/> -->
          <Box v-for="(item, i) in TourItemList" :key="i" :item="item" :tagname="checkedtag" />
        </div>
      </div>
    </section>
  </div>
</template>
<script>

import TourItemList from './sample'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
// import CheckBox from "@/components/list/CheckBox";
import CheckBox from "./CheckBox";
// import Tagnames from "@/components/list/tagnames";
import Tagnames from "./tagnames";
import Box from './box.vue'

// import Select from './Select.vue'
export default {
  name: 'TourList',
  data() {
    return {
      TourItemList: TourItemList,
      Tagnames: Tagnames,
      checkedtag:['관광지','문화시설','축제공연행사','여행코스','레포츠','숙박','쇼핑', '음식점']
    }
  },
  components: {
    Box,
    // Select
    CheckBox,

  },
  methods:{
    checkedtaglist(tags){
      this.checkedtag=tags
      console.log(this.checkedtag)
    },

  }

}
</script>

<style scoped>
.button2 {
  border-radius: 4px;
}

.checkbox {
  display: flex;
  margin-bottom: 2px;
}
header{
  background: #008E9B;
}
</style>