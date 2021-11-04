<template>
  <div class="review">
    <div class="review-top">
      <div class="container">
        <h5 class="review-region">{{Review.Region}}</h5>
        <h1 class="review-title">{{ Review.ReviewTitle }}</h1>
        <h6 class="review-user">by.{{ Review.NickName }}  &nbsp;&nbsp;&nbsp; {{Review.ReviewDate}}</h6>
      </div>
    </div>
    <hr>
    <div class="review-middle">
      <div class="mytravel">
        <div class="mytravel-title"> <span id="username">🚗 {{ Review.NickName }}</span>님의 여행 일정</div>
        <TravelList :items="TourItemData" class="travellist mb-4"/>
      </div>
      <div v-for="(item,i) in Review.ReviewContent" :key="i">
        <div v-if="item.img !== ''">
          <img class="review-img" :src="`${item.img}`"/>
        </div>
        <div class="review-text" v-if="item.content !== ''"> {{item.content}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import Review from './review'
import TourItemData from "./myplan.js";
import TravelList from "./TravelList";

export default {
  name: 'ReviewDetail',
  data() {
    return {
      TourItemData: TourItemData,
      Review: Review,
    }
  },
  components: {
    TravelList
  }
}
</script>

<style scoped>

div {
  font-family: 'Noto Sans KR', sans-serif;
}

.review{
  margin: 100px 300px;
  text-align: center;
}
.review-top {
  max-width: 1000px;
  text-align: center;
}

.container{

  height: fit-content;
  text-align: left;
}

.review-title {
  margin-top: 10px;
}

.review-user {
  margin-top: 50px;
}

.review-middle {
  text-align: center;
}

.mytravel-title {
  text-align: left;
  margin-left: 50px;
}

.travellist{
  margin: 10px;
  text-align: left;
}

.review-img {
  width: fit-content;
  height: fit-content;
  text-align: center;
  padding: 10px;
}

</style>