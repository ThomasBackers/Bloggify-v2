<script setup>
import FooterToggler from './FooterToggler.vue'

defineProps({
  appName: {
    type: String,
    required: true
  }
})
</script>

<template>
  <FooterToggler />

  <div class="
    text-black
    fixed
    w-full
    bottom-0
    left-0
    flex
    overflow-y-hidden
  ">

    <footer class="
      bg-stone-50
      flex
      flex-col
      w-3/4
      mx-auto
      rounded-t-md
      text-center
      pb-24
      pt-12
    ">
      <p class="text-sm pb-1">
        &copy; {{ new Date().getFullYear() + ` ${appName}` }}
      </p>

      <p class="text-xs pb-1">
        Built by Thomas Backers
      </p>
    </footer>
  </div>
</template>
