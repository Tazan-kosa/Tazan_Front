<template>
  <v-app id="app">
    <v-main>
      <v-container
          style="position: relative; top: 20%; margin-left: 20%"
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

export default {
  name: 'login',
  data() {
    return {
      userId: null,
      userPassword: null,
    };
  },

  methods: {
    loginSubmit() {
      let saveData = {};
      saveData.email = this.email;
      saveData.passWord = this.passWord;

      try {
        axios
            // .post(HOST + "/signin", JSON.stringify(saveData), {
            .post("http://kosa3.iptime.org:50201/login", JSON.stringify(saveData),{
              headers: {
                'Content-Type': 'application/json; charset=utf-8',
              }})
            .then((res) => {
              if (res.status === 200) { // 로그인 성공코드 : 200
                console.log(res.data)
              }
            });

      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>