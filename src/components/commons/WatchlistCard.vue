<template>
    <article class="group rounded-xl overflow-hidden border-gray-600 border-2  hover:shadow-lg transition">
        <img
        :src="getImageUrl(items.poster_path)"
        :alt="items.title"
        class="w-full object-cover group-hover:scale-105 transition"
        loading="lazy"
        />

        <div class="p-3 space-y-1">
            <h3 class="text-sm font-semibold line-clamp-1" :title="items.title">
                {{ items.title }}
            </h3>

            <p class="text-xs text-neutral-400">
                {{ formatDate(items.release_date) }}
            </p>

            <div class="flex items-center gap-1 text-yellow-400 text-xs">
                star <span> {{ items.vote_average.toFixed(1) }} </span>
            </div>
        </div>
    </article>
</template>

<script setup lang="ts">
import { getImageUrl, formatDate } from '../../utils/formatter';

defineProps<{
    items: any
}>();
</script>