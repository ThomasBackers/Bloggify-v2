<script setup>
import FooterToggler from './FooterToggler.vue'

defineProps({
  appName: {
    type: String,
    required: true
  }
})

const handleFooter = () => {
  console.log('it works!')
}
</script>

<template>
  <FooterToggler @toggle="handleFooter" />

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
      text-stone-700
      flex
      flex-col
      w-3/4
      mx-auto
      rounded-t-md
      text-center
      pb-24
      pt-12
    ">
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
        <li class="
          uppercase
          text-xs
          tracking-wider
          pb-0.5
        ">
          <a href="https://github.com/ThomasBackers">
            github
          </a>
        </li>

        <li class="
          uppercase
          text-xs
          tracking-wider
        ">
          <a href="https://www.linkedin.com/in/thomas-backers-54197621b/">
            linkedin
          </a>
        </li>
      </ul>

      <p class="text-sm pb-1">
        &copy; {{ new Date().getFullYear() + ` ${appName}` }}
      </p>

      <p class="text-xs pb-1">
        Built by Thomas Backers
      </p>
    </footer>
  </div>
</template>
