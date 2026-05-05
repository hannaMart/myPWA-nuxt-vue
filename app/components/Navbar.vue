<template>
  <nav class="navbar navbar-light bg-light p-3">
    <div
      class="container-fluid d-flex justify-content-between align-items-center w-100"
    >
      <NuxtLink class="navbar-brand" to="/">Nuxt SSR</NuxtLink>

      <div class="d-flex gap-3">
        <NuxtLink exact-active-class="active" class="nav-link" to="/"
          >Home</NuxtLink
        >
        <NuxtLink active-class="active" class="nav-link" to="/about"
          >About</NuxtLink
        >
        <NuxtLink active-class="active" class="nav-link" to="/users"
          >Users</NuxtLink
        >
        <NuxtLink active-class="active" class="nav-link" to="/login"
          >Login</NuxtLink
        >
      </div>
    </div>
  </nav>
</template>
<style scoped>
.nav-link.active {
  font-weight: 700;
  color: #0d6efd;
  text-decoration: underline;
}
</style>
