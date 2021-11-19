<template>
  <div>
    <div class="outer-container">
      <div class="inner-container">
        <div class="inner1">신고횟수</div>
        <div class="inner1">닉네임</div>
        <div class="inner1">제목</div>
        <div class="inner1">내용</div>
        <div class="inner1">작성일자</div>
      </div>
      <div class="inner-container2">
        <div class="inner"><p>{{ this.item.reportCount }}</p></div>
        <div class="inner"><p>{{ this.item.nickName }}</p></div>
        <div class="inner"><p>{{ this.item.reviewTitle }}</p></div>
        <div class="inner" id="commentContent" v-html="item.commentContent"><p></p></div>
        <div class="inner"><p>{{ this.item.commentDate }}</p></div>
      </div>
      <div class="inner-container3">
        <button type="button" class="btn btn-danger" @click="removeItem">삭제</button>
      </div>
    </div>
  </div>
</template>

<script>
import "../AdminPage.css"

export default {
  name: "replymanageItem",
  props: {
    item: Object
  },
  methods: {
    removeItem() {
      this.$axios.delete(`/api/user/comment/delete/${this.item.commentID}`).then(res => {
        if (res.status == 200) {
          alert("Reply삭제.");

          location.reload();
        }
      }).catch(err => {
        console.log(err)
      })
    },
  }
}
</script>

<style scoped>
</style>