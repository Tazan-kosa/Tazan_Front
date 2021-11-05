<template>
  <div>
    <div class="container">
      <div class="container-top">
        <h1 class="head">
          <span id="userName">윤현조</span>님의 여행 후기✈️
        </h1>
        <div>
          <h1 class="review-title" contenteditable="true"></h1>
        </div>
      </div>
      <hr/>
      <div class="container-middle">
        <div class="mylist">
          <MyPlanModal @selectedPlan="selectedPlan"/>
          <div class="mylist-data">
            <div class="before" v-if="!flag" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
              <p>계획을 불러와주세요!</p>
            </div>
            <TravelList :items="TourItemData" v-if="flag"/>
          </div>
        </div>
      </div>
      <div class="container-bottom">
        <div sticky-container class="review">
          <div v-sticky=true class="sticky">
            <h5 id="text">📗나의 여행 일기</h5>
            <!--            <span>-->
            <!--            <input ref="imageUploader" @change="appendImg" multiple accept="image/*" type="file" id="file"-->
            <!--                   class="input-img" title="이미지"/>-->
            <!--            <label for="file" class="input-plus">사진 추가</label>-->
            <!--          </span>-->
          </div>
          <textarea class="form-control summernote reviewsummer" rows="5"></textarea>
          <!--          <div class="review-content" contenteditable="true">-->
          <!--            <p class="review-text"></p>-->
          <!--          </div>-->
        </div>
        <div class="save">
          <button class="savebtn" @click="save2">저장하기</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TravelList from "./TravelList";
import TourItemData from "./myplan.js";
import MyPlanModal from "./MyPlanModal";
import Sticky from "vue-sticky-directive";
import axios from "axios";

export default {
  name: 'reviewwrite',
  data() {
    return {
      TourItemData: TourItemData,
      flag: false,
      img: '',
    }
  },
  directives: {Sticky},
  methods: {
    appendImg(e) {
      let file = e.target.files;
      this.img = file
      let url = URL.createObjectURL(file[0])
      console.log(url)
      var div = document.createElement("div");
      let p = document.createElement("p");
      div.innerHTML = `<img src="${url}"/>`;
      div.className += "reviewImg"
      div.contentEditable = false;
      p.innerHTML = "<br>"
      p.className += "review-text"

      var par = document.getElementsByClassName("review-content")[0];
      par.appendChild(div);
      par.append(p);
      this.$refs.imageUploader.value = '';    // input 동일 파일 연속 선택 시 발생하는 문제 해결
    },
    selectedPlan(id) {
      this.flag = true;
      console.log(id);
    },
    save2() {
      //오늘 날짜 입력을 위한 부분
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
      //yyyy-mm-dd로 오늘날짜 생성
      var reviewdate = year + '-' + month + '-' + day

      //보낼 vo 객체
      let reviewVO = {}

      //logoin 연동 되면 localStrage에서 가져올 것임
      reviewVO.userID = 1//localStorage.getItem("id")

      //plan에 있는 data 가져올거임
      reviewVO.planID = 1
      reviewVO.region = "서울"
      reviewVO.startDate = "2021-04-12"
      reviewVO.endDate = "2021-04-14"

      //생성된 날짜 삽입
      reviewVO.reviewDate = reviewdate

      //제목, 글 내용 가져와서 삽입
      reviewVO.reviewTitle = document.querySelector(".review-title").textContent
      reviewVO.reviewContent = window.$('.reviewsummer').val()

      axios.post('http://kosa3.iptime.org:50201/review/upload', reviewVO, {
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
      }).then(res => {
        if (res.status === 200) {
          //성공시 list page 리다이렉트? 그런거 처리하면 될듯
        }
      }).catch(function (err) {
        console.log("에러발생: " + err)
        //에러 처리 할 곳
        alert("에러발생");
      })
    },
    save() {
      var content = document.getElementsByClassName("review-content");
      // console.log(content.item(0).children);
      // var reviewVO={}
      // var ReviewContent = [];
      var ReviewContent = new FormData();
      let img;
      for (var i = 0; i < content.item(0).children.length; i++) {
        // const formdata = new FormData();
        //이미지인 경우
        if (content.item(0).children.item(i).tagName === "DIV") {
          var url = content.item(0).children.item(i).children.item(0).getAttribute("src");
          var myFile = new File([url], "review-image.jpg", {type: "image/jpg"});
          console.log(myFile)
          img = URL.createObjectURL(myFile)

          // ReviewContent.push(formdata);
          // console.log("di" + formdata);
        }
        //글인 경우
        // else {
        //   ReviewContent.push(content.item(0).children.item(i).textContent);
        //   // formdata.append("content", );
        // }
      }
      var div = document.createElement("div");
      div.innerHTML = `<img src="${img}"/>`;
      div.className += "reviewImg"
      div.contentEditable = false;

      var par = document.getElementsByClassName("review-content")[0];
      par.appendChild(div);
      // formdata.append("img", myFile);
      console.log(myFile);
      ReviewContent.append("img", myFile);
      console.log(ReviewContent)
      // reviewVO.reviewContent=ReviewContent;
      // console.log(reviewVO);
      // axios.post('http://kosa3.iptime.org:50201/review/upload',ReviewContent,{
      //   headers: {
      //     'Content-Type' : 'multipart/form-data',
      //   },
      // }).then(res=> {
      //   console.log(res)
      // })
    }
  },
  components: {
    TravelList,
    MyPlanModal
  },
  mounted() {
    window.$('.summernote').summernote({
          tabsize: 2,
          height: 300
        }
    );
  }
}
</script>

<style>
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
  white-space: nowrap;
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

#mylist-btn {
  width: fit-content;
  height: fit-content;
  padding: 5px;
  margin-left: 10px;
}

.before {
  width: 100%;
  height: 350px;
  text-align: center;
  background-color: #e2e2e2;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.review {
  margin-top: 30px;
}

.sticky {
  display: flex;
  background-color: white;
}

#text {
  text-align: left;
  padding: 5px;
  margin: 30px 0 0 10px;
}

.input-img {
  display: none;
}

.input-plus {
  cursor: pointer;
  left: 0;
  padding: 5px;
  margin: 30px 0 0 10px;
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

.review-text:empty:before {
  content: '여행 일기를 작성해주세요.';
  cursor: text;
  color: #ccc;
  opacity: 0.6;
  outline: none;
  text-align: left;
}

.review-text {
  margin-bottom: 0px;
  text-align: center;
}

.reviewImg {
  text-align: center;
  padding: 10px;
}

.save {
  text-align: right;
}

.savebtn {
  padding: 10px;
}
</style>