<!-- src/views/HomeView.vue -->
<script>
import TheWelcome from "../components/TheWelcome.vue";
import { useCounterStore } from "/src/stores/counter.js";
import ProductCard from "../components/utils/ProductCard.vue";
import { useCartStore } from "../stores/useCartStore";
import { useProductsStore } from "../stores/useProductsStore";

export default {
  setup() {
    const counter = useCounterStore();
    const cart = useCartStore();
    const products = useProductsStore();
    const productsTemp = products;
    return {
      counter,
      cart,
      products,
    };
  },
  data() {
    return {
      itemsData: [],
      textSearch: "",
    };
  },
  methods: {},
  watch: {},
  mounted() {},
  computed: {
    filteredProducts() {
      if (this.products.text.length > 0) {
        return this.products.products.filter((product) =>
          product.name.toLowerCase().includes(this.products.text.toLowerCase())
        );
      } else {
        return this.products.products;
      }
    },
  },
  components: {
    useCounterStore,
    ProductCard,
    TheWelcome,
  },
};
</script>

<template>
  <main class="container">
    <div>
      <h1>Pagina Principal</h1>
    </div>
    <div class="items">
      <div
        v-for="item in filteredProducts"
        v-bind:key="item.id"
        :class="'item item-' + item.id"
      >
        <ProductCard :item="item" />
      </div>
    </div>
    <!-- <div class="items" v-for="item in cart.items"
     v-bind:key="item.id">
      <ProductCard v-bind:item="item"/>
    </div> -->
  </main>
</template>

<style scoped>
.items {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}
</style>
