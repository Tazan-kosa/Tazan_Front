<template>
  <header class="py-5" id="headerstyle">
    <div class="container px-4 px-lg-5">
      <div class="text-center text-white">
        <h1 class="display-4 fw-bolder">여행 어디</h1>
        <p class="lead fw-normal text-white-100 mb-0">국내만</p>
        <div class="input-group mb-3">
          <input id="searchbar" type="text" class="form-control form-control-lg" placeholder="예시) 경기/강남/제주/해운대"
                 @keyup.enter="searchTourList">
          <button class="input-group-text btn-success" @click="searchTourList">
            <i class="bi bi-search me-2"></i> Search
          </button>
        </div>

        <div class="wrap">
          <div class="button">
              <b-button
                variant="success"
                href=""
              >
                <b-link to="create">일정만들기</b-link>
              </b-button>
              <b-button
                variant="success"
                href=""
              >
                <b-link to="mypagelist">내 일정 보기</b-link>
              </b-button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "DetailPage",
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