<template>
  <div class="checkbox">
    <div v-for="(tag ,i) in tagname" :key="i">
      <input class="form-check-input" type="checkbox" value="" :id="tag">
      <label class="form-check-label" :for="tag">{{ tag }}</label>
    </div>
    <button type="button" class="btn btn-outline-success">선택</button>
  </div>
</template>

<script>
export default {
  name:'CheckBox',
  props:{
    tagname:Array
  }
}
</script>

<style scoped>
.checkbox div{
  width: 120px;
}
button{
  padding-top: 0;
  padding-bottom: ;: 0;
}
</style>