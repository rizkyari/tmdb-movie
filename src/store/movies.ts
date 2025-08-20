import {defineStore} from 'pinia';
import {ref} from 'vue';
import {getPopularMovies, getUpcomingMovies} from '../services/tmdb';
import type {PagedResponse, Movie} from '../types/tmdb';

export const useMovieStore = defineStore("movies", () => {
    const items = ref<Movie[]>([]);
    const page = ref(1);
    const totalPages = ref(1);
    const loading = ref(false);
    const error = ref<string | null>(null);

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

    return {items, page, totalPages, loading, error, fetchPopular, fetchUpcoming}
})