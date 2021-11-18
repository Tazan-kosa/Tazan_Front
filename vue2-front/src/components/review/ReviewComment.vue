<template>
  <div>
    <hr>
    <div class="comment display-fl">
      <div class="profile">
        <!-- 여기에 이니셜 가져오기-->
        <span id="initialbox">
        {{ initial }}
        </span>
      </div>
      <div class="container">
        <div class="comment-user font-weight-light">
          <span class="user-name">{{ commentData.nickName }} &nbsp; &nbsp;</span>
          <span class="comment-date">{{ commentData.commentDate }}</span>
        </div>
        <div v-if="!editFlag" class="comment-content text-left" v-html="commentData.commentContent"></div>
        <div v-if="editFlag" class="comment-edit text-left" v-html="commentData.commentContent" contenteditable="true">fsdfasdfasd</div>
      </div>
    </div>
    <div class="comment-btn text-right" v-if="userID == commentData.userID">
      <span class="comment-bedit p-1" @click="editComment">수정</span>
      <span class="comment-bdelete p-1" @click="deleteComment">삭제</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReviewComment",
  data() {
    return {
      editFlag: false,
      userID: '',
      initial: '',
    }
  },
  props: {
    commentData: Object,
  },
  methods: {
    editComment() {
      if(this.editFlag){
        this.editFlag = false
        console.log(document.getElementsByClassName("comment-edit")[0].innerHTML)
        this.commentData.commentContent = document.getElementsByClassName("comment-edit")[0].innerHTML
        this.$emit("editComment", [this.commentData.commentID, this.commentData.commentContent]);
      }
      else {
        this.editFlag = true
      }
    },
    deleteComment() {
      this.$emit("deleteComment", this.commentData.commentID);
    }
  },
  created() {
    this.userID = localStorage.getItem('id')
    this.initial = this.commentData.nickName.charAt(0).toUpperCase() // 맨 앞 글자 대문자로.
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

.comment-user {
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

.comment-edit {
  width: 100%;
  height: 150px;
  max-height: 150px;
  padding: 10px;
  background-color: #faf5f8;
  overflow-x: unset;
  overflow-y: scroll;
}

.container{
  width: 100%;
}

.comment-btn {
  cursor: pointer;
}

.profile {
  background-color: #A7E66E;
  margin-top: 10px;
  min-width: 40px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  /*border: 1px solid red;*/
}

#initialbox {
  position: relative;
  top: 5px;
}
</style>