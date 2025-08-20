// src/types/tmdb.ts
export interface PagedResponse<T> {
    page: number;
    results: T[];
    total_pages: number;
    total_results: number;
}

export interface Movie {
    id: number;
    title: string;
    original_title: string;
    overview: string;
    poster_path: string | null;
    backdrop_path: string | null;
    release_date: string;
    vote_average: number;
    vote_count: number;
    popularity: number;
    adult: boolean;
    genre_ids: number[];
    video: boolean;
    original_language: string;
}

export interface TV {
    id: number;
    name: string;
    overview: string;
    poster_path: string | null;
    vote_average: number;
    first_air_date: string;
    original_name: string;
    original_language: string;
}