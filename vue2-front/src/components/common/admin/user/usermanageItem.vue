<template>
  <div>
    <p>{{this.item.nickName}}</p><p>{{this.item.email}}</p><p>{{this.item.auth}}</p>
  </div>
</template>

<script>
export default {
  name: "usermanageItem",
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