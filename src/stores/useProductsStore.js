/* src/stores/useProcuctsStore.js */
import { defineStore } from "pinia";
import { ref, computed, watch } from "vue";

export const useProductsStore = defineStore('products', () => {
  /* tornar o produtcsFech uma função para quando ser chamada
  atualizar os valores */
  
  const productsFetch = () => ref(fetch('http://localhost:3001/products')
  .then(response => response.json())
  .catch((reason) => { return `erro to fetch the api, ${reason}` })
  .then(data => { products.value = data;}))

  let products = ref([])
  if(localStorage.getItem('products')) {
    products = ref(JSON.parse(localStorage.getItem('products')))
  } else {
    products = ref(productsFetch())
  }

  /* const products = ref(JSON.parse(localStorage.getItem('cart'))
  || productsFetch()) */
  
  watch(products, () => {
    localStorage.setItem('products', JSON.stringify(products.value))
  }, {deep:true})
  //const products = ref(productsFetch())
  
  const text = ref('')
  
  return { 
    products,
    text,
  }
})