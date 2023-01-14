<script>
import { useCounterStore } from '/src/stores/counter.js'
const counter = useCounterStore()

export default {
  
}
</script>
<template>
  <div class="container about">
    <h1>Olá a todos!</h1>
    <h2>Me chamo <span class="name">Jonathas David</span> e este é um projeto de mercadinho contendo as principais funcionalidades, espero que goste :] </h2>
  </div>
</template>


<style scoped>
/* @media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
} */
.name {
  color: aliceblue;
}
</style>