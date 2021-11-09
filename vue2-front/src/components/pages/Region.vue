<template>
  <router-link :to="{name:'regionList',params:{region:this.region.ci_name_ko}}">
    <div class="region" name="asia">
      <a style="color:inherit!important;
      text-decoration: none!important;"
         uk-toggle=""
         aria-expanded="false">
        <div class="card city-card-style hoverable z-depth-2" style="margin:0;">
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
.card {
  position: relative;
  transition: box-shadow 0.25s, -webkit-box-shadow 0.25s;
}
.imgbox {
  display: block;
  overflow: hidden;
  cursor: pointer;
}
@media (max-width: 600px) {
  .imgbox {
    border-radius: 50% !important;
    width: 135px !important;
    height: 135px !important;
  }
}
.img {
  max-width: 100%;
  height: auto;
  box-sizing: border-box;
}
@media (max-width: 600px) {
  .imgbox img {
    transition: none !important;
  }
}
.card .card-image img {
  display: block;
  border-radius: 2px 2px 0 0;
  position: relative;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
}
.city-card-contents-div {
  padding: 24px;
  border-radius: 0 0 2px 2px;
}
.span {
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
}

.city-card-contents-title {
  font-size: 24px;
  font-weight: 300;
}
</style>