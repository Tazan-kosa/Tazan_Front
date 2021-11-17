<template>
  <div>
<!--    <reviewmanageItem v-for="(item, i) in ReviewItemList" :key="i" :item="item"/>-->
    <replymanageItem v-for="(item, i) in ReviewItemList" :key="i" :item="item"/>
  </div>

  <div>replymanage</div>
</template>

<script>
import axios from "axios";
// import reviewmanageItem from "./reviewmanageItem";
import replymanageItem from "./replymanageItem";

export default {
  name: "replymanage",
  data() {
    return {
      ReviewItemList: ''
    }
  },
  components: {
    replymanageItem,
  },
  created() {
    // axios.get('http://kosa3.iptime.org:50201/review/reviewmanageList')
    axios.get('http://kosa3.iptime.org:50201/review/replymanageList') // => data 추가
        .then(result => {
          this.ReviewItemList=result.data
        })
        .catch(function (err) {
          console.log("에러발생: " + err)
        })
  }
}
</script>

<style scoped>

</style>