import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
    { path: '/', redirect: '/home'},
    { path: '/home', component: () => import('../pages/Home.vue')},
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return {top:0}
    }
})