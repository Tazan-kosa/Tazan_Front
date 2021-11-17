<template>
  <div class="all">
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
          <TravelList :items="TourItemData.planList" class="travellist mb-4"/>
        </div>
        <div class="review-content" v-html="Review.reviewContent">
        </div>
        <div class="review-bottom">
          <div class="review-control" v-if="userID == reviewUserID">
            <span class="review-modify rh p-1" @click="modifyReview">수정</span>
            <span class="review-delete rh p-1 mr-3" @click="deleteReview">삭제</span>
          </div>
        </div>
        <hr>
        <div class="comment">
          <h5 class="container-title"> 💌 댓글</h5>
          <div class="comment-box">
            <div class="comment-content" contenteditable="true"></div>
            <div class="save"><Button class="comment-btn" @click="commentSave">저장하기</Button></div>
          </div>
          <ReviewComment v-for="(item,i) in CommentsData" :key="i" :comment-data="item" @editComment="editComment"
                         @deleteComment="deleteComment"></ReviewComment>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TravelList from "./TravelList";
import ReviewComment from "./ReviewComment"
import axios from "axios";

export default {
  name: 'ReviewDetail',
  data() {
    return {
      TourItemData: [],
      Review: {},
      userID: '',
      reviewID: '',
      reviewUserID: '',
      CommentsData: [],
      commentEdit: false,
    }
  },
  created() {
    this.userID = localStorage.getItem('id')
    this.reviewID = this.$route.params.reviewId
    console.log("id : " + this.userID)
    axios.get(`http://localhost:80/review/${this.reviewID}`).then(res => {
      if (res.status === 200) {
        this.Review = res.data
        this.Review.reviewDate = this.Review.reviewDate.substr(0, 10)
        console.log("comment" + res.data.commentVO)
        if (res.data.commentVO != '') {
          console.log('log')
          this.CommentsData = res.data.commentVO
        }

        axios.get(`http://kosa3.iptime.org:50201/planDetail/${res.data.planID}`).then(res => {
          if (res.status == 200) {
            this.TourItemData = res.data;
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
  methods: {
    deleteReview() {
      axios.delete(`http://kosa3.iptime.org:50201/reviewDelete/${this.reviewID}/${this.Review.planID}`).then(res => {
        if (res.status == 200) {
          alert("후기를 삭제했습니다.");
          this.$router.push('/reviewList').then((() => window.scrollTo(0, 0)))
        }
      }).catch(err => {
        console.log(err)
      })
    },
    modifyReview() {
      this.$router.push({
        name: 'Review',
        params: {
          reviewData: this.Review,
          planData: this.TourItemData
        }
      }).then((() => window.scrollTo(0, 0)))
    },
    commentSave() {
      var commentVO = {}
      commentVO.userID = this.userID;
      commentVO.reviewID = this.reviewID

      commentVO.commentContent = document.getElementsByClassName("comment-content").item(0).innerHTML
      axios.post('http://kosa3.iptime.org:50201/comment/create', commentVO, {
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
      }).then(res => {
        if (res.status == 200) {
          console.log(res.data)
          this.CommentsData.push(res.data)
          document.getElementsByClassName("comment-content").item(0).textContent = ''
        }
      })
    },
    editComment(comment) {
      console.log(comment[0], comment[1])
    },
    deleteComment(id) {
      if (confirm("정말 삭제하시겠습니까?")) {
        axios.delete(`http://kosa3.iptime.org:50201/comment/delete/${id}`).then(res => {
          if (res.status == 200) {
            alert("댓글을 삭제하였습니다.")
            let list = this.CommentsData;
            list.splice(id, 1);
            this.CommentsData = list
          }
        }).catch(err => {
          alert("오류가 발생했습니다." + err)
        })
      }
    },
  },
  components: {
    TravelList,
    ReviewComment
  }
}
</script>

<style scoped>
.all {
  width: 100%;
  height: 100%;
  min-width: 800px;
}

.review {
  max-width: 1100px;
  margin: 100px auto;
  text-align: center;
}

.review-top {
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

.comment-content {
  text-align: left;
  outline: none;
  white-space: nowrap;
}

.comment-content:empty:before {
  content: '댓글을 작성해 주세요.';
  cursor: text;
  color: #ccc;
  opacity: 0.6;
  outline: none;
}

.comment-content {
  border: 1px #ccc solid;
  padding: 10px;
  border-radius: 5px;
  height: 120px;
  max-height: 120px;
  overflow-y: scroll;
  white-space: normal;
}

.comment-content::-webkit-scrollbar {
  width: 10px;
  height: 3px;
}
.comment-content::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.comment-content::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}
.comment-content::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.container-title {
  text-align: left;
  padding: 10px 0;
}
.save {
  text-align: right;
}

.comment-btn {
  padding: 10px;
}
</style>