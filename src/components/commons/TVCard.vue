<template>
    <article class="group rounded-xl overflow-hidden border-gray-600 border-2  hover:shadow-lg transition">
        <img
        :src="getImageUrl(tv.poster_path)"
        :alt="tv.name"
        class="w-full object-cover group-hover:scale-105 transition"
        loading="lazy"
        />

        <div class="p-3 space-y-1">
            <h3 class="text-sm font-semibold line-clamp-1" :title="tv.name">
                {{ tv.name }}
            </h3>

            <p class="text-xs text-neutral-400">
                {{ formatDate(tv.first_air_date) }}
            </p>

            <div class="flex items-center gap-1 text-yellow-400 text-xs">
                <i class="fas fa-star"></i> <span> {{ tv.vote_average.toFixed(1) }} </span>
            </div>

            <button
            class="mt-2 w-full border rounded-lg px-2 py-1 text-xs hover:bg-neutral-600 hover:text-amber-100 cursor-pointer"
            @click="$emit('toggle')"
            :aria-pressed="inWatchlist"
            aria-label="Add to watchlist"
            >
                {{ inWatchlist ? "Saved" : "Add to Watchlist" }}
            </button>
        </div>
    </article>
</template>

<script setup lang="ts">
import type { TV } from '../../types/tmdb'
import { getImageUrl, formatDate } from '../../utils/formatter';

defineProps<{
    tv: TV;
    inWatchlist?: boolean;
}>();
</script>

<style scoped></style>
