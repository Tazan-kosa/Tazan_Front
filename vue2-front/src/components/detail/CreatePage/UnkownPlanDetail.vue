<template>
  <div>
    <div class="main">
      <div class="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light"
           data-src="https://images.unsplash.com/photo-1490822180406-880c226c150b?fit=crop&w=650&h=433&q=80"
           data-srcset="https://images.unsplash.com/photo-1490822180406-880c226c150b?fit=crop&w=650&h=433&q=80 650w,
                  https://images.unsplash.com/photo-1490822180406-880c226c150b?fit=crop&w=1300&h=866&q=80 1300w"
           data-sizes="(min-width: 650px) 650px, 100vw" uk-img>
        <div class="container px-4 px-lg-5">
          <div class="text-center text-white">
            <h1 class="display-4 fw-bolder">
              <span id="userName">{{ this.nickname }}</span>님의 여행 일정표
            </h1>
            <br>

            <div class="wrap">
              <div class="sub_title">
                <b-form-input
                    v-model="text"
                    size="sm"
                    class="w-25 p-3 mb-1 text-black"
                    :placeholder="plan.planTitle"
                    :disabled="true"
                ></b-form-input>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h1 class="uk-heading-line"><span></span></h1>

      <div class="save_plan">
        <v-card class="sub_main">
          <v-card class="left_container">
            <div class="left">
              <div class=""
              >
                <h2 class="region_f">
                  {{ plan.region }}
                </h2>

              </div>
              <date-picker
                  class="datepicpick"
                  v-model="mydate"
                  type="date"
                  :lang="lang"
                  range
                  confirm
                  format="YYYY-MM-DD"
                  :placeholder="mydate"
              >
                여행일자
              </date-picker>
              <br>
              <div
              >
                {{ startDate + " - " + endDate }}
              </div>
              <div>
              </div>
            </div>
            <br>
            <br>

          <v-card
              class="left_container_img"
          >
            <img class="logo_img"
                max-height="300"
                max-width="300"
                :src="require(`/src/assets/yacht_tazan_logo.png`)"
            >
          </v-card>
          </v-card>


          <v-card class="thr_main">
            <v-col class="thr_main_sub" v-for="(plan,index) in plan.planList" :key="index">
              <div class="thr_main_day">
                <h6 class="thr_main_day_list">
                  {{ index + 1 }} 일차
                </h6>
<!--                <v-avatar
                    class="thr_main_day_list"
                >
                  {{ index + 1 }} 일차
                </v-avatar>-->
<!--                <v-text-field
                    class="thr_main_day_list"
                    readonly
                >{{ index + 1 }} 일차</v-text-field>-->
              </div>

              <DayListV2 :daylist="plan" class="thr_main_list">
              </DayListV2>
            </v-col>
          </v-card>
        </v-card>
      </div>
      <div class="save_plan_button">
        <b-button variant="primary" @click="reviewWrite">Review</b-button>
      </div>
    </div>
  </div>
</template>

<script>
import DayListV2 from "./DayListV2";
import 'vue2-datepicker/index.css';
import 'vue2-datepicker/locale/ko';
import DatePicker from 'vue2-datepicker';

