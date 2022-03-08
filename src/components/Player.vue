<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { RewindIcon } from '@heroicons/vue/solid'
import { SwitchVerticalIcon } from '@heroicons/vue/solid'
import { FastForwardIcon } from '@heroicons/vue/solid'

const store = useStore()
const playlist = computed(() => store.getters.getPlaylist)

console.log(playlist.value[0])
</script>

<template>
  <h3 class="
    uppercase
    text-xs
    tracking-wider
    text-stone-400
    pb-2
  ">
    player
  </h3>

  <figure class="
    bg-black
    w-4/5
    h-40
    mx-auto
    rounded-md
    overflow-hidden
  ">
  </figure>

  <div class="
    flex
    justify-center
    py-2.5
  ">
    <button
      type="button"
      class=""
    >
      <RewindIcon class="
        w-10
        text-black
      " />
    </button>
    
    <button
      type="button"
      class="mx-[4%]"
    >
      <SwitchVerticalIcon class="
        w-7
        text-red-600
      " />
    </button>
    
    <button
      type="button"
      class=""
    >
      <FastForwardIcon class="
        w-10
        text-black
      " />
    </button>
  </div>
</template>
