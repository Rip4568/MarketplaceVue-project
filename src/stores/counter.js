import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(3)
  const doubleCount = computed(() => count.value * 2 )
  
  function increment() {
    count.value++;
  }

  function decrement() {
    count.value--;
  }

  function value() {
    return count.value
  }

  return { count, doubleCount, increment, decrement }
})
