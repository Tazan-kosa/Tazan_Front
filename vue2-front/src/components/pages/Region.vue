<template>
  <router-link :to="{name:'regionList',params:{region:this.region.ci_name_ko}}">
    <div class="col s12 m6 l3" name="asia">
      <input type="hidden" value="koreajeju대한민국 제주도">
      <a style="color:inherit!important;
      text-decoration: none!important;"
         uk-toggle=""
         aria-expanded="false">
        <div class="card city-card-style hoverable z-depth-2" style="margin:0;">
          <div class="ribbon-wrapper-1"><span class="uk-label new-label">New</span></div>
          <div class="card-image imgbox">
            <img :src="region.ci_image" alt="city" loading="lazy">
          </div>
          <div class="city-card-contents-div">
          <span class="city-card-contents-title">
            <div class="citynamefont">
              <b>{{this.region.ci_name_en}}</b><br>
              <h6 class="city-card-contents-subtitle"> 대한민국 {{this.region.ci_name_ko}}</h6>
            </div>
          </span>
          </div>
        </div>
      </a>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "Region",
  props:{
    region:Object
  }
}
</script>

<style scoped>

</style>