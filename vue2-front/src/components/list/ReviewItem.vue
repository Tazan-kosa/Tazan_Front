<template>
  <div class="mycard" :style="{backgroundImage : `url( ${item.img} )`}">
    <div class="mycard-foreground">
      <div class="mycard-text">
      <div>
        <h5 class="mycard-region tc">{{ item.region }}</h5>
      </div>
      <div>
        <h6 class="mycard-title tc">{{ item.reviewTitle }}</h6>
      </div>
      <div class="mycard-hashtags tc">
        <!--              <span class="mycard-hashtag" v-for="tag in item.tag" :key="tag">#{{tag}}&nbsp;&nbsp;</span>-->
        <span class="mycard-hashtag">{{ item.startDate.slice(0,10) }} ~ {{ item.endDate.slice(0,10) }}&nbsp;&nbsp;</span>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReviewList',
  data(){
    return{
      startDate:'',
      endDate:'',
    }
  },
  props: {
    // item: JSON,
    item: Object,
  },
  created(){
    // console.log(this.item.startDate)

  }
}
</script>

<style scoped>
.mycard {
  width: 250px;
  height: 350px;
  border-radius: 10px;
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
  height: 100%;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0));
  border-radius: 10px;
  position: absolute;
}
.mycard-text{
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