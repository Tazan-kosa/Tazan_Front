<template>
  <div>
    <button @click="api">버튼</button>
<!--    <div v-for="item in festival" :key="item">-->
<!--      {{ item.title }}-->
<!--    </div>-->
    <div v-for="item in thema" :key="item">
      {{item.thema}}
    </div>
  </div>
</template>

<script>
import axios from 'axios'
  export default {
    name: 'reviewwrite',
    datas() {
      return {
        festival : [],
        thema: [],
      }
    },
    methods: {
      api(){
        // axios.get('http://api.kcisa.kr/openapi/service/rest/meta4/getKCPG0504', {
        //   params: { serviceKey : 'a24c37fd-b4cf-47e0-b053-f0ddae93184e'}
        // }).then(res=> {
        //   this.festival = res.data.response.body.items.item
        //   console.log(this.festival)
        // })
        axios.get('http://api.kcisa.kr/openapi/service/rest/meta/KTOtour', {
          params: { serviceKey : '7b511d41-91ea-44ae-9558-a37954136f81'}
        }).then(res=> {
          this.thema = res.data.response.body.items.item
          console.log(this.thema)
        })
      }
    }
  }
</script>

<style scoped>
div {
  width: 200px;
  height: 250px;
}
</style>