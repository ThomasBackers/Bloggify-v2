<script setup>
defineProps({
  asset: {
    type: String,
    required: true
  }
})
</script>

<template>
  <figure class="
    absolute
    top-0
    left-0
    w-full
    h-screen
    opacity-30
  ">
    <video
      v-if="asset.includes('mp4')"
      loop
      muted
      autoplay
      class="
        w-full
        h-full
        object-cover
      "
    >
      <source :src="`../../public/videos/${asset}`" type="video/mp4">
    </video>

    <img
      v-else
      :src="`../../public/images/${asset}`"
      alt="background"
      class="
        w-full
        h-full
        object-cover
      "
    >
  </figure>
</template>
