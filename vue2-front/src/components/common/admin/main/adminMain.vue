<template>
  <p>admin main page</p>

</template>

<script>
import axios from "axios";
export default {
created() {
  axios.get('http://kosa3.iptime.org:50201/plan/myPlanList')
      .then(result => {
        this.planList = result.data
      })
      .catch(function (err) {
        console.log("에러발생: " + err)
      })
  }
}

</script>

<style scoped>

</style>