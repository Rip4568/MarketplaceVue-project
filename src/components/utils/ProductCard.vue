<!-- configurar a estilização das imagens e o resto do card aqui -->

<style>
.card {
  overflow: hidden;
  background-color: rgba(240, 255, 255, 0.226);
  display: block;
}

.card-img-top {
  max-width: 300px;
  max-height: 161px;
  object-fit: cover;
  display: block;
}

.card-body {
  background-color: aliceblue;
}

.btn-add-cart {
  background-color: rgb(0, 255, 13);
  margin-left: 5px;
  margin-top: 5px;
}
</style>

<template>
  <div class="card text-white bg-primary">
    <img class="card-img-top" :src="item.picture" alt="">
    <div class="card-body">
      <h4 class="card-title">{{item.name}}</h4>
      <h4 class="card-text">{{item.price}}</h4>
      <div class="controllers">
        <button class="btn btn-success" v-on:click="incrementQuantity()">+</button>
        <input type="number" style="width: 50px" v-model="quantity">
        <button class="btn btn-danger" v-on:click="decrementQuantity()">-</button>
      </div>
      <button class="btn btn-add-cart" v-on:click="addToCart()">Add to Cart</button>
    </div>
  </div>
</template>

<script>
import { useCartStore } from '../../stores/useCartStore';
export default {
  props: {
    imageURL:String,
      name:String,
      summary:String,
      price:Number,
    item: {
      name:String,
      price:Number,
      id:String,
    }
  },

  setup(){
    const cart = useCartStore()
    return {
      cart,
    }
  },
  methods:{
    incrementQuantity() {
      this.quantity++;
    },
    decrementQuantity() {
      if (this.quantity > 0){
        this.quantity--;
      }
    },
    addToCart(){
      if (this.quantity > 0) {
        this.cart.addItemV2({...this.item, quantity:this.quantity})
        this.quantity = 0
      }
    }
  },

  data() {
    return {
      quantity: 0,
    }
  },

  name:'ProductCard'
}
</script>