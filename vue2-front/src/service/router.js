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
import ReviewDetail from "../components/review/ReviewDetail";
import Login from "../components/common/Login";
import Create from "../components/pages/Create";
import MyPage from "../components/mypage/MyPage";
import Register from "../components/common/Register";
import MyPageModi from "../components/mypage/MyPageModi";
import DetailPlanPage from "../components/detail/DetailPlan/DetailPlanPage";
import MyPageVue from "../components/mypage/MyPageVue";
import MyPageList from "../components/mypage/MyPageList";

Vue.use(VueRouter)

// 인증
// const requireAuth = () => (from, to, next) => {
//     const isAuthenticated = false
//     if (isAuthenticated) return next()
//     next('/login?returnPath=mypage')
// }

const route= [
    // 김제민
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
        path: '/create/:region',
        name: 'regionList',
        component: Create

    },
    
    // DB 넘어오는 디테일 페이지 확인
    {
        path: '/planDetail/:region',
        name: 'regionList',
        component: Create

    },
    // 김제민
    {
        path: '/create',
        name: 'Create',
        component: Create
    },
    // 김제민
    {
        path: '/detailplan',
        name: 'DetailPlanPage',
        component: DetailPlanPage
    },
    // 김제민
    {
        path: '/mypage',
        name: 'MyPage',
        component: MyPage,
    },
    // 김제민
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
        name: 'Review',
        component: Review
    },
    {
        path: '/reviewDetail/:reviewId',
        name: 'ReviewDetail',
        component: ReviewDetail

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
    // 김제민
    {
        path: '/mypagemodi',
        component: MyPageModi
    },
    // 김제민
    {
        path: '/mypagelist',
        component: MyPageList
    },
    // 임재혁
    {
        path: '/register',
        name: 'Register',
        component: Register
    }
]

const router = new VueRouter({
    mode:'history',
    routes: route
})

export default router