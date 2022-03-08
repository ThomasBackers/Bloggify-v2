<script setup>
defineProps({
  medias: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <h3 class="
    uppercase
    text-xs
    tracking-wider
    text-stone-400
    pb-0.5
  ">
    socials
  </h3>

  <ul class="pb-8">
    <li
      v-for="(media, i) of medias" 
      class="
        uppercase
        text-xs
        tracking-wider
        pb-0.5
      "
    >
      <a :href="media.href">
        {{ media.label }}
      </a>
    </li>
  </ul>
</template>
