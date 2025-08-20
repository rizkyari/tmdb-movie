<template>
  <main style="max-width: 1200px; margin: 0 auto; padding: 24px;">
    <h1 style="font-weight:700; font-size:24px; margin-bottom: 16px;">Your Watchlist</h1>

    <!-- Movies -->
    <section v-if="movies.length" style="margin-bottom: 24px;">
      <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom: 12px;">
        <h2 style="font-weight:600; font-size:18px;">Movies</h2>
        <small style="color:#a3a3a3;">showing {{ movies.length }} of {{ totalMovies }}</small>
      </div>

      <div
        style="display:grid; grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 12px;"
      >
        <WatchlistCard
        v-for="i in movies"
        :items="i"
        />
      </div>
    </section>

    <!-- TV -->
    <section v-if="tvs.length">
      <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom: 12px;">
        <h2 style="font-weight:600; font-size:18px;">TV Series</h2>
        <small style="color:#a3a3a3;">showing {{ tvs.length }} of {{ totalTvs }}</small>
      </div>

      <div
        style="display:grid; grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 12px;"
      >
        <WatchlistCard
        v-for="i in tvs"
        :items="i"
        />
      </div>

      
    </section>

    <p v-if="!movies.length && !tvs.length" style="color:#a3a3a3; margin-top: 16px;">
      No items yet.
    </p>
  </main>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";
import WatchlistCard from "../../components/commons/WatchlistCard.vue";
import { useWatchlistStore } from "../../store/watchlist";

const wl = useWatchlistStore();
onMounted(() => wl.load && wl.load());

const allMovies = computed(() => wl.items.filter((i: any) => i.type === "movie"));
const allTvs    = computed(() => wl.items.filter((i: any) => i.type === "tv"));

const movies = computed(() => allMovies.value.slice(0, 5));
const tvs    = computed(() => allTvs.value.slice(0, 5));

const totalMovies = computed(() => allMovies.value.length);
const totalTvs    = computed(() => allTvs.value.length);

</script>
