import { api } from "./client";

export const getUpcomingMovies  = (page = 1) =>
    api.get("/movie/upcoming", { params: {page}});

export const getPopularMovies = (page = 1) =>
    api.get("/movie/popular", { params: {page}});

export const getPopularTV  = (page = 1) =>
    api.get("/tv/popular", { params: {page}});

export const getTopRatedTV  = (page = 1) =>
    api.get("/tv/top_rated", { params: {page}});

export const searchMulti = (query: string, page = 1) => 
    api.get("/search/multi", {
        params: {query, page}
    })