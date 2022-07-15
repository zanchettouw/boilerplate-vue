<template>
  <img class="sc-picture-wrapper" :src="pokemonPict" />
</template>

<script setup lang="ts">
const props = defineProps({
  pokemonPict: {
    type: String,
    required: true,
    default: "",
  },
})
</script>
