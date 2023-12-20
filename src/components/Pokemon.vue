<template>
        <p class="text-center">{{ pokemon.name }}</p>
        <img :src="pokemon.image" height="150" width="150">
</template>

<script>
export default{
    name: 'Pokemon',
    data(){
        return{
            pokemon: {}
        }
    }
}

</script>