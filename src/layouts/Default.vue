<script setup>
import { ref } from 'vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

const menu = ref(false)
</script>

<template>
  <div class="
    min-h-screen
    bg-black
    text-white
  ">
    <Header />

    <router-view></router-view>

    <Footer />
  </div>
</template>
