<template>
    <div>
        <router-link :to="{ name: 'listadoPeliculas'}">Regresar</router-link>
        <img :src=pelicula.image>

    </div>
</template>

<script>

  export default {
    name: 'peliculaDetails',
    props: ['id'],
    data(){
      return{
        pelicula:{}
      }
    },
    mounted() {
      let vm = this
      fetch('http://localhost:3000/movies/'+vm.id)
        .then((data)=>  (data.json()))
        .then((res)=> this.pelicula = res)

    }
  }
</script>

<style>
    *{
        padding: 0 0;
        margin: 0 0;
    }

</style>
