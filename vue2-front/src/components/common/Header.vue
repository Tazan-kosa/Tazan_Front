<template>
  <div id="header-full">
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container d-flex justify-content-between align-items-center">
        <a class="navbar-brand text-success logo h1 align-self-center">
          <!-- logo -->
          <router-link id="logo" to="/">
            <img src="../../assets/yacht_tazan_logo.png" height="70" width="70"/>
            <img src="../../assets/tazan_title-rmb.png" height="100" width="200"/>
          </router-link>
        </a>
        <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse"
                data-bs-target="#templatemo_main_nav" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between"
             id="templatemo_main_nav">

          <!--Nav바-->
          <div class="flex-fill">
            <ul class="nav navbar-nav mx-lg-auto row">
              <li class="nav-item col-4 text-right">
                <router-link to="/detail"><span class="nav-item-detail">📗여행계획</span></router-link>
              </li>
              <li class="nav-item col-4 text-center">
                <router-link to="/tourlist"><span class="nav-item-detail">✈️여행지</span></router-link>
              </li>
              <li class="nav-item col-4 text-left">
                <router-link to="/reviewList"><span class="nav-item-detail">✍️여행후기</span></router-link>
              </li>
            </ul>
          </div>

          <!-- 로그인시 사라지는곳-->
          <!-- Login-->
          <div class="user-login" v-if="!Authorization">
            <div id="login">
              <router-link to="/login"><a><span class="user-set">로그인</span></a></router-link>
            </div>

            <!-- Register-->
            <div id="register">
              <router-link to="/Register"><a><span class="user-set">회원가입</span></a></router-link>
            </div>
          </div>

          <!-- profile 버튼-->
          <div id="profile" v-if="profile_check()">
            <v-app>
              <profile :username="username" :email="email" :initial="initial" :auth="auth"/>
            </v-app>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import profile from "./Profile"

export default {
  name: "Header",
  component: profile,

  data() {
    return {
      Authorization: localStorage.getItem("Authorization"),
      username: '',
      userID: '',
      initial: '',
      auth: '',
    };
  },
  methods: {
    profile_check() {
      if (!this.Authorization) {
        return false
      } else {
        this.username = localStorage.getItem('nickname')
        this.email = localStorage.getItem('email')
        this.initial = this.username.charAt(0).toUpperCase() // 맨 앞 글자 대문자로.
        this.auth = localStorage.getItem('auth')

        return true
      }
    }
  },
}
</script>

<style scoped>
.nav-item-detail {
  color: #333d4a;
  font-size: 24px;
}

.user-set {
  font-size: 20px;
}

/*nav underline 제거*/
a {
  text-decoration: none;
  font-family: 'Jua', Noto Sans KR, sans-serif;
}

span {
  font-size: x-large;
  font-weight: bolder;
  color: gray;
}

span:hover {
  width: 100%;
  border-bottom: 3px solid #0e69ff;
}

#login, #register {
  background-color: white;
  padding: 10px;
  border-radius: 5px;
}

.user-login {
  display: flex;
}
</style>