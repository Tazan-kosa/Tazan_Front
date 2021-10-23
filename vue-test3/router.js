import Vue from 'vue'
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import List from "@/components/List";

Vue.use(Router); //vue 라우터 사용

export default new Router({ //라우터 연결
    routes:[
        {
            path:'/'
            ,name:HelloWorld
            ,component:HelloWorld
        }
        ,{
            path:'/pages/list'
            ,name:List
            ,component:List
        }

    ]
})