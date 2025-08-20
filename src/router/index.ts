import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
    { path: '/', redirect: '/home'},
    { path: '/home', name: "home", component: () => import('../pages/Home.vue')},
    { path: '/movies', name: "movies-popular", component: () => import('../pages/movies/Movies.vue')},
    { path: '/movies/upcoming', name: "movies-upcoming", component: () => import('../pages/movies/MoviesUpcoming.vue')},
    { path: '/tv/popular', name: "tv-popular", component: () => import('../pages/tv/TvPopular.vue')},
    { path: '/tv/top-rated', name: "tv-top-rated", component: () => import('../pages/tv/TvTopRated.vue')},
    { path: '/watchlist', name: "watchlist", component: () => import('../pages/watchlist/Watchlist.vue')}
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return {top:0}
    }
})