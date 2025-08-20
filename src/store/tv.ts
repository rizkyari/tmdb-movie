import { defineStore } from "pinia";
import { ref } from "vue";
import { getPopularTV, getTopRatedTV, searchTv } from "../services/tmdb";
import type { TV, PagedResponse } from "../types/tmdb";

export const useTvStore = defineStore("tv", () => {
    const items = ref<TV[]>([]);
    const page = ref(1);
    const totalPages = ref(1);
    const loading = ref(false);
    const error = ref<string | null>(null);
    const lastQuery = ref<string>("");

    async function fetchPopular(p = 1) {
        if (p < 1) p = 1;
        if (totalPages.value && p > totalPages.value) p = totalPages.value;

        loading.value = true;
        error.value = null;
        page.value = p;

        try {
            const res = await getPopularTV(p);
            const data = res.data as PagedResponse<TV>;
            items.value = data.results;
            totalPages.value = data.total_pages || 1;
        } catch (e: any) {
            error.value = e?.message ?? "Failed to fetch popular TV series";
        } finally {
            loading.value = false;
        }
    }

    async function fetchTopRated(p = 1) {
        if (p < 1) p = 1;
        if (totalPages.value && p > totalPages.value) p = totalPages.value;

        loading.value = true;
        error.value = null;
        page.value = p;

        try {
            const res = await getTopRatedTV(p);
            const data = res.data as PagedResponse<TV>;
            items.value = data.results;
            totalPages.value = data.total_pages || 1;
        } catch (e: any) {
            error.value = e?.message ?? "Failed to fetch top rated TV series";
        } finally {
            loading.value = false;
        }
    }

    async function findSeries(query: string, p=1) {
        if (query !== lastQuery.value) { totalPages.value = 1; page.value = 1; }
        lastQuery.value = query;
    
        if (p < 1) p = 1;
        if (totalPages.value && p > totalPages.value) p = totalPages.value;
    
        loading.value = true;
        error.value = null;
    
         page.value = p;
        try {
            const res = await searchTv(query, p);
            const data: PagedResponse<TV> = res.data;
            items.value = data.results;
            totalPages.value = data.total_pages || 1;
        } catch (err: any) {
            error.value = err?.message ?? "Failed to find tv series";
        } finally {
            loading.value = false;
        }
    }

    return { items, page, totalPages, loading, error, fetchPopular, fetchTopRated, findSeries };
})