<template>
  <nav class="navbar navbar-light bg-light p-3">
    <div
      class="container-fluid d-flex justify-content-between align-items-center w-100"
    >
      <NuxtLink class="navbar-brand" to="/">Nuxt SSR</NuxtLink>

      <div class="d-flex gap-3">
        <NuxtLink class="nav-link" to="/">Home</NuxtLink>
        <NuxtLink class="nav-link" to="/about">About</NuxtLink>
      </div>
    </div>
  </nav>
</template>
