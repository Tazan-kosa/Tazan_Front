<template>
  <div>
    <reviewmanageItem v-for="(item, i) in ReviewItemList" :key="i" :item="item"/>
  </div>
</template>

<script>
import reviewmanageItem from "./reviewmanageItem";

export default {
  name: "reviewmanage",
  data() {
    return {
      ReviewItemList: ''
    }
  },
  components: {
    reviewmanageItem
  },
  created() {
    this.$axios.get('/api/admin/review/reviewmanageList')
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