<template>
    <div class="mb-3 row">
            <div class="col-6">
                <div class="input-group-icon">
                    <input class="form-control" id="startdate" type="date" :value="startdate"/>
                </div>
            </div>
            <div class="col-6">
                <div class="input-group-icon">
                    <input class="form-control" id="enddate" type="date" :value="enddate"/>
                </div>
            </div>
    </div>
</template>

<script>
    export default {
      name:'Select',
      props:{
        startdate:String,
        enddate:String
      }
    }
</script>

<style scoped>

</style>