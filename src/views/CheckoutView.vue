<template>
  <div class="container">
    <h1>
      Pagina de checkout
    </h1>
    <div v-if="cart.items.length > 0">
      <table class="table">
        <thead>
          <tr>
            <th>produto</th>
            <th>preco</th>
            <th>quantidade</th>
            <th>total</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in cart.items" :key="item.id" >
            <td>{{ item.name }}</td>
            <td>R${{ item.price }}</td>
            <td class="quantity"><button class="btn btn-success btn-sm" v-on:click="cart.incrementQuantity(item)">+</button><input type="number" v-model="item.quantity"><button class="btn btn-warning btn-sm" v-on:click="cart.decrementQuantity(item)">-</button></td>
            <td>R${{ (item.price * item.quantity).toFixed(2) }} <button class="btn btn-danger" v-on:click="cart.removeItem(item)">x</button> </td>
          </tr>
        </tbody>
        <h2>Total da compra: R${{ cart.totalPrice }}</h2>
        <button v-bind:class="'btn btn-primary ' + (cart.items.length < 1 ? 'disabled':'')">finalizar compra</button>
      </table>
    </div>
    <div v-else>
      <h3>Não há itens no carrinho :(</h3>
    </div>
  </div>
</template>

<style scoped>
th, td {
  color: aliceblue;
}

input[type="number"]{
  width: 70px;
  top: 2px;
}

td .quantity {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

<script>
import { useCartStore } from '../stores/useCartStore';
export default {
  setup() {
    const cart = useCartStore()
    return {
      cart,
    }
  },
  data(){
    return {
      age: 'jonathas david'
    }
  },
  name: 'CheckouView'
}
</script>