// import { createRouter, createWebHistory } from 'vue-router'
// vue2에서는 import vue 가져와야함.
import Vue from 'vue'
import VueRouter from 'vue-router'

import Detail from "../components/pages/Detail";
import Main from "../components/main/main.vue";
import TourList from "../components/list/TourList";
import ReviewList from "@/components/list/ReviewList";
import Review from "../components/review/ReviewWrite";
import ReviewDetail from "../components/review/ReviewDetail";
import Login from "../components/common/Login";
import Create from "../components/pages/Create";
import Register from "../components/common/Register";
import MyPageList from "../components/mypage/MyPageList";
import AdminPage from "../components/common/admin/AdminPage";
// import Menus from "../components/common/admin/menus";

import UnkownPlanDetail from "../components/detail/CreatePage/UnkownPlanDetail";
import MyPageListTest from "../components/mypage/MyPageListTest";


Vue.use(VueRouter)

const route = [
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
    // 장소 클릭시 여행 계획 짜기 링크
    {
        path: '/create/:region',
        name: 'regionList',
        component: Create

    },

    // 장소 클릭시 여행 계획 짜기
    {
        path: '/plan/:region',
        name: 'regionCreate',
        component: Create
    },
    // 여행 계획 상세 보기
    {
        path: '/planDetail/:planId',
        name: 'plandetail',
        component: UnkownPlanDetail
    },
    // 삭제 요망
    {
        path: '/create',
        name: 'Create',
        component: Create
    },
    // 
    {
        path: '/tourlist',
        name: 'TourList',
        component: TourList
    },
    // 리뷰 리스트
    {
        path: '/reviewList',
        name: 'ReviewList',
        component: ReviewList
    },
    // 리뷰
    {
        path: '/review',
        name: 'Review',
        component: Review
    },
    // 리뷰 디테일
    {
        path: '/reviewDetail/:reviewId',
        name: 'ReviewDetail',
        component: ReviewDetail
    },
    // 메인
    {
        path: '/',
        component: Main
    },
    // 로그인
    {
        path: '/login',
        component: Login
    },
    // 회원 - 마이페이지
    {
        path: '/mypagelist',
        component: MyPageList
    },
    // 회원 가입
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    //mypage 테스트
    {
        path: '/TT',
        name: 'TT',
        component: MyPageListTest
    },
    // 어드민
    {
        path: '/adminpage',
        name: 'AdminPage',
        component: AdminPage
    },
]

const router = new VueRouter({
    mode: 'history',
    routes: route
})

export default router