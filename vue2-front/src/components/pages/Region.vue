<template>

  <!--    <div class="uk-child-width-1-2@m" uk-grid>
        <div>
          <div class="uk-card uk-card-default">
            <div class="uk-card-media-top">
              <img :src="region.ci_image" alt="">
            </div>
            <div class="uk-card-body">
              <h3 class="uk-card-title"> 대한민국 {{this.region.ci_name_ko}}</h3>
              <p>{{this.region.ci_name_en}}</p>
            </div>
          </div>
        </div>
      </div>-->
  <div class="itembox mb-2">
    <RegionItem :region="region"/>
  </div>

</template>

<script>
import RegionItem from "../detail/DetailPlan/RegionItem";

export default {
  name: "Region",
  components: {
    RegionItem
  },
  props: {
    region: Object
  }
}
</script>
<style scoped>
div.itembox{
  width: 265px;
  margin: 5px;
  padding: 0;
}
div.itembox{
  transform: scale(1);
  -webkit-transform: scale(1);
  -moz-transform: scale(1);
  -ms-transform: scale(1);
  -o-transform: scale(1);
  transition: all 0.3s ease-in-out;   /* 부드러운 모션을 위해 추가*/
}
div.itembox:hover {
  cursor: pointer;
  background: #845EC2;
  border-radius: 10px;
  transform: scale(1.1);
  -webkit-transform: scale(1.1);
  -moz-transform: scale(1.1);
  -ms-transform: scale(1.1);
  -o-transform: scale(1.1);
}
</style>