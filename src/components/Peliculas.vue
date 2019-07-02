<template>
    <div id="Peliculas">
        Prueba de peliculas
        <div class="listadoPeliculas">
            <div class="pelicula" v-for="(pelicula, index) in peliculas" :key=index>
                <img :src=pelicula.image>
                <p>{{pelicula.title}}</p>
                <router-link :to="{ name: 'peliculaDetails', params: {id: pelicula._id}}">Revisa los detalles</router-link>
            </div>
        </div>
    </div>
</template>

<script>

  export default {
    name: 'Peliculas',
    data(){
      return{
        peliculas:[]
      }
    },
    mounted() {
        fetch('http://localhost:3000/movies')
            .then((data)=>  (data.json()))
          .then((res)=> this.peliculas = res)

    }
  }
</script>

<style>
    *{
        padding: 0 0;
        margin: 0 0;
    }
    .listadoPeliculas{
        display: grid;
        grid-gap: 10px;
        grid-template-columns: repeat(3, 250px);
        grid-auto-rows: auto;
        margin-left: auto;
        margin-right: auto;
    }
</style>
