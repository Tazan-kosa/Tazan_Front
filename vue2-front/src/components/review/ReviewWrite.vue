<template>
  <div>
    <div class="container">
      <div class="container-top">
        <div class="head">
          <span id="userName">윤현조</span>님의 여행 후기
        </div>
        <div>
          <h1 class="review-title" contenteditable="true"></h1>
        </div>
      </div>
      <hr/>
      <div class="container-middle">
        <div class="mylist">
          <MyPlanModal  @selectedPlan="selectedPlan"/>
          <div class="mylist-data">
            <TravelList :items="TourItemData"/>
          </div>
        </div>
      </div>
      <div class="container-bottom">
        <div class="review">
          <span id="text">나의 여행 일기</span>
          <span>
            <input @change="appendImg" multiple accept="image/*" type="file" id="file" class="input-img" title="이미지"/>
            <label for="file" class="input-plus">사진</label>
          </span>
          <div class="review-content" contenteditable="true">
            <p class="review-text" ></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TravelList from "./TravelList";
import TourItemData from "../list/sample";
import MyPlanModal from "./MyPlanModal";

export default {
  name: 'reviewwrite',
  data() {
    return {
      TourItemData: TourItemData,
      isModalOpen: false,
    }
  },
  methods: {
    api() {
      // axios.get('http://api.data.go.kr/openapi/tn_pubr_public_trrsrt_api', {
      //   params: { serviceKey : 'a24c37fd-b4cf-47e0-b053-f0ddae93184e'}
      // }).then(res=> {
      //   this.festival = res.data.response.body.items.item
      //   console.log(this.festival)
      // })
    },
    appendImg(e) {
      let file = e.target.files;
      console.log(file[0]);

      let url = URL.createObjectURL(file[0])
      console.log(url)

      var div = document.createElement("div");
      let p = document.createElement("p");
      div.innerHTML = `<img src="${url}"/>`;
      p.innerHTML = "<br>"
      p.className += "review-text"
      var par = document.getElementsByClassName("review-content")[0];
      par.appendChild(div);
      par.append(p);
    },
    selectedPlan(id) {
      console.log(id);
    }
  },
  components: {
    TravelList,
    MyPlanModal
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
  outline: none;
  white-space:nowrap;
}

.review-title:empty:before {
  content: '제목을 입력하세요';
  cursor: text;
  color: #ccc;
  opacity: 0.6;
  outline: none;
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
  margin: 30px 0 0 10px;
}

.input-img{
  display: none;
}

.input-plus {
  cursor: pointer;
}

.review-content {
  text-align: left;
  padding: 15px;
  min-height: 500px;
}

.review-content {
  padding: 10px;
  outline: none;
  min-height: 300px;
}

p.review-text{
  margin-bottom: 0px;
}

.review-text:empty:before {
  content: '여행 일기를 작성해주세요.';
  cursor: text;
  color: #ccc;
  opacity: 0.6;
  outline: none;
}

</style>