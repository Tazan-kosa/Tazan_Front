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
                <input type="radio" id="i" name="item.id" class="radiobtn" @click="clickedRadiobtn(item.myplanId)">
                  <div class="myplan">
                    <span class="myplan-region">{{ item.region }}</span>
                    <span class="myplan-date">{{ item.date }}</span>
                    <span class="myplan-title">{{ item.title }}</span>
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
import myplanList from './myplanList.js'

export default {
  name: 'MyPlanModal',
  methods: {
    clickedRadiobtn(i) {
      this.myplanId = i;
    },
    clickedClose(){
      this.$emit('selectedPlan', this.myplanId)
    }
  },
  data() {
    return {
      myPlanId: 0,
      myplanList :myplanList,
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
  /*background-color: aliceblue;*/
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