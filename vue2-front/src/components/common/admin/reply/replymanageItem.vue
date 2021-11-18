<template>
  <div>
    <div class="outer-container">
      <div class="inner-container">
        <div class="inner1">닉네임</div>
        <div class="inner1">제목</div>
        <div class="inner1">내용</div>
        <div class="inner1">작성일자</div>
      </div>
      <div class="inner-container2">
        <div class="inner"><p>{{ this.item.nickName }}</p></div>
        <div class="inner"><p>{{ this.item.reviewTitle }}</p></div>
        <div class="inner" id="commentContent" v-html="item.commentContent"><p></p></div>
        <div class="inner"><p>{{ this.item.commentDate }}</p></div>
        <span>
        &nbsp;
        <button type="button" class="btn btn-danger" @click="removeItem">삭제</button>
        <p></p>
      </span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import "../AdminPage.css"

export default {
  name: "replymanageItem",
  props: {
    item: Object
  },
  methods: {
    removeItem() {
      axios.delete(`http://kosa3.iptime.org:50201/admin/comment/selectAll`).then(res => {
        if (res.status == 200) {
          alert("Reply삭제.");

          location.reload();
        }
      }).catch(err => {
        console.log(err)
      })
    },

    created() {
      axios.get('http://kosa3.iptime.org:50201/admin/comment/selectAll', {
            headers: {
              'Auth': localStorage.getItem('auth'),
            },
          }
      )
          .then(result => {
            this.ReplyItemList = result.data
            console.log(result.data)
            console.log("replymanageItem")
          })
          .catch(function (err) {
            console.log("에러발생: " + err)
            console.log("에러 in replymanageItem")
          })
    }

  }
}
</script>

<style scoped>

button {
  position: static;
  float: right;
}
</style>