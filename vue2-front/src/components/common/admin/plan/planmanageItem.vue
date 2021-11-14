<template>
  <pre>
    {{ this.item.planTitle }}
    {{ this.item.startDate }}
    {{ this.item.endDate }}
    <button type="button" class="btn btn-danger" @click="removeItem">삭제</button>
  </pre>
</template>

<script>
import axios from "axios";
export default {
  name: "planmanageItem",
  props: {
    item: Object
  },
  methods:{
    removeItem(){
      axios.delete(`http://kosa3.iptime.org:50201/planDelete/${this.item.planID}`).then(res => {
        if (res.status == 200) {
          alert("Plan 삭제.");
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