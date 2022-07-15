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
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=-1')
        this.pokemonList = response.data.results
      } catch (error) {
        console.log(error)
      }
    },
    async fetchPokemonDetails () {
      this.pokemons = []
      this.pokemonList.map(async (pokemon) => {
        const response = await axios.get(`${pokemon.url}`)
        this.pokemons.push(response.data)
      })
    }
  }
})