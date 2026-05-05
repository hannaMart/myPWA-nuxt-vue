<script setup>
definePageMeta({
  validate: (route) => {
    return /^\d+$/.test(route.params.id);
  },
});
</script>
<template>
  <section>
    <h1>User {{ $route.params.id }}</h1>
    <NuxtLink to="/users">Back to Users</NuxtLink>
  </section>
</template>
