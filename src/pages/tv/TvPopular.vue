<template>
    <main class="p-4">
        <h1 class="text-2xl font-bold mb-4">Popular TV Series</h1>

        <div v-if="loading" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            <div v-for="n in 10" :key="n" class="h-[260px] md:w-36 bg-neutral-800 animate-pulse rounded-xl"></div>
        </div>

        <div v-else class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            <TVCard 
            v-for="it in items" 
            :key="it.id" 
            :tv="it" 
            :inWatchlist="wl.hasById(it.id,'tv')"
            @toggle="toggle({...it, type: 'tv'})"
            />
        </div>

        <p v-if="error" class="text-red-400 mt-3">{{ error }}</p>

        <div class="flex justify-center gap-2 mt-6">
            <button class="px-3 py-1 border rounded hover:bg-neutral-600 hover:text-white cursor-pointer" :disabled="page<=1" @click="tvPopular.fetchPopular(page-1)">Prev</button>
            <button class="px-3 py-1 border rounded hover:bg-neutral-600 hover:text-white cursor-pointer" :disabled="page>=totalPages" @click="tvPopular.fetchPopular(page+1)">Next</button>
        </div>
    </main>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useTvStore } from "../../store/tv";
import { useWatchlistStore } from "../../store/watchlist";
import TVCard from "../../components/commons/TVCard.vue";

const tvPopular = useTvStore();
const { items, page, totalPages, loading, error } = storeToRefs(tvPopular);
const fetch = (p = 1) => tvPopular.fetchPopular(p);

const wl = useWatchlistStore();
const toggle = wl.toggle;

onMounted(() => { wl.load?.(); fetch(1); });
</script>
