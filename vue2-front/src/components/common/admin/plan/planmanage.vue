<template>
  <div>
    <planmanageItem v-for="(item, i) in planList" :key="i" :item="item"/>
  </div>
</template>

<script>
import axios from "axios";
import planmanageItem from "./planmanageItem";

export default {
  name: "planmanage",
  data() {
    return {
      planList: ''
    }
  },
  components: {
    planmanageItem
  },
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