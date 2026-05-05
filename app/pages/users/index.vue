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
const deleteUser = async (id) => {
  await $fetch(`/api/users/${id}`, {
    method: "DELETE",
  });

  await refresh();
};
</script>

<template>
  <section class="container py-4">
    <h1 class="mb-4">Users</h1>

    <form class="row g-2 mb-4" @submit.prevent="addUser">
      <div class="col-md-5">
        <input v-model="name" class="form-control" placeholder="Name" />
      </div>

      <div class="col-md-5">
        <input v-model="email" class="form-control" placeholder="Email" />
      </div>

      <div class="col-md-2">
        <button class="btn btn-primary w-100" type="submit">Add</button>
      </div>
    </form>

    <p v-if="pending">Loading...</p>
    <p v-else-if="error" class="text-danger">Error loading users</p>

    <ul v-else class="list-group">
      <li
        v-for="user in users"
        :key="user.id"
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        <div>
          <NuxtLink
            :to="`/users/${user.id}`"
            class="fw-bold text-decoration-none"
          >
            {{ user.name }}
          </NuxtLink>
          <div class="text-muted small">{{ user.email }}</div>
        </div>

        <button
          class="btn btn-outline-danger btn-sm"
          @click="deleteUser(user.id)"
        >
          Delete
        </button>
      </li>
    </ul>
  </section>
</template>
