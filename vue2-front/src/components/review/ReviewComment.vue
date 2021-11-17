<template>
  <div class="ReviewComment">
    <div class="userName">{{commentData.userName}}</div>
    <div class="userName">{{commentData.commentContent}}</div>
    <div class="userName">{{commentData.commentDate}}</div>
    <div @click="editComment">수정</div>
    <div @click="deleteComment">삭제</div>
  </div>
</template>

<script>
export default {
  name: "ReviewComment",
  data() {
    return {
      commentFlag : false,
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
  }
}
</script>

<style scoped>
.ReviewComment{
  border: 1px black solid;
}
</style>