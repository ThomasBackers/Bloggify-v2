<template>
  <header>
    <h1 class="hidden">
      Bloggify
    </h1>

    <router-link :to="{ name: 'home' }">
      <img
        src="../../public/logo.svg"
        alt="bloggify logo"
        class="w-28"
      >
    </router-link>
  </header>  
</template>
