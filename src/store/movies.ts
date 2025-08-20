import {defineStore} from 'pinia';
import {ref} from 'vue';
import {getPopularMovies, getUpcomingMovies, searchMovie} from '../services/tmdb';
import type {PagedResponse, Movie} from '../types/tmdb';

export const useMovieStore = defineStore("movies", () => {
    const items = ref<Movie[]>([]);
    const page = ref(1);
    const totalPages = ref(1);
    const loading = ref(false);
    const error = ref<string | null>(null);
    const lastQuery = ref<string>("");

    async function fetchPopular(p=1) {
        if (p < 1) p = 1;
        if (totalPages.value && p > totalPages.value) p = totalPages.value;

        loading.value = true;
        error.value = null;

        page.value = p;
        try {
            const res = await getPopularMovies(p);
            const data: PagedResponse<Movie> = res.data;
            items.value = data.results;
            totalPages.value = data.total_pages;
        } catch (e: any) {
            error.value = e?.message ?? "Failed to fetch";
        } finally {
            loading.value = false;
        }
    }

    async function fetchUpcoming(p=1) {
        if (p < 1) p = 1;
        if (totalPages.value && p > totalPages.value) p = totalPages.value;

        loading.value = true;
        error.value = null;

        page.value = p;
        try {
            const res = await getUpcomingMovies(p);
            const data: PagedResponse<Movie> = res.data;
            items.value = data.results;
            totalPages.value = data.total_pages;
        } catch (e: any) {
            error.value = e?.message ?? "Failed to fetch";
        } finally {
            loading.value = false;
        }
    }

    async function findMovie(query: string, p=1) {
        if (query !== lastQuery.value) { totalPages.value = 1; page.value = 1; }
        lastQuery.value = query;

        if (p < 1) p = 1;
        if (totalPages.value && p > totalPages.value) p = totalPages.value;

        loading.value = true;
        error.value = null;

        page.value = p;
        try {
            const res = await searchMovie(query, p);
            const data: PagedResponse<Movie> = res.data;
            items.value = data.results;
            totalPages.value = data.total_pages || 1;
        } catch (err: any) {
             error.value = err?.message ?? "Failed to find movie";
        } finally {
            loading.value = false;
        }
    }

    return {items, page, totalPages, loading, error, fetchPopular, fetchUpcoming, findMovie}
})