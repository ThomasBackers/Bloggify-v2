<script setup>
defineProps({
  appName: {
    type: String,
    required: true
  }
})
</script>

<template>
  <header>
    <h1 class="hidden">
      {{ appName }}
    </h1>

    <router-link :to="{ name: 'home' }" class="inline-block">
      <img
        src="/logo.svg"
        alt="bloggify logo"
        class="w-32"
      >
    </router-link>
  </header>  
</template>
