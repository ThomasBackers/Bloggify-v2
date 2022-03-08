<script setup>
import { ref } from 'vue'
import FooterToggler from './FooterToggler.vue'
import Socials from './Socials.vue'
import Player from './Player.vue'

defineProps({
  appName: {
    type: String,
    required: true
  }
})

let isFooterOpen = false
const footerContainer = ref(null)

const handleFooter = () => {
  if (!isFooterOpen) {
    footerContainer.value.style.animation = 'footerAppear .2s ease-out forwards'
    isFooterOpen = !isFooterOpen
  } else if (isFooterOpen) {
    footerContainer.value.style.animation = 'footerDisappear .2s ease-out'
    isFooterOpen = !isFooterOpen
  }
}
</script>

<template>
  <FooterToggler @toggle="handleFooter" />

  <div
    ref="footerContainer"
    class="
      text-black
      fixed
      w-full
      bottom-0
      left-0
      flex
      overflow-y-hidden
      translate-y-[450px]
    "
  >
    <footer class="
      bg-stone-50
      text-stone-700
      flex
      flex-col
      w-3/4
      mx-auto
      mt-auto
      rounded-t-md
      text-center
      pb-24
      pt-3
      max-w-sm
      max-h-[482px]
    ">
      <Player />

      <Socials
        :medias="[
          { label: 'github', href: 'https://github.com/ThomasBackers'},
          { label: 'linkedin', href: 'https://www.linkedin.com/in/thomas-backers-54197621b/'}
        ]"
      />

      <p class="text-sm pb-1">
        &copy; {{ new Date().getFullYear() + ` ${appName}` }}
      </p>

      <p class="text-xs pb-1">
        Built by Thomas Backers
      </p>
    </footer>
  </div>
</template>

<style>
@keyframes footerAppear {
  0% {
    transform: translateY(450px);
    height: 482px;
  }
  100% {
    transform: translateY(0);
    height: 100vh;
  }
}

@keyframes footerDisappear {
  0% {
    transform: translateY(0);
    height: 100vh;
  }
  100% {
    transform: translateY(450px);
    height: 482px;
  }
}
</style>
