<template>
  <router-link :to="{name:'regionList',params:{region:this.region.ci_name_ko}}">
    <div class="mycard" :style="{backgroundImage : `url( ${region.ci_image} )`}">
      <div class="mycard-foreground">
        <div class="mycard-text">
          <div>
            <h5 class="mycard-region tc">대한민국 {{ this.region.ci_name_ko }}</h5>
          </div>
          <div>
            <h6 class="mycard-title tc">{{ this.region.ci_name_en }}</h6>
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "RegionItem",
  props: {
    region: Object
  }
}
</script>

<style scoped>
.mycard {
  width: 250px;
  height: 350px;
  border-radius: 10px;
  display: flex;
  position: relative;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("https://www.royalpalace.go.kr/images/sub/gbg.jpg");
  background-size: cover;
  display: block;
  margin: 8px;
}

.mycard-foreground {
  width: 100%;
  display: flex;
  height: 100%;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0));
  border-radius: 10px;
  position: absolute;
}

.mycard-text {
  width: 220px;
  height: fit-content;
  position: absolute;
  left: 15px;
  bottom: 30px;
  color: white;
}

.tc {
  color: white;
}
</style>