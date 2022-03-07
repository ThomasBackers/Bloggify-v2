<template>
  <header>
    <h1 class="hidden">
      Bloggify
    </h1>

    <router-link :to="{ name: 'home' }">
      <img
        src="/logo.svg"
        alt="bloggify logo"
        class="w-32"
      >
    </router-link>
  </header>  
</template>
