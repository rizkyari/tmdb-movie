<script setup lang="ts">
import Header from './components/layouts/Header.vue';
import Footer from './components/layouts/Footer.vue';
import { useWatchlistStore } from './store/watchlist';
import { onMounted } from 'vue';

const wl = useWatchlistStore();
onMounted(() => wl.load());
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Header role="header"/>

    <main id="main" role="main" class="mx-auto max-w-6xl px-4 py-6">
      <RouterView/>
    </main>

    <Footer role="footer"/>
  </div>
</template>

<style scoped>

</style>
