import axios from 'axios'
import { defineStore } from 'pinia'
import { Pokemon, Species } from '@/models/Pokemon'


export const pokemonStore = defineStore('pokemonStore', {
  state: () => {
    return {
      pokemonList: [] as Species[],
      pokemons: [] as Pokemon[],
      page: 1,
      size: 10
    }
  },
  getters: {
    getPokemonList (state) {
      return state.pokemonList
    },
    getPokemons (state) {
      return state.pokemons
    },
  },
  actions: {
    async fetchPokemonList () {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_BASE}/pokemon?limit=10`)
        this.pokemonList = response.data
      } catch (error) {
        console.log(error)
      }
    },
    async fetchPokemonDetails (pokemonID: number) {
      try {
        try {
          const response = await axios.get(`${import.meta.env.VITE_API_BASE}/pokemon?limit=-1`)
          this.pokemons = response.data
        } catch (error) {
          console.log(error)
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
})