<template>
  <div class="checkbox">
    <div v-for="(tag ,i) in tagname" :key="i" >
      <input class="form-check-input" type="checkbox" value="" :id="tag" checked @click="checking(tag)">
      <label class="form-check-label" :for="tag">{{ tag }}</label>
    </div>
  </div>
</template>

<script>

export default {
  name:'CheckBox',
  props:{
    tagname:Array,
    checkedtag:Array
  },
  data(){
    return{
      returntag:[]
    }
  },
  methods:{
    checking(tag){
      this.returntag=this.checkedtag
      if(this.checkedtag.includes(tag)){

        this.returntag.splice(this.returntag.indexOf(tag),1)
      }
      else{
        this.returntag.push(tag)
      }
    },
  }
}
</script>

<style scoped>
.checkbox div{
  width: 200px;
}
button{
  padding-top: 0;
  padding-bottom: 0;
}
</style>