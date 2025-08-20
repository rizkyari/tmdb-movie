<template>
  <main class="max-w-6xl mx-auto px-4 py-8 space-y-10">
    <section class="rounded-2xl p-8 bg-gradient-to-br from-red-800 to-blue-900">
      <h1 class="text-2xl md:text-3xl font-bold mb-2 text-white">Discover Movies & TV</h1>
      <p class="text-neutral-300 mb-6">Browse popular titles powered by TMDB API.</p>
      <RouterLink
        to="/movies"
        class="text-neutral-200 inline-block px-4 py-2 rounded-lg border hover:bg-neutral-800"
      >
        Explore Popular Movies →
      </RouterLink>
    </section>

    <section aria-labelledby="home-popular">
      <div class="flex items-center justify-between mb-3">
        <h2 id="home-popular" class="text-xl font-semibold">Trending Now</h2>
        <RouterLink to="/movies" class="text-sm hover:underline">See all</RouterLink>
      </div>

      <div v-if="loading" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        <div v-for="n in 5" :key="n" class="h-[260px] bg-neutral-800 animate-pulse rounded-xl"></div>
      </div>

      <div v-else class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        <MovieCard
          v-for="m in movies.slice(0,5)"
          :key="m.id"
          :movie="m"
          :inWatchlist="wl.hasById(m.id,'movie')"
          @toggle="toggle({...m, type: 'movie'})"
        />
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import MovieCard from "../components/commons/MovieCard.vue";
import { getPopularMovies } from "../services/tmdb";
import type { Movie, PagedResponse } from "../types/tmdb";
import { useWatchlistStore } from "../store/watchlist";

const movies = ref<Movie[]>([]);
const loading = ref(true);

const wl = useWatchlistStore();
const toggle = wl.toggle;

onMounted(async () => {
  try {
    const res = await getPopularMovies(1);
    const data = res.data as PagedResponse<Movie>;
    movies.value = data.results;
  } finally {
    loading.value = false;
  }
});
</script>
