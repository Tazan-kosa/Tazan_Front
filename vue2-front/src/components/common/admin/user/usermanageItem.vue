<template>
  <pre>
    <p>{{this.item.nickName}}</p><p>{{this.item.email}}</p><p>{{this.item.auth}}</p>
    <button type="button" class="btn btn-danger" @click="removeItem">삭제</button>
  </pre>
</template>

<script>
// import axios from "axios";

export default {
  name: "usermanageItem",
  props:{
    item:Object
  },
  methods:{
    removeItem(){
      // axios.delete(`http://kosa3.iptime.org:50201/reviewDelete/${this.reviewID}`).then(res => {
      //   if (res.status == 200) {
      //     alert("후기를 삭제했습니다.");
      //     this.$router.push('/reviewList').then((() => window.scrollTo(0, 0)))
      //   }
      // }).catch(err => {
      //   console.log(err)
      // })
    }
  }
}
</script>

<style scoped>
div {
  border: 1px solid white;
}
button {
  position: static;
  float: right;

}
pre{
  background-color: grey;
}
</style>