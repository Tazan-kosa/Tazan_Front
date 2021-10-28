<template>
<div>
  <div class="mycard" :style="{backgroundImage : `url( ${item.img} )`}">
      <div class="mycard-foreground">
          <h5 class="mycard-region">{{item.region}}</h5>
          <h6 class="mycard-title">{{item.title}}</h6>
          <div class="mycard-hashtags">
<!--              <span class="mycard-hashtag" v-for="tag in item.tag" :key="tag">#{{tag}}&nbsp;&nbsp;</span>-->
            <span class="mycard-hashtag" >#{{item.tag1}}  #{{item.tag2}}&nbsp;&nbsp;</span>
          </div>
      </div>
  </div>
</div>
</template>

<script>
export default {
    name: 'TravelItem',
    props: {
        // item: JSON,
        item: Object,
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
.mycard-foreground{
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0));
    border-radius: 10px;
    position: absolute;
}
.mycard-region{
    margin-left: 5%;
    margin-top: 90%;
    position: absolute;
    color: white;
}
.mycard-title{
    margin-left: 5%;
    margin-top: 100%;
    position: absolute;
    color: white;
    text-align: left;
}
.mycard-hashtags {
    margin-left: 5%;
    margin-top: 110%;
    position: absolute;
    color: white;
    text-align: left;
}
</style>