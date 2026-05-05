<script setup>
definePageMeta({
  validate: (route) => /^\d+$/.test(route.params.id),
});

const route = useRoute();

const {
  data: user,
  pending,
  error,
} = await useFetch(`/api/users/${route.params.id}`);
</script>
