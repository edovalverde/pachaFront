<template>
  <HeaderComponent></HeaderComponent>
  <main class="main" v-if="showPage == 'button'">
    <button type="button" @click="showPage = 'form'">Agregar video</button>
  </main>
  <FormCreate v-else @emitCreateVideo1="emitCreateVideo2" @emitCancelCreate="emitCancel"></FormCreate>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FormCreate from "@/components/FormCreate.vue";

export default {
  components: {
    HeaderComponent,
    FormCreate
  },
  emits: ['emitCreateVideo2'],
  data() {
    return {
      showPage: 'button'
    };
  },
  methods: {
    emitCreateVideo2(newVideo) {
      this.showPage = 'listCards';
      this.$emit('emitCreateVideo2', newVideo);
    },
    emitCancel() {
      this.showPage = 'button'
    }
  }
};
</script>

<style scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: calc(100vh - 8.3rem);
}

.main button {
  background: #FF5252;
  color: #fff;
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 700;
  border: none;
  padding: 28px 42px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
}
</style>
