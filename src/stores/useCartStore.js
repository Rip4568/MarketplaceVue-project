import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
  const items = ref(JSON.parse(localStorage.getItem('cart')) || [])

  watch(items, () => {
    localStorage.setItem('cart', JSON.stringify(items.value))
  },{deep:true});

  // const items = ref([
  //   /* {name:'coca cola',price:2.3,quantity:2,id:'abc'},
  //   {name:'pepsi',price:5.5,quantity:7,id:'xyz'},
  //   {name:'pepsi',price:5.5,quantity:0,id:'zbx'}, */
  // ].filter(item => item.quantity > 0))
  /* ItemsCart tera varios items, porem com suas respectivas
  quantidade */

  /* a função abaixo so serve se não tiver quantidade */
  const total = computed(() => items.value.reduce(
    (acc, item) => acc + item.price, 0)
  )

  const totalPrice = computed(
    () => items.value.reduce(
      (acc, item) => acc + (item.price * item.quantity),0
    ).toFixed(2)
  )

  function addItem(newitem) {
    items.value.push(newitem)
  }

  function addItemV2(item) {
    items.value.find(i => {
      if(i.id === item.id) {
        i.quantity += item.quantity
        return true
      }
    })
    
    items.value.push(item)
    
  }

  function removeItem(item) {
    items.value = items.value.filter(
      i => i.id !== item.id)
  }

  function incrementQuantity(item) {
    const existingItem = items.value.find(
      i => i.id === item.id)
    if (existingItem) {
      existingItem.quantity++
    } else {
      items.value.push({ ...item, quantity: 1 })
    }
  }

  function decrementQuantity(item) {
      const existingItem = items.value.find(
        i => i.id === item.id)
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity--
        } else {
          items.value = items.value.filter(
            i => i.id !== item.id)
        }
      }
    }

    function viewItems(limit){
      return items.value.slice(0,limit)
    }

  return { 
    items, 
    total, 
    addItem, 
    removeItem, 
    incrementQuantity, 
    decrementQuantity, 
    addItemV2, 
    totalPrice
  }
})