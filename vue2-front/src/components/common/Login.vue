<template>
  <div id="loginpage">
    <v-app id="app">
      <v-main>
        <v-container
            justify-center
            class="text-xs-center"
        >
          <v-layout row wrap class="text-xs-center">
            <v-flex>
              <v-card flat class="mx-auto" max-width="800">
                <v-row align="center" style="margin-top: 60px">
                  <v-col>
                    <v-form
                        class="mx-auto"
                        style="width: 400px; height: 300px">
                      <div class="mx-3">
                        <v-icon color="black" size="30px" @keyup.enter="loginSubmit">이메일</v-icon>
                        <div class="mx-1">
                          <v-text-field
                              placeholder="이메일"
                              v-model="email"
                              required
                          ></v-text-field>
                        </div>
                      </div>
                      <div class="mx-3" @keyup.enter="loginSubmit">
                        <v-icon color="black" size="30px">비밀번호</v-icon>

                        <div class="mx-1">
                          <v-text-field
                              placeholder="비밀번호"
                              type="password"
                              v-model="passWord"
                              required
                          ></v-text-field>
                        </div>
                      </div>
                      <v-card-actions>
                        <v-btn
                            color="#2c4f91"
                            dark
                            large
                            block
                            @click="loginSubmit"
                        >Login
                        </v-btn>
                      </v-card-actions>
                    </v-form>
                  </v-col>
                </v-row>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import jwt from 'jsonwebtoken'

export default {
  name: 'login',

  data() {
    return {
      email: null,
      passWord: null,
    };
  },

  beforeCreate() {
    console.log("beforeCreate check login")
    if (localStorage.getItem('auth') !== null) {
      alert('이미 로그인 되었습니다.')
      this.$router.push('/')
    }
  },

  methods: {
    loginSubmit() {
      let saveData = {};
      saveData.email = this.email;
      saveData.passWord = this.passWord;

      try {
        this.$axios
            .post("/login", JSON.stringify(saveData))
            .then((res) => {
              console.log(res.status)

              if (res.status === 200) { // 로그인 성공코드 : 200
                alert('로그인되었습니다.');

                console.log(res.data)

                // jwt
                localStorage.setItem('Authorization', res.data.Authorization);

                var decodedToken = jwt.decode(
                    res.data.Authorization.replace('Bearer ', ''), {
                      complete: true
                    },
                );

                // ID값 가져오기.
                localStorage.setItem('exp', decodedToken.payload.exp * 1000);
                localStorage.setItem('nickname', decodedToken.payload.nickname);
                localStorage.setItem('id', decodedToken.payload.id);
                localStorage.setItem('email', decodedToken.payload.email);
                localStorage.setItem('auth', decodedToken.payload.auth);
                this.$axios.defaults.headers.common['Authorization'] = localStorage.getItem('Authorization');

                this.auth = localStorage.getItem('auth');

                if (this.auth === "ROLE_ADMIN") {
                  this.$router.push('/adminpage/tour')
                  location.reload();
                } else if (this.auth === "ROLE_USER") {
                  // 로그인 성공시 홈페이지로 리다이렉트
                  this.$router.push('/')
                  // location.reload();
                  location.reload();
                }
              } else {
                alert('error');
              }
            }).catch((err) => { // 아이디, 비밀번호 에러
          console.log(err)
          alert('아이디 또는 비밀번호가 잘못 입력 되었습니다.\n' +
              '아이디와 비밀번호를 정확히 입력해 주세요.');
        })
      } catch (error) {
        // 로그인 실패시
          alert('로그인 에러');
        console.error(error);
      }
    },
  },
};
</script>

<style>
#loginpage {
  min-height: 500px;
  align-content: center;
}
</style>