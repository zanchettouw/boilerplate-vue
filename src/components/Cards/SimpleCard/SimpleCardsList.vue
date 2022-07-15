<template>
  <div id="cards-list" class="flex flex-col mb-16 items-center">
    <div class="sc-list-container">
      <SimpleCard
        v-for="(pokemon, index) in pokemons"
        :key="index"
        :pokemon-object="pokemon"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { pokemonStore } from '@/store/pokemonStore';
import SimpleCard from "./SimpleCard.vue";

const store = pokemonStore()

const pokemons = computed(() => {
  return store.getPokemons
})

</script>
