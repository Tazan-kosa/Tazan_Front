<template>
  <div class="container">
    <div class="reivew">
      <div class="container-top">
        <h1 class="head">
          <span id="userName">{{ userName }}</span>님의 여행 후기✈️
        </h1>
        <div>
          <h1 class="review-title" contenteditable="true">{{title}}</h1>
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
            <TravelList :items="TourItemData.planList" v-if="flag"/>
          </div>
        </div>
      </div>
      <div class="container-bottom mt-16">
        <div sticky-container class="review-content">
          <div v-sticky=true class="sticky mb-2">
            <h5 id="text">📗나의 여행 일기</h5>
          </div>
          <textarea class="form-control summernote reviewsummer" id="sm" rows="5"></textarea>
        </div>
        <div class="save">
          <button class="savebtn" @click="save">저장하기</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TravelList from "./TravelList";
import MyPlanModal from "./MyPlanModal";
import Sticky from "vue-sticky-directive";
import axios from "axios";

export default {
  name: 'reviewwrite',
  data() {
    return {
      TourItemData: {},
      ReviewData: {},
      flag: false,
      userName: '',
      userID: '',
      title: '',
      reviewContent: '',
      editFlag: false,
    }
  },
  created() {
    this.userName = localStorage.getItem('nickname')
    this.userID = localStorage.getItem('id')
    if(this.$route.params.planData){
      this.TourItemData = this.$route.params.planData;
      this.flag = true;
      this.ReviewData = this.$route.params.reviewData;
      this.title = this.ReviewData.reviewTitle
      this.reviewContent = this.ReviewData.reviewContent
      if(this.$route.params.reviewData){
        this.editFlag = true
      }
    }
  },
  directives: {Sticky},
  methods: {
    summernoteInsert() {
      window.$('.summernote').summernote('code',this.reviewContent);
    },
    selectedPlan(id) {
      this.flag = true;
      axios.get(`http://kosa3.iptime.org:50201/planDetail/${id[0]}`).then(res => {
        if(res.status == 200) {
          console.log("플랜데이터 세팅")
          this.TourItemData = res.data
          this.flag = true;
          this.ReviewData = ''
          this.title = ''
          this.reviewContent = ''
          this.summernoteInsert()
        }
      }).catch(err => {
        console.log("에러발생: " + err)
        //에러 처리 할 곳
        alert("에러발생");
      })
      if(id[1] == '1'){
        axios.get(`http://kosa3.iptime.org:50201/review/reviewWrite/${id[0]}`).then(res=> {
          if(res.status == 200){
            console.log(res.data)
            this.ReviewData = res.data;
            this.title = res.data.reviewTitle
            this.reviewContent = res.data.reviewContent
            this.editFlag = true
            this.summernoteInsert()
          }
        }).catch(err=> {
          console.log("에러 발생: " + err)
        });
      }
      else {
        this.editFlag = false
      }
    },
    save() {
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
      reviewVO.userID = localStorage.getItem("id")

      //plan에 있는 data 가져올거임
      reviewVO.planID = this.TourItemData.planID
      reviewVO.region = this.TourItemData.region
      reviewVO.startDate = this.TourItemData.startDate
      reviewVO.endDate = this.TourItemData.endDate
      console.log("플랜데이터")
      //생성된 날짜 삽입
      reviewVO.reviewDate = reviewdate

      //제목, 글 내용 가져와서 삽입
      reviewVO.reviewTitle = document.querySelector(".review-title").textContent
      reviewVO.reviewContent = window.$('.reviewsummer').val()
      reviewVO.reviewThumbnail = '';

      var div = document.createElement("div");
      div.innerHTML = reviewVO.reviewContent
      for (var i = 0; i < div.children.length; i++){
        if(div.children.item(i).children.length > 0){
          reviewVO.reviewThumbnail = div.children.item(i).children.item(0).getAttribute("src")
          break
        }
      }
      if(this.editFlag){
        reviewVO.reviewID = this.ReviewData.reviewID
        axios.put(`http://kosa3.iptime.org:50201/review/update`, reviewVO, {
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
          },
        }).then(res => {
          if (res.status === 200) {
            this.$router.push(`/reviewDetail/${this.ReviewData.reviewID}`).then((() =>window.scrollTo(0,0) ))
          }
        }).catch (err => {
          console.log("에러발생(수정): " + err)
          alert("제목과 내용 중 빠트린 부분이 없는지 확인해주세요.");
        })
      }
      else{
        axios.post('http://kosa3.iptime.org:50201/review/upload', reviewVO, {
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
          },
        }).then(res => {
          if (res.status === 200) {
            this.$router.push(`/reviewDetail/${res.data}`).then((() =>window.scrollTo(0,0) ))
          }
        }).catch(function (err) {
          console.log("에러발생(작성): " + err)
          //에러 처리 할 곳
          alert("제목과 내용 중 빠트린 부분이 없는지 확인해주세요.");
        })
      }
    },
  },
  components: {
    TravelList,
    MyPlanModal
  },
  mounted() {
    window.$('.summernote').summernote({
          placeholder: '여행 일기를 작성해주세요.',
          tabsize: 2,
          height: 500,
          toolbar: [
          ['style', ['bold', 'italic', 'underline', 'clear']],
          ['fontsize', ['fontsize']],
          ['color', ['color']],
          ['para', ['ul', 'ol', 'paragraph']],
          ['insert', ['picture']],
        ]
    });
    if(this.editFlag){
      this.summernoteInsert()
    }
  }
}
</script>

<style>
.container {
  width: 100%;
}

.reivew{
  max-width: 1100px;
  margin: 100px auto;
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

.review-content {
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

.save {
  text-align: right;
}

.savebtn {
  padding: 10px;
}
</style>