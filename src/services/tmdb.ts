import { api } from "./client";
import type { Movie, PagedResponse } from "../types/tmdb";

export const getTopRatedMovies = (page = 1) : Promise<PagedResponse<Movie>> =>
    api.get("/movie/top_rated", { params: {page}});

export const getPopularMovies = (page = 1) : Promise<PagedResponse<Movie>> =>
    api.get("/movie/popular", { params: {page}});