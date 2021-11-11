import Vue from 'vue'
import VueRouter from 'vue-router'
import test1 from "../components/test1";

Vue.use(VueRouter)

const route = [
    {
        name: '/test1',
        path: 'test1',
        compoenent: test1
    }
]

const router = new VueRouter({
    mode: 'history',
    routes: route
})

export default router