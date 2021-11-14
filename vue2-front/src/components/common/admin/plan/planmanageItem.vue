<template>
  <div>
    <p>{{this.item.planTitle}}</p>
    <p>{{this.item.startDate}}</p>
    <p>{{this.item.endDate}}</p>
  </div>
</template>

<script>
export default {
  name: "planmanageItem",
  props:{
    item:Object
  }
}
</script>

<style scoped>
div{
  border: 1px solid white;
}
</style>