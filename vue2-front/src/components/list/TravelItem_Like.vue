<template>
  <div>
    <div class="mycard" :style="{backgroundImage : `url( ${item.img} )`}">
      <div class="mycard-foreground" @click="viewURL(item.url)">
        <div class="mycard-text">
          <div>
            <h5 class="mycard-region tc">{{ item.region }}</h5>
          </div>
          <div>
            <h6 class="mycard-title tc">{{ item.title }}</h6>
          </div>
          <div class="mycard-hashtags tc">
            <span class="mycard-hashtag">#{{ item.tag1 }}  #{{ item.tag2 }}&nbsp;&nbsp;</span>
          </div>
        </div>
      </div>
    </div>
    <div class="likebox" @click="liked">
      <span>좋아요: {{ this.item.likes }}</span>
      <p v-if="flag">💖</p>
      <p v-if="!flag">🤍</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TravelItem',
  data() {
    return {
      flag: false,
      likeID: '',
      likeList:'',
      likecnt:0
    }
  },
  props: {
    item: Object,
  },
  methods: {
    liked() {
      if (localStorage.getItem("id")) {
        if (this.flag) {


          this.$axios.delete(`/tour/deleteTourLike/${this.likeID}`).then((res) => {
            if (res.status == 200) {
              this.flag = false;
              this.$axios.put(`/tour/deleteTourLikePoint/${this.item.tourId}`).then((res2) => {
                if (res2.status == 200) {
                  this.item.likes-=1;
                }
              }).catch((err2) => {
                console.log("에러발생: " + err2)
              })
            }
          }).catch((err) => {
            console.log("에러발생: " + err)
          })
        } else {
          var like = {};
          like.tourLikeID = this.likeID;
          like.userID = localStorage.getItem("id");
          like.tourID = this.item.tourId;
          this.$axios.post("/tour/insertTourLike", like).then((res) => {
            if (res.status == 200) {
              this.flag = true;
              this.$axios.put(`/tour/updateTourLikePoint/${this.item.tourId}`).then((res2) => {
                if (res2.status == 200) {
                  this.item.likes+=1;
                  this.likeID=res.data
                }
              }).catch((err2) => {
                console.log("에러발생: " + err2)
              })
            }
          }).catch((err) => {
            console.log("에러발생: " + err)
          })
        }

      } else {
        alert("로그인 후 이용 가능합니다.")
      }
    },
    viewURL(link) {
      window.open(link)
    }
  },
  created() {
    if (localStorage.getItem("id")) {
      this.$axios.get(`/tour/like/${localStorage.getItem("id")}`).then((res) => {
        if (res.status == 200) {
          this.likeList=res.data
          if (res.data.findIndex(i=>i.tourID == this.item.tourId)>=0) {
            this.likeID = res.data[res.data.findIndex(i=>i.tourID == this.item.tourId)].tourLikeID
            this.flag = true;
            this.likecnt=this.item.likes;
          }
        }
      }).catch((err)=>{
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>
.mycard {
  width: 250px;
  height: 350px;
  border-radius: 10px;
  position: relative;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("https://www.royalpalace.go.kr/images/sub/gbg.jpg");
  background-size: cover;
  display: block;
  margin: 8px;
}

.mycard-foreground {
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0));
  border-radius: 10px;
  position: absolute;
}

.mycard-text {
  width: 220px;
  height: fit-content;
  position: absolute;
  left: 15px;
  bottom: 30px;
  color: white;
}

.tc {
  color: white;
}

.likebox p {
  float: right;
  margin-bottom: 0px;
}

</style>