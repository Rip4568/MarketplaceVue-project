<!-- layouts/default.vue -->
<template>
  <div>
    <navbar></navbar>
    <div class="container">
    </div>
  </div>
</template>

<script>
export default {
  components: {
    TheNavbar: () => import('~/components/TheNavbar.vue')
  }
}
</script>

<style>

</style>