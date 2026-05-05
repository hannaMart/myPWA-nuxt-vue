<template>
  <NuxtLayout name="empty">
    <section>
      <h1>Error</h1>
      <NuxtLink to="/users">Back to Users</NuxtLink>
    </section>
  </NuxtLayout>
</template>

<style scoped>
section {
  width: 600px;
  margin: 0 auto;
}

h1 {
  color: red;
}
</style>
