import { api } from "./client";

export const getTopRatedMovies = (page = 1) =>
    api.get("/movie/top_rated", { params: {page}});

export const getPopularMovies = (page = 1) =>
    api.get("/movie/popular", { params: {page}});