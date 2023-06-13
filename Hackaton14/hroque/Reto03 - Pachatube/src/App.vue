<script>
  import { RouterLink, RouterView } from 'vue-router'
  import Navbar from './components/Navbar.vue';
  export default {
    data() {
      return {
        mostrarBtnNav: false
      }
    },
    components: {
      Navbar
    },
    methods: {
      toggleEstado() {
        this.mostrarBtnNav = true;
      }
    }
  }
</script>

<template>
  <header>
    <Navbar :mostrar="mostrarBtnNav" />
  </header>

  <RouterView :toggle="toggleEstado" />
</template>

<style scoped>

</style>
