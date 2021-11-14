<template>
  <div>
    <p>{{this.item.nickName}}</p><p>{{this.item.email}}</p><p>{{this.item.auth}}</p>
    <button type="button" class="btn btn-danger">삭제</button>
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