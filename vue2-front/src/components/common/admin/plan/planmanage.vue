<template>
  <div>
    <planmanageItem v-for="(item, i) in tourList" :key="i" :item="item"/>
    <p>tourpage</p>
  </div>
</template>

<script>
import axios from "axios";
import planmanageItem from "./planmanageItem";

export default {
  name: "planmanage",
  data() {
    return {
      tourList: ''
    }
  },
  components: {
    planmanageItem
  },
  created() {
    axios.get('http://kosa3.iptime.org:50201/tourList')
        .then(result => {
          this.tourList = result.data
        })
        .catch(function (err) {
          console.log("에러발생: " + err)
        })
  }
}
</script>

<style scoped>

</style>