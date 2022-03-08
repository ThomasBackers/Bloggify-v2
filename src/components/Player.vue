<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const playlist = computed(() => store.getters.getPlaylist)

console.log(playlist.value[0])
</script>

<template>
  <!-- -->
</template>
