<template>
  <header class="py-5" id="headerstyle">
    <div class="container px-4 px-lg-5">
      <div class="text-center text-white">
        <h1 class="display-4 fw-bolder">국내 여행</h1>
        <p class="lead fw-normal text-white-100 mb-0">
          국내 10개 지역 중 한 가지 지역을 <br> 선택해서 손쉽게 여행을 계획해 보세요.🦄
        </p>
        <br>

        <div class="wrap">
          <div class="button">
            <b-button variant="outline-primary" type="submit" @click="mypagelist"> 🧳 내 일정 보기</b-button>
<!--              <b-button variant="success" href="">
&lt;!&ndash;                <b-link to="mypagelist">
                  <span>내 일정 보기</span>
                </b-link>&ndash;&gt;
              </b-button>-->
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "DetailPage",
  data () {
    return {
    }
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
  background-image: url('https://cdn.pixabay.com/photo/2019/08/12/06/13/republic-of-korea-4400510_960_720.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

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