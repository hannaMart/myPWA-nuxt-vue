<script setup>
const { data: users, pending, error, refresh } = await useFetch("/api/users");

const name = ref("");
const email = ref("");

const addUser = async () => {
  if (!name.value || !email.value) return;

  await $fetch("/api/users", {
    method: "POST",
    body: {
      name: name.value,
      email: email.value,
    },
  });

  name.value = "";
  email.value = "";

  await refresh();
};
</script>

<template>
  <section>
    <h1>Users Page</h1>

    <form @submit.prevent="addUser">
      <input v-model="name" placeholder="Name" />
      <input v-model="email" placeholder="Email" />
      <button type="submit">Add user</button>
    </form>

    <p v-if="pending">Loading...</p>
    <p v-else-if="error">Error loading users</p>

    <ul v-else>
      <li v-for="user in users" :key="user.id">
        <NuxtLink :to="`/users/${user.id}`">
          {{ user.name }} — {{ user.email }}
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>
