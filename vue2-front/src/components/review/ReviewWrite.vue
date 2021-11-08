<template>
  <div>
    <div class="container">
      <div class="container-top">
        <h1 class="head">
          <span id="userName">{{ userName }}</span>님의 여행 후기✈️
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
          <div v-sticky=true class="sticky mb-2">
            <h5 id="text">📗나의 여행 일기</h5>
          </div>
          <textarea class="form-control summernote reviewsummer" rows="5"></textarea>
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
      TourItemData: [],
      flag: false,
      userName: '',
      userID: '',
    }
  },
  created() {
    this.userName = localStorage.getItem('nickname')
    this.userID = localStorage.getItem('id')
  },
  directives: {Sticky},
  methods: {
    selectedPlan(id) {
      this.flag = true;
      axios.get(`http://kosa3.iptime.org:50201/plan/getPlan/${id}`).then(res => {
        if(res.status == 200) {
          this.TourItemData = res.data.planList
        }
      }).catch(err => {
        console.log("에러발생: " + err)
        //에러 처리 할 곳
        alert("에러발생");
      })
      console.log(id);
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
          console.log(res.data)
          this.$router.push(`/reviewDetail/${res.data}`)
        }
      }).catch(function (err) {
        console.log("에러발생: " + err)
        //에러 처리 할 곳
        alert("에러발생");
      })
    },
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

.save {
  text-align: right;
}

.savebtn {
  padding: 10px;
}
</style>