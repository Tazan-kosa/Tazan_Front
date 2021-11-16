<template>
  <div class="ReviewComment">
    <div class="userName">{{commentData.userName}}</div>
    <div class="userName">{{commentData.commentContent}}</div>
    <div class="userName">{{commentData.commentDate}}</div>
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
  }
}
</script>

<style scoped>
.ReviewComment{
  border: 1px black solid;
}
</style>