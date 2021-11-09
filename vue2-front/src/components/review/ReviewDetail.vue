<template>
  <div class="review">
    <div class="review-top">
      <div class="container">
        <h5 class="review-region">{{ Review.region }}</h5>
        <h1 class="review-title">{{ Review.reviewTitle }}</h1>
        <h6 class="review-user">by.{{ Review.nickName }} &nbsp;&nbsp;&nbsp; {{ Review.reviewDate }}</h6>
      </div>
    </div>
    <hr>
    <div class="review-middle">
      <div class="mytravel">
        <div class="mytravel-title"><span id="username">🚗 {{ Review.nickName }}</span>님의 여행 일정</div>
        <TravelList :items="TourItemData" class="travellist mb-4"/>
      </div>
      <div class="review-content" v-html="Review.reviewContent">
      </div>
      <div class="review-bottom">
        <div class="review-control">
          <span class="review-modify rh p-1" v-if="userID === reviewUserID">수정</span>
          <span class="review-delete rh p-1 mr-3" v-if="userID === reviewUserID">삭제</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TravelList from "./TravelList";
import axios from "axios";

export default {
  name: 'ReviewDetail',
  data() {
    return {
      TourItemData: [],
      Review: {},
      userID: '',
      reviewID: '',
      reviewUserID:'',
    }
  },
  created() {
    this.userID = localStorage.getItem('id')
    this.reviewID = this.$route.params.reviewId
    console.log(this.reviewID)
    axios.get(`http://kosa3.iptime.org:50201/review/${this.reviewID}`).then(res => {
      if (res.status === 200) {
        this.Review = res.data
        this.Review.reviewDate = this.Review.reviewDate.substr(0, 10)
        axios.get(`http://kosa3.iptime.org:50201/plan/getPlan/${res.data.planID}`).then(res => {
          if(res.status == 200) {
            this.TourItemData = res.data.planList;
            this.reviewUserID = res.data.userID;
          }
        }).catch(err => {
          console.log("에러발생: " + err)
          //에러 처리 할 곳
          alert("에러발생");
        })
      }
    }).catch(function (err) {
      console.log("에러발생: " + err)
      //에러 처리 할 곳
      alert("에러발생");
    })
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

.review {
  min-width: 1000px;
  margin: 100px 300px;
  text-align: center;
}

.review-top {
  max-width: 1300px;
  text-align: center;
}

.container {

  height: fit-content;
  text-align: left;
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

.travellist {
  margin: 10px;
  text-align: left;
}

.review-content {
  margin-top: 50px;
}

.review-bottom {
  width: 100%;
  height: fit-content;
  padding: 20px;
  margin-top: 100px;
}

.review-control {
  width: 100%;
  height: fit-content;
  text-align: right;
}

.rh:hover {
  color: #008F7A;
}

</style>