<template>

    <div class="col mb-2" v-if="checkedtag.filter(n => item.tag.includes(n)).length > 0" @click="viewURL(item.url)">
      <TravelItem :item="item" />
    </div>

</template>

<script>
import TravelItem from '../review/TravelItem'
export default {
  name: 'Box',
  components:{
    TravelItem,
  },
  props: {
    item: Object,
    checkedtag:Array
  },
  methods:{
    viewURL(link){
      window.open(link)
    }
  }
}
</script>

<style scoped>
div.col{
  width: 270px;
  margin: 0;
  padding: 0;
}
div.col{
  transform: scale(1);
  -webkit-transform: scale(1);
  -moz-transform: scale(1);
  -ms-transform: scale(1);
  -o-transform: scale(1);
  transition: all 0.3s ease-in-out;   /* 부드러운 모션을 위해 추가*/
}
div.col:hover {
  transform: scale(1.1);
  -webkit-transform: scale(1.1);
  -moz-transform: scale(1.1);
  -ms-transform: scale(1.1);
  -o-transform: scale(1.1);
}
</style>