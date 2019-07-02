<template>
    <div class="principal">

    <h1>Cinema IronHack</h1>
    <button><router-link to="/peliculas">Check the movies!</router-link></button>
    </div>
</template>

<script>
  export default {
    name: "Principal.vue"
  }
</script>

<style scoped>
    .principal{
        background: url("../assets/cinema.jpg") no-repeat;
        background-size: 1000px 668px;
        height: 100vh;
    }
</style>
