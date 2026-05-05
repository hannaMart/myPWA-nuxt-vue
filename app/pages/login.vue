<script setup>
definePageMeta({
  layout: "empty",
});
</script>
<template>
  <section class="container p-3">
    <h1>Login page</h1>
    <form>
      <div class="form-group">
        <input type="text" class="form-controll" />
      </div>
      <p><NuxtLink to="/users">Back to Users</NuxtLink></p>
      <button class="btn btn-primary" type="submit">Login</button>
    </form>
  </section>
</template>
<style scoped>
section {
  margin: 0 auto;
  max-width: 400px;
  border-radius: 5px;
  border: 1px solid black;
}
</style>
