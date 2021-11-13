<template>
  <div>
    <usermanageItem v-for="(item, i) in tourList" :key="i" :item="item"/>
  </div>
</template>

<script>
import axios from "axios";
import usermanageItem from "./usermanageItem";

export default {
  name: "usermanage",
  data() {
    return {
      tourList: ''
    }
  },
  components: {
    usermanageItem
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