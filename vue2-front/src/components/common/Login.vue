<template>
  <v-app id="app">
    <v-main>
      <v-container
          style="position: relative; top: 10%; margin-left: 25%"
          class="text-xs-center"
      >
        <v-layout row wrap class="text-xs-center">
          <v-flex>
            <v-card flat class="mx-auto" max-width="800">
              <v-row style="margin-top: 60px">
                <v-col>
                  <v-form style="width: 400px; height: 300px">
                    <div class="mx-3">
                      <v-icon color="black" size="30px">아이디</v-icon>

                      <div class="mx-1">
                        <v-text-field
                            placeholder="아이디"
                            v-model="email"
                            required
                        ></v-text-field>
                      </div>
                    </div>
                    <div class="mx-3">
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
                      >Login</v-btn
                      >
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
</template>

<script>
import axios from 'axios'
import jwt from 'jsonwebtoken'

export default {
  name: 'login',

  data() {
      return {
        email: null,
        passWord: null,
      };
    },

    methods: {
      loginSubmit() {
        let saveData = {};
        saveData.email = this.email;
        saveData.passWord = this.passWord;

      try {
        axios
            .post("http://kosa3.iptime.org:50201/login", JSON.stringify(saveData),{
              headers: {
                'Content-Type': 'application/json; charset=utf-8',
              }})
            .then((res) => {
              if (res.status === 200) { // 로그인 성공코드 : 200
                alert('로그인성공!');

                console.log(res.data)

                // jwt
                localStorage.setItem('Authorization', res.data.Authorization);

                var decodedToken = jwt.decode(
                    res.data.Authorization.replace('Bearer ', ''), {
                      complete: true
                    },
                );

                localStorage.setItem('exp', decodedToken.payload.exp * 1000);
                localStorage.setItem('nickname', decodedToken.payload.nickname);
                localStorage.setItem('id', decodedToken.payload.id);

                axios.defaults.headers.common['Authorization'] = res.data.Authorization;

                // 로그인 성공시 홈페이지로 리다이렉트
                this.$router.push('/')
                location.reload();

              } else {
                alert('로그인실패!');
              }

            });
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>