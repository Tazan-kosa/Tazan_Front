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
        <CheckBox :tagname="Tagnames"/>
        <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          <!-- <Select/> -->
          <Box :items="TourItemList" />
        </div>
      </div>
    </section>
  </div>
</template>
<script>
//importing bootstrap 5 Modules
import TourItemList from './sample'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import CheckBox from "@/components/list/CheckBox";
import Tagnames from "@/components/list/tagnames";
import Box from './Box.vue'
// import Select from './Select.vue'
export default {
  name: 'TourList',
  data() {
    return {
      TourItemList: TourItemList,
      Tagnames: Tagnames
    }
  },
  components: {
    Box,
    // Select
    CheckBox,

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