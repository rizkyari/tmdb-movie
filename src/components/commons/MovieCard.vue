<template>
    <article class="group rounded-xl overflow-hidden border-gray-600 border-2  hover:shadow-lg transition">
        <img
        :src="getImageUrl(movie.poster_path)"
        :alt="movie.title"
        class="w-full object-cover group-hover:scale-105 transition"
        loading="lazy"
        />

        <div class="p-3 space-y-1">
            <h3 class="text-sm font-semibold line-clamp-1" :title="movie.title">
                {{ movie.title }}
            </h3>

            <p class="text-xs text-neutral-400">
                {{ formatDate(movie.release_date) }}
            </p>

            <div class="flex items-center gap-1 text-yellow-400 text-xs">
                star <span> {{ movie.vote_average.toFixed(1) }} </span>
            </div>

            <button
            class="mt-2 w-full border rounded-lg px-2 py-1 text-xs hover:bg-neutral-600 hover:text-amber-100 cursor-pointer"
            @click="$emit('toggle', movie)"
            :aria-pressed="inWatchlist"
            aria-label="Add to watchlist"
            >
                {{ inWatchlist ? "Saved" : "Add to Watchlist" }}
            </button>
        </div>
    </article>
</template>

<script setup lang="ts">
import type { Movie } from '../../types/tmdb';
import { getImageUrl, formatDate } from '../../utils/formatter';

defineProps<{
    movie: Movie;
    inWatchlist?: boolean;
}>();
</script>