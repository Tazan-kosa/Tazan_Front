<template>
    <div class="mb-3 row">
            <div class="col-5">
                <div class="input-group-icon">
                    <input class="form-control" id="startdate" type="date" :value="startdate"/>
                </div>
            </div>
            <div class="col-5">
                <div class="input-group-icon">
                    <input class="form-control" id="enddate" type="date" :value="enddate"/>
                </div>
            </div>
            <div class="col-2">
              <button class="btn btn-secondary" @click="selectDate">날짜선택</button>
            </div>
    </div>
</template>

<script>
    export default {
      name:'Select',
      methods:{
        selectDate(){
          var start = document.querySelector("#startdate").value
          var end = document.querySelector("#enddate").value
          this.$emit("selectedDate",{start:start,end:end})
        }
      },
      props:{
        startdate:String,
        enddate:String
      }
    }
</script>

<style scoped>

</style>