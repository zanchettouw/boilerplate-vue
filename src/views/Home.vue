<template>
{{getPokemons}}
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { pokemonStore } from '@/store/pokemonStore';
const store = pokemonStore();

const getPokemons = computed(() => {
  return store.getPokemons
})

onMounted(async () => {
  await store.fetchPokemonList();
})
</script>