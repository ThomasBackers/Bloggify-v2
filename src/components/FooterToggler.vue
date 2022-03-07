<script setup>
import { ChevronUpIcon } from '@heroicons/vue/solid'

const emit = defineEmits(['toggle'])

const handleToggler = () => {
  emit('toggle')
}
// bg-stone-400
// opacity-30
</script>

<template>
  <button
    class="
      rounded-full
      bg-black
      text-white
      p-3
      fixed
      bottom-10
      left-1/2
      -ml-[26px]
      z-[1]
    "
    @click="handleToggler"
  >
    <ChevronUpIcon class="w-7" />
  </button>
</template>
