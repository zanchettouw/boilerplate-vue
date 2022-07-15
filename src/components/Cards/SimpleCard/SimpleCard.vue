<template>
  <div
    class="sc-container hover:scale-105 ease-in-out duration-100 cursor-pointer border-b-4 border-gray-400 drop-shadow-lg select-none"
    :class="gradientBackground"
  >
    <div class="sc-number-type-container">
      <PokemonNumber :class="pokemonObject.id.toString().length > 4 && 'sm:text-3xl'">
        #{{ pokemonObject.id }}
      </PokemonNumber>

      <div class="sc-types-container">
        <PokemonType
          v-for="(type, index) in getTypes"
          :key="index"
          :type="type"
        />
      </div>
    </div>

    <PokemonPicture :pokemon-pict="getPicture" />

    <PokemonName
      :class="
        (pokemonObject.name.toString().length > 16 &&
          pokemonObject.name.toString().length < 19 &&
          'sm:text-lg') ||
        (pokemonObject.name.toString().length >= 19 && 'sm:text-base')
      "
      >{{ pokemonObject.name }}</PokemonName
    >
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import PokemonName from "./PokemonName.vue";
import PokemonNumber from "./PokemonNumber.vue";
import PokemonPicture from "./PokemonPicture.vue";
import PokemonType from "./PokemonType.vue";

const props = defineProps({
  pokemonObject: {
    type: Object,
    required: true,
    default: () => {},
  }
})

const getPicture = computed(() => {
  return props.pokemonObject.sprites.other['official-artwork']['front_default']
})

const getTypes = computed(() => {
  return props.pokemonObject.types.map((object: any) => object.type.name)
})

const gradientBackground = computed(() => {
  if (getTypes.value.length == 2) {
    return `bg-gradient-to-b back-from-${getTypes.value[0]} back-to-${getTypes.value[1]}`
  } else {
    return `back-color-${getTypes.value[0]}-dark`
  }
})
</script>
