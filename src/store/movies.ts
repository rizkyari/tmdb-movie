import {defineStore} from 'pinia';
import {ref} from 'vue';
import {getPopularMovies} from '../services/tmdb';
import type {PagedResponse, Movie} from '../types/tmdb';

export const useMovieStore = defineStore("movies", () => {
    const items = ref<Movie[]>([]);
    const page = ref(1);
    const totalPages = ref(1);
    const loading = ref(false);
    const error = ref<string | null>(null);

    return {items, page, totalPages, loading, error}
})