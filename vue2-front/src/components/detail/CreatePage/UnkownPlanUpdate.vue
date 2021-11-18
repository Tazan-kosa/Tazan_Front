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
              <span id="userName">{{ this.nickname }}</span>님의 여행 계획표
            </h1>
            <br>

            <div class="wrap">
              <div class="sub_title">
                <b-form-input
                    size="sm"
                    class="w-25 p-3 mb-1 text-black plantitle"
                    placeholder="제목은 비워둘 수 없습니다."
                    :value="plan.planTitle"
                ></b-form-input>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 class="uk-heading-line"><span></span></h1>
      <div class="save_plan">
        <div class="sub_main">
          <v-card class="left_container">
            <div class="left">
              <div>
                <h2>{{ plan.region }}</h2>
              </div>
              <div>
                여행 일자
              </div>
              <date-picker
                  class="datepicpick"
                  type="date"
                  v-model="mydate_up"
                  :lang="lang"
                  range
                  confirm
                  format="YYYY-MM-DD"
                  :placeholder="mydate"
                  :shortcuts="shortcuts"
                  @change="updateddate"
              >
                여행일자
                {{ mydate }}
                <!--                :placeholder= startDate + " - " + endDate-->
              </date-picker>
            </div>
            <br>
            <v-card>
              <v-card>
                <div>
                  여행 시작 날짜 : {{ defaultstartDate }}
                </div>
                <div>
                  여행 시작 날짜 : {{ defaultendDate }}
                </div>
              </v-card>
            </v-card>
            <br>
            <v-card>
              <v-card>
                <div>
                  여행 수정 날짜 : {{ mydate_up[0] }}
                </div>
                <div>
                  여행 수정 날짜 : {{ mydate_up[1] }}
                </div>
              </v-card>
            </v-card>
            <br><br>
            <v-card
                class="left_container_img"
            >
              <img
                  max-height="300"
                  max-width="300"
                  :src="require(`/src/assets/yacht_tazan_logo.png`)"
              >
            </v-card>
          </v-card>
          <v-card class="thr_main">
            <v-col class="thr_main_sub" v-for="(plan,index) in plan.planList" :key="index">
              <div class="thr_main_day">
                <h6>
                  {{ index + 1 }} 일차
                </h6>
<!--                <div class="thr_main_day_list">-->
<!--                  <h6>-->
<!--                    {{ startDate }}-->
<!--                  </h6>-->
<!--                </div>-->
              </div>

              <DayList
                  id="scrollDiv"
                  :daylist="plan"
                  class="thr_main_list"
                  :index1="index"
                  @tourListDelete="DeleteList"
              >
              </DayList>
              <!--              <DayList :daylist="plan" class="thr_main_sub">-->
              <!--              </DayList>-->
            </v-col>

            <div class="uk-margin">
              <b-button pill variant="outline-primary" type="submit" @click="dayList_add">일정 추가</b-button>
              &nbsp;
              <b-button pill variant="outline-danger" type="submit" @click="dayList_delete">일정 삭제</b-button>
            </div>
          </v-card>
          <v-card class="right">
            <div>추천 장소</div>
            <div>
              <RecomPlace :recomList="recomList" @recived="planList_add" class="right_list"/>
            </div>
          </v-card>
        </div>
      </div>
      <div class="save_plan_button">
        <b-button variant="primary" @click="UpdateWrite">Update</b-button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import DayList from "./DayList";
import 'vue2-datepicker/index.css';
import 'vue2-datepicker/locale/ko';
import RecomPlace from "./RecomPlace";
import DatePicker from "vue2-datepicker";

