<template>
  <div class="checkbox">
    <div v-for="(tag ,i) in tagname" :key="i" >
      <input class="form-check-input" type="checkbox" value="" :id="tag" checked @click="checking(tag)">
      <label class="form-check-label" :for="tag">{{ tag }}</label>
    </div>
    <button type="button" class="btn btn-outline-success" @click="sendcheckedtag()">선택</button>
  </div>
</template>

<script>

export default {
  name:'CheckBox',
  props:{
    tagname:Array
  },
  data(){
    return{
      checkedtag:['관광지','문화시설','축제공연행사','여행코스','레포츠','숙박','쇼핑', '음식점']
    }
  },

  methods:{
    checking(tag){

      if(this.checkedtag.includes(tag)){

        this.checkedtag.splice(this.checkedtag.indexOf(tag),1)
      }
      else{

        this.checkedtag.push(tag)
      }
    },
    sendcheckedtag(){
      this.$emit("checkedtag",this.checkedtag)

    }
  }
}
</script>

<style scoped>
.checkbox div{
  width: 120px;
}
button{
  padding-top: 0;
  padding-bottom: 0;
}
</style>