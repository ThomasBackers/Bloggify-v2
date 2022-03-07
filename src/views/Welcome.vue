<script setup>
import { PlayIcon } from '@heroicons/vue/solid'
import BackgroundMedia from '../components/BackgroundMedia.vue'
</script>

<template>
  <main class="
    h-screen
    bg-black
    flex
  ">
    <BackgroundMedia :asset="'welcome-background.mp4'" />

    <router-link :to="{ name: 'home' }" class="m-auto relative">
      <img
        src="/logo.svg"
        alt="bloggify logo"
        class="w-44"
      >

      <p class="
        text-zinc-400
        text-center
        font-roboto
        font-semibold
        tracking-wider
      ">
        ready to bounce?
      </p>

      <PlayIcon class="
        w-12
        mx-auto
        text-white
        mt-4
        animate-bounce
      " />
    </router-link>
  </main>
</template>
