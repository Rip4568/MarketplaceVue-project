<!-- src/components/TheNavbar.vue -->
<style scoped>
.navbar {
  min-height: 70px;
  background-color: rgba(2, 29, 10, 0.4);
  width: 100%;
}

.link-logo {
  padding-left: 1rem;
  font-size: 30px;
  background: linear-gradient(to right, #12bcf0, #55e993);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.close {
  color: red;
}
/* .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  } */
.links {
  display: flex;
  margin-right: 1%;
  gap: 1rem;
}
.links a {
  display: flex;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
}

.cart-info .cart-items-detail-modal {
  padding: 10px 10px;
}

.cart-info .counter-items {
  position: absolute;
  display: flex;
  z-index: 1;
  right: 0;
  bottom: 15px;
  min-width: 12px;
  justify-content: center;
  border-radius: 30%;
  background-color: rgba(12, 139, 123, 0.534);
  border: 1px solid rgb(10, 4, 95);
  cursor: none;
  color: aliceblue;
}
.cart-info img {
  width: 30px;
  height: 30px;
}

.search-bar input {
  border: none;
  /* background-color: transparent; */
  outline: none;
  border-radius: 10px;
  border: none;
  color: rgb(4, 61, 61);
}

.search-bar input::placeholder {
  color: rgb(4, 61, 61);
}
.search-bar .search-icon {
  position: absolute;
  z-index: 1;
  color: darkblue;
  display: grid;
  margin-inline-start: 9rem;
  margin-block-start: 0.3rem;
  padding: 3px;
  cursor: pointer;
}

/* .modal-content {
  background-color: #93acff;
} */

.modal-content {
  background-color: rgb(20, 20, 20);
}

/* .modal-header {
  background-color: black;
}
.modal-body {
  background-color: black;
}

.modal-footer {
  background-color: black;
} */
.btn-close {
  background-color: tomato;
  color: aliceblue;
}

i {
  font-size: 20px;
}
</style>

<template>
  <nav class="navbar">
    <div class="container">
      <div class="logo">
        <a href="#Home" class="link-logo"> MasterMarketplace </a>
      </div>
      <div class="search-bar">
        <i><i class="fa fa-search search-icon" aria-hidden="true"></i></i>
        <input
          type="text"
          placeholder="Procure aqui..."
          name="search"
          class="search"
          id="search"
          v-model="products.text"
        />
      </div>
      <div class="cart-info" data-toggle="modal" data-target="#modelId">
        <span class="counter-items">{{ cart.items.length }}</span>
        <a href="#cart-items-detail-modal" class="cart-items-detail-modal"
          ><img
            src="https://cdn-icons-png.flaticon.com/512/8762/8762472.png"
            alt="cart icon flaticons blue"
        /></a>
      </div>
      <div class="links">
        <a target="_blank" href="https://github.com/Rip4568/MarketplaceVue-project/tree/master" class="github-link"
          ><i class="fa fa-github" aria-hidden="true"></i
        ></a>
        <a target="_blank" href="https://www.linkedin.com/in/jonathas-david-59334721b/"
          ><i class="fa fa-linkedin" aria-hidden="true"></i
        ></a>
      </div>
    </div>
  </nav>

  <!-- Modal -->
  <div
    class="modal fade"
    id="modelId"
    tabindex="-1"
    role="dialog"
    aria-labelledby="modelTitleId"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Items no carrinho ...</h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div
            class="card-product-summary"
            v-for="item in cart.items"
            v-bind:key="item.id">
            <h6>{{ item.name }}</h6>
            <h6>
              R${{ item.price }} x {{ item.quantity }} = R${{ total(item) }}    
              <button
                type="button"
                name=""
                id=""
                class="btn btn-danger btn-sm"
                v-on:click="cart.removeItem(item)">
                X
              </button>
            </h6>
            <hr />
          </div>
          <h3>Preço Total da compra: R${{ cart.totalPrice }}</h3>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-close" data-dismiss="modal">
            Close
          </button>
          <!-- <button type="button" class="btn btn-success">Proceed to Checkout</button> -->
          <RouterLink
            to="/checkout"
            class="btn btn-success"
            data-dismiss="modal"
            >Proceed to Checkout</RouterLink
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useCartStore } from "../stores/useCartStore";
import { useProductsStore } from "../stores/useProductsStore";
import { RouterLink } from "vue-router";
export default {
  components: {
    RouterLink,
  },
  setup() {
    const products = useProductsStore()
    const cart = useCartStore();
    return {
      cart,
      products,
    };
  },
  data() {
    return {
      textSearch: '',
    }
  },
  methods: {
    total(item) {
      return (item.price * item.quantity).toFixed(2);
    },
  },
  watch: {
  },
  computed: {},
  emits: {
    data: ''
  },
  name: "TheNavbar",
};
</script>
