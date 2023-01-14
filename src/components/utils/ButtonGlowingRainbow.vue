<style scoped>
* {
  outline: 0;
  box-sizing: border-box;
}
.button-glowing {
  color: black;
  cursor: pointer;
  position: relative;
  padding: 22px 46px;
  color: #fff;
  background: rgba(255, 255, 255, .1);
  border: 3px solid rgba(255, 255, 255, .2);
  border-radius: 18px;
  transition: .4s;
}

.button-glowing:hover {
  z-index: 1;
  border-color: transparent;
  background: linear-gradient(
    90deg,
    #f9d923,
    #00a19d,
    #0c87b7,
    #ff6666,
    #f9d923
  );
  background-size: 400%;
  box-shadow: 0 0 15px rgb(2, 2, 24);
  /* opacity: 0; */ /* causando sumiço do botão */
  transition: .4s ease-out;
  animation: glow 12s linear forwards;
}

@keyframes glow {
  from {
    background-position: 0%;
  }

  to {
    background-position: 400%;
  }
}

.button-glowing::before {
  content: '';
  position: absolute;
  top: -1px;
  right: -1px;
  bottom: -1px;
  left: -1px;
  background: inherit;
  filter: blur(12px);
  z-index: -1;
}

.button-glowing:hover::before {
  opacity: 1;
  z-index: -1;
}
</style>

<template>
  <button 
  class="button-glowing" 
  >
  {{text}}
  </button>
</template>

<script>
export default {
  data() {
    return {
      nome: 'jonathas David'
    }
  },
  props: {
    glowing: {
      type: Boolean,
      default: true
    },
    text: {
      type: String,
      default: 'Hover to see the magic'
    }
  },
  methods: {

  },
  computed: {
    
  },
  name:'ButtonGlowingRainbow'
}
</script>