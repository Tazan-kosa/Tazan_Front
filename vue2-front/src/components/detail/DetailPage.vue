<template>
  <header class="py-3" id="headerstyle">
    <div class="container px-4 px-lg-5">
      <div class="text-center text-white">
        <h1 class="display-4 fw-bolder listTitle">Tazan Plan</h1>

        <h6 class="listsubTitle"> 10개 지역의 다양한 국내 여행을 만나보세요.
        </h6>
        <p class="lead fw-normal mb-0 searchnotion">국내 10개 지역 중 한 가지 지역을 <br> 선택해서 손쉽게 여행을 계획해 보세요.🦄</p>
        <div class="input-group mb-3 mt-3">
        </div>
        <div class="wrap">
          <div class="button">
            <b-button variant="outline-primary" type="submit" @click="mypagelist"> 🧳 내 일정 보기</b-button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "DetailPage",
  data() {
    return {}
  },
  methods: {
    mypagelist() {
      this.$router.push('/mypagelist')
    }
  }
}

</script>

<style scoped>
#headerstyle {
  background-image: url('https://cdn.pixabay.com/photo/2017/01/20/00/30/maldives-1993704_960_720.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

}

.listsubTitle{
  color:white;
  font-size: 1em;
  padding-bottom: 15px;
}
.listTitle{
  color:#00ffe0;
  font-size: 4em;
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: black;
}
.searchnotion{
  color:white;
}

#searchbar {
  text-align: center;
}

.button2 {
  border-radius: 4px;
}

header {
  background: #b49605;
}

button {
  margin-left: 10px;
  margin-right: 10px;
}
</style>