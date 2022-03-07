<script setup>
import { ref } from 'vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

const APP_NAME = 'Bloggify'
const isMenuOpen = ref(false)
</script>

<template>
  <div class="
    min-h-screen
    bg-black
    text-white
    font-roboto
  ">
    <Header :appName="APP_NAME" />

    <router-view></router-view>

    <Footer :appName="APP_NAME" />
  </div>
</template>
