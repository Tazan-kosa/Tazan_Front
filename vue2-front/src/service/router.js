// import { createRouter, createWebHistory } from 'vue-router'
// vue2에서는 import vue 가져와야함.
import Vue from 'vue'
import VueRouter from 'vue-router'

import Detail from "../components/pages/Detail";
// import List from "../components/pages/List";
// import Review from "../components/pages/Review";
import Main from "../components/main/main.vue";
import TourList from "../components/list/TourList";
import ReviewList from "@/components/list/ReviewList";
import Review from "../components/review/ReviewWrite";
import Login from "../components/common/Login";
import Create from "../components/pages/Create";
import MyPage from "../components/mypage/MyPage";
import TestCreate from "../components/create/TestCreate";
import TestRead from "../components/create/TestRead";
import TestDetail from "../components/create/TestDetail";
import MyPageModi from "../components/mypage/MyPageModi";
import DetailPlanPage from "../components/detail/DetailPlan/DetailPlanPage";
import MyPageVue from "../components/mypage/MyPageVue";

Vue.use(VueRouter)

const route= [
    {
        path: '/detail',
        name: 'Datail',
        component: Detail,
        // children: [
        //     {
        //         path: "create",
        //         component: Create,
        //         name: "create"
        //     }
        // ]
    },
    {
        path: '/create',
        name: 'Create',
        component: Create
    },
    {
        path: '/detailplan',
        name: 'DetailPlanPage',
        component: DetailPlanPage
    },
    {
        path: '/mypage',
        name: 'MyPage',
        component: MyPage
    },
    {
        path: '/mypageV',
        name: 'MyPage',
        component: MyPageVue
    },
    {
        path: '/tourlist',
        name: 'TourList',
        component: TourList
    },
    {
        path: '/reviewList',
        name: 'ReviewList',
        component: ReviewList
    },
    {
        path: '/review',
        component: Review
    },
    {
        path: '/',
        component: Main
    },
    {
        path: '/login',
        component: Login
    },
    // 테스트 - 김제민
    {
        path: '/mypage',
        component: MyPage
    },
    {
        path: '/mypagemodi',
        component: MyPageModi
    },
    {
        path: '/testC',
        name: 'TestCreate',
        component: TestCreate
    },
    {
        path: '/testR',
        name: 'TestRead',
        component: TestRead
    },
    {
        path: '/testD',
        name: 'TestRead',
        component: TestDetail
    },
    {
        path: '/testC/:contentId?',
        name: 'TestCreate',
        component: TestCreate
    },
    {
        path: '/testD/:contentId',
        name: 'TestDetail',
        component: TestDetail
    }

]

const router = new VueRouter({
    mode:'history',
    routes: route
})

export default router