<!-- App.vue -->

<template>
  <div>
    <!-- fazer a animação da alteração de links -->
    <TheNavbar />
    <div class="router-links" ref="router-links">
      <RouterLink to="/" class="router router-home">Home</RouterLink>
      <RouterLink to="/checkout" class="router router-about">Checkout</RouterLink>
      <RouterLink to="/about" class="router router-about">About</RouterLink>
    </div>
    <RouterView />
  </div>
</template>

<style scoped>
.router-links {
  display: flex;
  justify-content: space-evenly;
}

.router-links .router {
  text-decoration: none;
  color: rgb(8, 209, 149);
  font-weight: 700;
  border: 1px solid aqua;
  padding: 5px 30px;
  /* background-color: rgba(0, 255, 255, 0.192); */
  border-radius: 10px;
}

.router-links .router:active:focus {
  box-shadow: 10px 10px 20px greenyellow;
}

.router-links .router.active {
  background-color: rgba(30, 153, 36, 0.685);
}

</style>

<script>
import TheNavbar from "./components/TheNavbar.vue";
import { RouterLink, RouterView } from "vue-router";

export default {
  methods:{
    
  },
  components: {
    TheNavbar
  }
}
</script>
