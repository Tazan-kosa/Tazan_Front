<template>
<div>{{TourItem}}</div>
</template>

<script>
import axios from "axios";
export default {
  name: "tourForm",
  data(){
    return{
      tourId:'',
      TourItem:[]
    }
  },
  created() {
    this.tourId=this.$route.params.tourId
    axios.get(`http://kosa3.iptime.org:50201/tour/getTourId/${this.tourId}`)
        .then(result => {
          this.TourItem = result.data
          console.log(this.TourItem)
        })
        .catch(function (err) {
          console.log("에러발생: " + err)
        })
    // axios.put(`http://kosa3.iptime.org:50201/tour/updateTour/${this.tourId}`).then(res => {
    //   if (res.status == 200) {
    //     console.log(res.data)
    //   }
    // }).catch(err => {
    //   console.log(err)
    // })
  }
}
</script>

<style scoped>

</style>