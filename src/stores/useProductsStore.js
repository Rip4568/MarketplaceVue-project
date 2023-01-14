/* src/stores/useProcuctsStore.js */
import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useProcuctsStore = defineStore('products', () => {
  /* tornar o produtcsFech uma função para quando ser chamada
  atualizar os valores */
  const productsFetch = ref(fetch('http://localhost:3001/products')
  .then(response => response.json())
  .catch((reason) => { return `erro to fetch the api, ${reason}` })
  .then(data => { products.value = data;}))

  const products = ref(productsFetch)

  const text = ref('')

  const searchProduct = computed(() => {
    console.log(text.value);
    if (text.value.length > 0) {
      return products.value.filter(product => {
        return product.name.toLowerCase().includes(text.value.toLowerCase())
      })
    }
    return products.value
  })
  
  return { 
    products,
    searchProduct,
    text,
  }
})