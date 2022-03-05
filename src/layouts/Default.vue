<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()

const user = computed(() => store.getters.getUser())
</script>

<template>
  <div class="
    min-h-screen
    bg-black
  ">
    <router-view></router-view>
  </div>
</template>
