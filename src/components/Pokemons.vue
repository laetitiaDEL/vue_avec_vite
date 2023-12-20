<template>
    <div class="d-flex">
        <div v-for="(pokemon, index) in pokeList">
            <Pokemon :pokemon="pokemon"></Pokemon>
        </div>
    </div>
    <div>{{console.log(pokeList) }}</div>
</template>

<script>
import Pokemon from "./Pokemon.vue";
export default{
    name: 'Pokemons',
    components: {Pokemon},
    data(){
        return{
            pokeList: null
        }
    },
    created() {
    fetch("https://pokebuildapi.fr/api/v1/pokemon/limit/20")
      .then(response => response.json())
      .then(data => (this.pokeList = data))
      .catch((e)=>(console.log(e)))
    },
}
</script>