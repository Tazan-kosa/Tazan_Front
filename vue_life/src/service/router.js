import Vue from 'vue'
import VueRouter from 'vue-router'
import test1 from "../components/test1";
import test2 from "../components/test2";
import test3 from "../components/test3";

Vue.use(VueRouter)

const route = [
    {
        name: 'test1',
        path: '/test1',
        component: test1
    },
    {
        name: 'test2',
        path: '/test2',
        component: test2
    },
    {
        name: 'test3',
        path: '/test3',
        component: test3
    }
]

const router = new VueRouter({
    mode: 'history',
    routes: route
})

export default router