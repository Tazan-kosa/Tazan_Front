<template>
  <!-- Scrollable modal -->
  <div>
    <h5 id="mylist-btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">🖋️ 내 계획 불러오기</h5>
    <!-- Modal -->
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">나의 계획</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div v-for="(item, i) in myplanList" :key="i" class="container">
              <label class="radio-input">
                <input type="radio" id="i" name="item.id" class="radiobtn" @click="clickedRadiobtn(item.planID, item.reviewFlag)">
                  <div class="myplan">
                    <span class="myplan-region">{{ item.region }}</span>
                    <span class="myplan-date">{{ item.startDate.substr(0,10) }} ~ {{ item.endDate.substr(0,10) }}</span>
                    <span class="myplan-title">{{ item.planTitle }}</span>
                  </div>
                </label>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="clickedClose">선택하기</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'MyPlanModal',
  methods: {
    clickedRadiobtn(i,j) {
      this.myplanId = i;
      this.reviewFlag = j;
    },
    clickedClose(){
      this.$emit('selectedPlan', [this.myplanId, this.reviewFlag])
    }
  },
  created() {
    if(localStorage.getItem('auth')){
      var id = localStorage.getItem('id');
      this.$axios.get(`/api/user/plan/myPlan/${id}`).then(res => {
        if (res.status === 200) {
          this.myplanList = res.data;
        }
      }).catch(function (err) {
        //에러 처리 할 곳
        alert("에러발생:" + err.response.message);
      })
    }
  },
  data() {
    return {
      myPlanId: 0,
      myplanList : [],
      travelDate: '',
      reviewFlag: '',
    }
  }

}
</script>

<style scoped>
#mylist-btn {
  width: fit-content;
  height: fit-content;
  padding: 5px;
  margin-left: 10px;
  cursor: pointer;
}

.myplan {
  width: 100%;
  height : 100px;
  position: relative;
  padding: 10px;
  cursor: pointer;
}

.radio-input {
  width: 100%;
  height: 100px;
}

.radio-input input[type="radio"] {
  display: none;
}

.radio-input input[type="radio"] + .myplan{
  display:inline-block;
  background:none;
}

.radio-input input[type="radio"]:checked + .myplan{
  display:inline-block;
  background:none;
  border: 1px solid #008F7A;
  border-radius: 10px;
}

.myplan-region {
  width:fit-content;
  height:fit-content;
  position: absolute;
  cursor: pointer;
}

.myplan-date {
  width:fit-content;
  height: fit-content;
  position: absolute;
  right: 10px;
  cursor: pointer;
}

.myplan-title {
  width:fit-content;
  height: fit-content;
  position: absolute;
  bottom: 15px;
  cursor: pointer;
}
</style>