export default {
  name: "UnkownPlanDetail",
  data() {
    return {
      lang: {
        formatLocale: {
          firstDayOfWeek: 1,
        },
        monthBeforeYear: false,
      },
      PlanDate: [],
      planList: [],
      userId: '',
      planId: '',
      startDate: '',
      endDate: '',
      text: '',
      mydate: '',
      nickname: '',
      plan: '',
      range: '',
    }
  },
  created() {
    this.nickname = localStorage.getItem('nickname')
    this.planId = this.$route.params.planId;
    this.userId = localStorage.getItem('id');

    this.$axios.get(`/api/user/planDetail/${this.planId}`)
        .then(res => {
          if (res.status == 200) {
            this.plan = res.data
            var sd = new Date(this.plan.startDate)
            this.startDate = sd.getFullYear() + "-" + (sd.getMonth() + 1) + "-" + sd.getDate();
            var ed = new Date(this.plan.endDate)
            this.endDate = ed.getFullYear() + "-" + (ed.getMonth() + 1) + "-" + ed.getDate();

            this.mydate = this.startDate + " - " + this.endDate
          }
        }).catch(err => {
      console.log("에러발생: " + err)
      //에러 처리 할 곳
      alert("에러발생");
    })
  },
  methods: {
    reviewWrite() {
      this.$axios.get(`/api/user/review/reviewWrite/${this.planId}`).then(res => {
        if (res.status == 200) {
          this.$router.push({
            name: 'Review',
            params: {
              reviewData: res.data,
              planData: this.plan
            }
          }).then((() => window.scrollTo(0, 0)))
        }
      }).catch(err => {
        console.log("에러 발생: " + err)
      });
    }
  },
  components: {
    DayListV2,
    DatePicker
  },
}
</script>

<style scoped>
.region_f {
  font-size: 5em;
  font-weight: 1000 !important;
}
.sub_main {
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  /*  */
  border: 1px solid black;
  padding: 0.25em;
  margin: 0.25em;
  border-radius: 0.25em;
  justify-content: space-around;
  flex: 1;
}

.thr_main_sub {
  font-size: 18px !important;
  font-weight: 900 !important;
  color: #5dc9dd;
  display: flex;
  position: relative;
}
.thr_main_day_list {
  color: #5dc9dd;
  font-size: 18px !important;
  font-weight: 900 !important;
  margin-right: auto;
  text-align: center;
  width:100%
}


.thr_main .sub_main {
  border: 1px solid black;
  padding: 0.25em;
  margin: 0.25em;
  border-radius: 0.25em;
}

.sub_title {
  display: flex;
  justify-content: center;

}

.main {
  text-align: center;
}

.datepicpick {
  width: 95%;
  height: 100%;
}

.left_container {
  display: flex;
  width: 25%;
  height: 100%;
  flex-direction: column;
  /**/
  /*border: 1px solid black;*/
  padding: 0.25em;
  margin: 0.25em;
  border-radius: 0.25em;
}

.left_container_img {
  display: flex;
  justify-content: center;
  position: relative;
}

.left {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  /**/
  /*border: 1px solid black;*/
  padding: 0.25em;
  margin: 0.25em;
  border-radius: 0.25em;
}

.thr_main {
  display: flex;
  flex-direction: column;
  width: 75%;
  height: 100%;
  /**/
  /*border: 1px solid black;*/
  padding: 0.25em;
  margin: 0.25em;
  border-radius: 0.25em;
}

.right {
  width: 20%;
  height: 100%;
  /**/
  /*border: 1px solid black;*/
  padding: 0.25em;
  margin: 0.25em;
  border-radius: 0.25em;
}

.right_list {
  width: 100%;
  height: 100%;
}


/*리스트*/
.thr_main_sub {
  display: flex;
  width: 100%;
}

.thr_main_day {
  display: flex;
  width: 100px;
  text-align: center;
  flex-wrap: nowrap;
  /*justify-content: space-around;*/
}

.thr_main_list {
  /*height: 5px;*/
  overflow-x: auto;
  /*overflow-x: scroll;*/
  display: flex;
  width: 100%;
  text-align: left;
  height: inherit;
  /**/
  /*border: 1px solid black;*/
  padding: 0.25em;
  margin: 0.25em;
  border-radius: 0.25em;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
}

.DayList {
  overflow: hidden;
}

.thr_main_list::-webkit-scrollbar {
  height: 5px;
}

.thr_main_list::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.thr_main_list::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}

.thr_main_list::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.save_plan {
  display: flex;
  /*width: 1000px;*/
  justify-content: space-between;
  /**/
  /*border: 1px solid black;*/
  padding: 0.25em;
  margin: 0.25em;
  border-radius: 0.25em;
}


</style>