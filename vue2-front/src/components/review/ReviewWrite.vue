<template>
  <div>
    <div class="container">
      <div class="container-top">
        <div class="head">
          윤현조님의 여행 후기
        </div>
        <div>
          <h1 class="review-title" contenteditable="true"></h1>
        </div>
      </div>
      <hr/>
      <div class="container-middle">
        <div class="mylist">
          <p id="mylist-btn">내 계획 불러오기</p>
          <div class="mylist-data">
            <TravelList :items="TourItemData"/>
          </div>
        </div>
      </div>
      <div class="container-bottom">
        <div class="review">
          <p id="text">나의 여행 일기</p>
          <div class="review-content">
            <div class="review-text" contenteditable="true"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TravelList from "./TravelList";
import TourItemData from "../list/sample";

export default {
  name: 'reviewwrite',
  data() {
    return {
      TourItemData: TourItemData,
    }
  },
  methods: {
    api() {
      // axios.get('http://api.kcisa.kr/openapi/service/rest/meta4/getKCPG0504', {
      //   params: { serviceKey : 'a24c37fd-b4cf-47e0-b053-f0ddae93184e'}
      // }).then(res=> {
      //   this.festival = res.data.response.body.items.item
      //   console.log(this.festival)
      // })
    }
  },
  components: {
    TravelList
  }
}
</script>

<style scoped>
.container {
  width: 100%;
}
.container-top {
  text-align: center;
  position: relative;
}

.head {
  padding: 50px;
  text-align: center;
}

.review-title {
  padding: 20px;
  text-align: left;
}

.review-title:empty:before {
  content: '제목을 입력하세요';
  cursor: text;
  color: #ccc;
  opacity: 0.6;
  display: block
}

.container-middle {
  position: relative;
}

.mylist {}

#mylist-btn {
  width:fit-content;
  height: fit-content;
  padding: 5px;
  margin-left: 10px;
}

.container-bottom{

}

.review {

}

#text {
  text-align: left;
  padding: 5px;
  margin: 30px 0px 0px 10px;
}

.review-content {
  text-align: left;
  padding: 15px;
  min-height: 500px;
}

.review-text {
  padding: 10px;
}

.review-text:empty:before {
  content: '여행 일기를 작성해주세요.';
  cursor: text;
  color: #ccc;
  opacity: 0.6;
  display: block;
  min-height: 300px;
}

</style>