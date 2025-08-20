<template>
    <header class="sticky top-0 z-50 bg-neutral-900/80 backdrop-blur border-b border-neutral-800 text-white">
        <nav class="max-w-6xl mx-auto px-4 py-3 flex items-center gap-3">
            <RouterLink to="/" class="font-bold text-lg tracking-tight hover:opacity-90">
                TMDB Catalog
            </RouterLink>

            <div class="flex-1" />
            <ul class="hidden md:flex items-center gap-4 text-sm">
                <li class="relative group">
                    <button class="px-3 py-1 rounded hover:bg-neutral-800">Movies ▾</button>
                    <div class="absolute left-0 top-full min-w-48 bg-neutral-900 border border-neutral-800 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition duration-150">
                        <RouterLink :to="{name:'movies-popular'}" class="block px-3 py-2 hover:bg-neutral-800">Popular</RouterLink>
                        <RouterLink :to="{name:'movies-upcoming'}" class="block px-3 py-2 hover:bg-neutral-800">Upcoming</RouterLink>
                    </div>
                </li>

                <li class="relative group">
                    <button class="px-3 py-1 rounded hover:bg-neutral-800">TV Series ▾</button>
                    <div class="absolute left-0 top-full min-w-48 bg-neutral-900 border border-neutral-800 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition duration-150">
                        <RouterLink :to="{name:'tv-popular'}" class="block px-3 py-2 hover:bg-neutral-800">Popular</RouterLink>
                        <RouterLink :to="{name:'tv-top-rated'}" class="block px-3 py-2 hover:bg-neutral-800">Top Rated</RouterLink>
                    </div>
                </li>

                <li>
                    <RouterLink :to="{name:'watchlist'}" class="px-3 py-1 rounded hover:bg-neutral-800">Watchlist</RouterLink>
                </li>
            </ul>

            <!-- Mobile burger -->
            <button
            class="md:hidden inline-flex items-center justify-center p-2 rounded hover:bg-neutral-800"
            :aria-expanded="open ? 'true' : 'false'"
            :aria-label="open ? 'Close menu' : 'Open menu'"
            aria-controls="mobile-menu"
            @click="toggle()"
            >
                <span v-if="!open">Open</span>
                <span v-else>✕</span>
            </button>
        </nav>

        <!-- Mobile dropdown -->
        <transition name="fade">
            <div v-if="open" id="mobile-menu" class="md:hidden border-t border-neutral-800">
                <ul class="px-4 py-3 space-y-1 text-sm" @click="close()">
                    <li>
                        <RouterLink :to="'/'" class="block px-3 py-2 rounded hover:bg-neutral-800"
                        :class="isActive('/')">Home</RouterLink>
                    </li>
                    <li class="text-neutral-400 px-2">Movies</li>
                    <li><RouterLink :to="{name:'movies-popular'}" class="block px-3 py-2 rounded hover:bg-neutral-800">Popular</RouterLink></li>
                    <li><RouterLink :to="{name:'movies-upcoming'}" class="block px-3 py-2 rounded hover:bg-neutral-800">Upcoming</RouterLink></li>

                    <li class="text-neutral-400 px-2 mt-2">TV Series</li>
                    <li><RouterLink :to="{name:'tv-popular'}" class="block px-3 py-2 rounded hover:bg-neutral-800">Popular</RouterLink></li>
                    <li><RouterLink :to="{name:'tv-top-rated'}" class="block px-3 py-2 rounded hover:bg-neutral-800">Top Rated</RouterLink></li>

                    <li class="mt-2"><RouterLink :to="{name:'watchlist'}" class="block px-3 py-2 rounded hover:bg-neutral-800">Watchlist</RouterLink></li>
                </ul>
            </div>
        </transition>
    </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const open = ref(false);

const toggle = () => (open.value = !open.value);
const close = () => (open.value = false);
const isActive = (path: string) => (route.path === path ? 'bg-neutral-800' : '');

watch(() => route.fullPath, () => close());

function onKey(e: KeyboardEvent) {
  if (e.key === 'Escape') close();
}
onMounted(() => window.addEventListener('keydown', onKey));
onBeforeUnmount(() => window.removeEventListener('keydown', onKey));
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity .15s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>