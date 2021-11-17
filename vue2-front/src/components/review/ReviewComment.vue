<template>
  <div>
    <hr>
    <div class="comment display-fl">
      <div class="profile">
        <v-avatar color="brown" size="48">
          123
        </v-avatar>
      </div>
      <div>
        <div class="comment-user font-weight-light">
          <span class="user-name">{{commentData.nickName}} &nbsp; &nbsp;</span>
          <span class="comment-date">{{commentData.commentDate}}</span>
        </div>
        <div class="comment-content text-left" v-html="commentData.commentContent"></div>
      </div>
    </div>
    <div class="comment-btn text-right" v-if="userID == commentData.userID">
      <span class="p-1" @click="editComment">수정</span>
      <span class="p-1" @click="deleteComment">삭제</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReviewComment",
  data() {
    return {
      commentFlag : false,
      userID: '',
    }
  },
  props: {
    commentData:Object,
  },
  methods:{
    editComment(){
      this.$emit("editComment", [this.commentData.commentID, this.commentData.commentContent]);
    },
    deleteComment(){
      this.$emit("deleteComment", this.commentData.commentID);
    }
  },
  created() {
    console.log(this.commentData)
    this.userID = localStorage.getItem('id')
  }
}
</script>

<style scoped>
div {
  word-break: break-word !important;
}
.display-fl {
  display: flex;
}

.comment-user{
  color: #6B7379;
  font-size: 15px !important;
  text-align: left;
  padding: 10px;
}

.comment-content {
  width: 100%;
  height: fit-content;
  padding: 10px;
}

.comment-btn{
  cursor: pointer;
}
</style>