<template>
  <main class="container-auto-center">
    <h1>teste</h1>
    <SimpleCardsList />
  </main>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import SimpleCardsList from '@/components/Cards/SimpleCard/SimpleCardsList.vue'
import { pokemonStore } from '@/store/pokemonStore'

const store = pokemonStore()

onMounted(async () => {
  await store.fetchPokemonList()
  await store.fetchPokemonDetails()
})
</script>