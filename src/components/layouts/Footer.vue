<template>
  <footer class="bg-gray-900 text-gray-300 py-8 mt-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Top section -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Brand -->
        <div>
          <h2 class="text-xl font-bold text-white">TMDB Catalog</h2>
          <p class="mt-2 text-sm text-gray-400">
            Your gateway to amazing movies and series
          </p>
        </div>

        <!-- Links -->
        <div>
          <h3 class="text-sm font-semibold text-white uppercase tracking-wider">
            Quick Links
          </h3>
          <ul class="mt-4 space-y-2">
            <li><a href="/" class="hover:text-white transition">Home</a></li>
            <li><a href="/movies" class="hover:text-white transition">Movies</a></li>
            <li><a href="/tv/popular" class="hover:text-white transition">TV Series</a></li>
            <li><a href="/watchlist" class="hover:text-white transition">Watclist</a></li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="text-sm font-semibold text-white uppercase tracking-wider">
            Contact
          </h3>
          <ul class="mt-4 space-y-2">
            <li>Email: <a href="mailto:rizkyari4121@gmail.com" class="hover:text-white">rizkyari4121@gmail.com</a></li>
            <li>Location: Malang, Indonesia</li>
          </ul>
        </div>
      </div>

      <!-- Bottom section -->
      <div class="mt-8 border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between">
        <p class="text-sm text-gray-400">
          © 2025 TMDB Catalog. All rights reserved.
        </p>
        <div class="flex space-x-4 mt-4 md:mt-0">
          <a href="#" class="hover:text-white">
            <i class="fa-sharp fa-solid fa-user"></i>
          </a>
          <a href="#" class="hover:text-white">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#" class="hover:text-white">
            <i class="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>
