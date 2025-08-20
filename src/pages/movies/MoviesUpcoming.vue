<template>
    <main class="p-4">
        <h1 class="text-2xl font-bold mb-4">Upcoming Movies</h1>

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
            <button class="px-3 py-1 border rounded hover:bg-neutral-600 hover:text-white cursor-pointer" :disabled="m.page<=1" @click="m.fetchPopular(m.page-1)">Prev</button>
            <button class="px-3 py-1 border rounded hover:bg-neutral-600 hover:text-white cursor-pointer" :disabled="m.page>=m.totalPages" @click="m.fetchPopular(m.page+1)">Next</button>
        </div>
    </main>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useMovieStore } from '../../store/movies';
import { useWatchlistStore } from '../../store/watchlist';

import MovieCard from '../../components/commons/MovieCard.vue';

const wl = useWatchlistStore();
const toggle = wl.toggle;

const m = useMovieStore();
onMounted(() => m.fetchUpcoming(1))
</script>