export default {
  name: "UnkownPlanUpdate",
  data() {
    return {
      lang: {
        formatLocale: {
          firstDayOfWeek: 1,
        },
        monthBeforeYear: false,
      },
      mydate: '',
      shortcuts: [
        {
          text: 'mydate',
          onClick: () => {
            this.range = [new Date(), new Date()]
          }
        }
      ],
      recomList: [],
      planList_tour: [],
      planDate: [],
      planList: [],
      userId: '',
      planId: '',
      text: '',
      nickname: '',
      plan: '',
      mydate_up: '',
      cnt: 0,
      startDate:'',
      endDate:'',
      defaultstartDate:'',
      defaultendDate:''
    }
  },
  created() {
    this.nickname = localStorage.getItem('nickname')
    this.planId = this.$route.params.planId;
    this.userId = localStorage.getItem('id');

    axios.get(`http://kosa3.iptime.org:50201/planDetail/${this.planId}`)
        .then(res => {
          if (res.status == 200) {
            this.plan = res.data
            var sd = new Date(this.plan.startDate)
            this.startDate = sd.getFullYear() + "-" + (sd.getMonth() + 1) + "-" + sd.getDate();
            this.defaultstartDate= sd.getFullYear() + "-" + (sd.getMonth() + 1) + "-" + sd.getDate();
            var ed = new Date(this.plan.endDate)
            this.endDate = ed.getFullYear() + "-" + (ed.getMonth() + 1) + "-" + ed.getDate();
            this.defaultendDate=ed.getFullYear() + "-" + (ed.getMonth() + 1) + "-" + ed.getDate();
            this.mydate = this.startDate + " - " + this.endDate
            this.cnt=this.plan.planList.length-1
            axios.get(`http://kosa3.iptime.org:50201/search/${this.plan.region}`)
                .then(response => {

                  this.recomList = response.data;

                })
                .catch(err => {
                  console.log(err)
                })

          }
        }).catch(err => {
      console.log("에러발생: " + err)
      alert("에러발생");
    })


  },

  methods: {
    planList_add(result) {
      if (this.mydate == '') {
        alert('날짜를 먼저 선택해주세요')
      } else {
        /*        this.totalPlan[this.cnt].push(result) // object
                this.totalPlan_tour[this.cnt].push(result.tourId)*/
        this.plan.planList[this.cnt].push(result) // object
        this.plan.planList_tour[this.cnt].push(result.tourId)
      }
    },
    updateddate() {
      var sd = new Date(this.mydate_up[0])
      this.mydate_up[0] = sd.getFullYear() + "-" + (sd.getMonth() + 1) + "-" + sd.getDate();
      this.startDate= sd.getFullYear() + "-" + (sd.getMonth() + 1) + "-" + sd.getDate();
      var ed = new Date(this.mydate_up[1])
      this.mydate_up[1] = ed.getFullYear() + "-" + (ed.getMonth() + 1) + "-" + ed.getDate();
      this.endDate= ed.getFullYear() + "-" + (ed.getMonth() + 1) + "-" + ed.getDate();
      this.mydate = this.startDate + " - " + this.endDate
    },
    dayList_add() {
      if (this.mydate == '') {
        alert('날짜를 먼저 선택해주세요')
      } else {
        var test = new Date(this.startDate)

        test.setDate((test.getDate() + (this.cnt) + 1))
        if (test > new Date(this.endDate)) {
          alert('일정 길이를 초과합니다!')

        } else {
          this.cnt += 1
          this.plan.planList.push([])
          this.plan.planList_tour.push([])
        }
      }
    },
    dayList_delete() {

      if (this.plan.planList.length <= 1) {
        alert('일정은 1일차부터 시작입니다.')
      } else {
        var test = new Date(this.startDate)
        test.setDate((test.getDate() + (this.cnt) + 1))
        if (test > this.endDate) {
          alert('일정은 1일차부터 시작입니다.!')
        } else {
          this.cnt -= 1;
          this.plan.planList.pop()
        }
      }
    },
    DeleteList(listObject) {
      /*this.totalPlan[listObject.index1].splice(listObject.index2, 1)
      this.totalPlan_tour[listObject.index1].splice(listObject.index2, 1)*/
      this.plan.planList[listObject.index1].splice(listObject.index2, 1)
      this.plan.planList_tour[listObject.index1].splice(listObject.index2, 1)

    },
    UpdateWrite() {

      var calc=(new Date(this.endDate)-new Date(this.startDate))/86400000
      if (calc+1<this.plan.planList.length){
        alert("일정의 길이가 총 일정 수 보다 많습니다!")
      }
      else if (calc+1>this.plan.planList.length){
        alert("일정의 길이가 총 일정 수 보다 적습니다!")
      }
      else if(this.plan.planList.length<1){
        alert("일정이 입력되지 않았습니다!")
      }
      else{
        let planVO = {};
        planVO.startDate = this.startDate;
        planVO.endDate = this.endDate;
        planVO.planTitle = document.querySelector(".plantitle").value
        planVO.planID=this.plan.planID;

        var i=0,j=0
        var array=[]
        for (i=0;i<this.plan.planList.length;i++){
          var ary=[]
          for (j=0;j<this.plan.planList[i].length;j++){
            ary.push(this.plan.planList[i][j].tourId)
          }
          array.push(ary)
        }

        planVO.planList = array


        if (confirm("저장 하시겠습니까?")) {
          axios.put('http://kosa3.iptime.org:50201/plan/planUpdate', planVO, {
            headers: {
              'Content-Type': 'application/json; charset=utf-8',
            },
          }).then(request => {
            if (request.status === 200) {
              this.$router.push(`/planDetail/${this.plan.planID}`)
            }
          }).catch(function () {
            alert("제목 길이는 공백포함 1자이상 45자이하 입니다!");
          })
        }
      }
    },
  },
  components: {
    DayList,
    RecomPlace,
    DatePicker
  },
}
</script>

<style scoped>
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
  font-size: 1rem;
  font-weight: 700;
  color: #5dc9dd;
  display: flex;
  position: relative;

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

.sub_main {
  display: flex;
  position: relative;
  width: 100%;
  /*height: 700px;*/
  height: 100%;
  /*float: left;*/
  /*justify-content: space-between;*/
  /*  */
  border: 1px solid black;
  padding: 0.25em;
  margin: 0.25em;
  border-radius: 0.25em;
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

/*
.thr_main_day {
  display: flex;
  width: 100px;
  text-align: center;
  flex-wrap: nowrap;
  justify-content: space-around;
}*/
.thr_main_day {
  font-size: 1rem;
  font-weight: 700;
  color: #5dc9dd;
  display: flex;
  position: relative;

}

.thr_main_list {
  /*height: 5px;*/
  overflow-x: auto;
  /*overflow-x: scroll;*/
  display: flex;
  width: 963px;
  text-align: left;
  height: inherit;
  /**/
  /*border: 1px solid black;*/
  padding: 0.25em;
  margin: 0.25em;
  border-radius: 0.25em;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
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
  padding: 0.25em;
  margin: 0.25em;
  border-radius: 0.25em;
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


</style>