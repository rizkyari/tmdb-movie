<template>
    <main class="p-4">
        <h1 class="text-2xl font-bold mb-4">Popular Movies</h1>

        <SearchBar
        v-model="query"
        placeholder="Search movies…"
        :disabled="m.loading"
        @search="doSearch(1)"
        @clear="clearSearch"
        />

        <div v-if="m.loading" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            <div v-for="n in 10" :key="n" class="h-[260px] md:w-36 bg-neutral-800 animate-pulse rounded-xl"></div>
        </div>

        <div v-else class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            <MovieCard 
            v-for="it in m.items" 
            :key="it.id" 
            :movie="it" 
            :in-watchlist="wl.hasById(it.id, 'movie')"
            @toggle="toggle({...it, type: 'movie'})"
            />
        </div>

        <p v-if="m.error" class="text-red-400 mt-3">{{ m.error }}</p>

        <div class="flex justify-center gap-2 mt-6">
            <button 
            class="px-3 py-1 border rounded hover:bg-neutral-600 hover:text-white cursor-pointer" 
            :disabled="m.page <= 1 || m.loading"
            @click="go(m.page - 1)"
            >
                Prev
            </button>
            <button
            class="px-3 py-1 border rounded hover:bg-neutral-600 hover:text-white cursor-pointer disabled:opacity-50"
            :disabled="m.page >= m.totalPages || m.loading"
            @click="go(m.page + 1)"
            >
                Next
            </button>
        </div>
    </main>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useMovieStore } from '../../store/movies';
import { useWatchlistStore } from '../../store/watchlist';

import MovieCard from '../commons/MovieCard.vue';
import SearchBar from '../commons/SearchBar.vue';

const query = ref('');
const isSearching = computed(() => query.value.trim().length > 0);

const wl = useWatchlistStore();
const toggle = wl.toggle;

const m = useMovieStore();
onMounted(() => m.fetchPopular(1))

function doSearch(p = 1) {
    const term = query.value.trim();
    if (!term) m.fetchPopular(1);
    else m.findMovie(term, p);      
}

function clearSearch() {
    query.value = '';
    m.fetchPopular(1);
}

function go(p: number) {
    if (isSearching.value) doSearch(p);
    else m.fetchPopular(p);
}

</script>