<template>
  <section>
    <h1>Users Page</h1>
    <ul>
      <li v-for="user in 5" :key="user">
        <NuxtLink :to="`/users/${user}`"> User {{ user }} </NuxtLink>
      </li>
    </ul>
  </section>
</template>
