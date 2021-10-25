// import { createRouter, createWebHistory } from 'vue-router'
// vue2에서는 import vue 가져와야함.
import Vue from 'vue'
import VueRouter from 'vue-router'

import Detail from "../components/pages/Detail";
// import List from "../components/pages/List";
// import Review from "../components/pages/Review";
import Main from "../components/main/main.vue"
import TourList from "../components/list/TourList";
import Review from "../components/review/ReviewDetail"

Vue.use(VueRouter)

const route= [
    {
        path: '/detail',
        name: 'Datail',
        component: Detail
    },
    {
        path: '/list',
        name: 'List',
        component: TourList
    },
    {
        path: '/review',
        component: Review
    },
    {
        path: '/',
        component: Main
    }
]

const router = new VueRouter({
    mode:'history',
    routes: route
})

export default router