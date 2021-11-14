<template>
  <pre>
    <p>{{this.item.reviewTitle}}</p>
    <button type="button" class="btn btn-danger" @click="removeItem">삭제</button>
  </pre>
</template>

<script>
import axios from "axios";

export default {
  name: "reviewmanageItem",
  props:{
    item:Object
  },
  methods:{
    removeItem(){
      axios.delete(`http://kosa3.iptime.org:50201/reviewDelete/${this.item.reviewID}`).then(res => {
        if (res.status == 200) {
          alert("Review삭제.");
          location.reload();
        }
      }).catch(err => {
        console.log(err)
      })
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