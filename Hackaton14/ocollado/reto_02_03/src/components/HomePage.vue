<template>
  <header-page :titulo=titulo @abrir-modal="openModalVideo"></header-page>
  <main-page @abrir-modal="openModalVideo"></main-page>
  <modal-video-page ref="modalVideoPage"></modal-video-page>
</template>
<script>

import HeaderPage from '../components/pages/contenido-page/HeaderPage.vue';
import MainPage from '../components/pages/contenido-page/MainPage.vue';
import ModalVideoPage from '../components/pages/video-page/ModalVideoPage.vue';

export default {
  name: 'HomePage',
  components: {
    HeaderPage,
    MainPage,
    ModalVideoPage
  },
  data() {
    return {
      titulo: "VIDEO PACHA TV"
    }
  },
  methods: {
    openModalVideo(tipoModal) {
      switch (tipoModal) {
        case 'nuevo':
          this.$refs.modalVideoPage.show();
          break;
        case 'editar':
          this.$refs.modalVideoPage.show();
          break;
        case 'eliminar':
          break;
      }
    }
  }
}
</script>
<style lang="scss"></style>