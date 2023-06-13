<template>
  <main class="flex flex-col justify-center items-center p-8" :class="{ 'h-[calc(100vh-68px)]': videos.length === 0}">
    <Loading v-if="loading" />
    <h2 class="self-start text-4xl mb-4" v-if="videos.length !== 0">Lista de videos</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card v-for="video in videos" :id="video.id" :key="video.id" :title="video.title" :url="video.url" :description="video.description" @custom-event="abrirModalEliminar"/>
    </div>
    <RouterLink v-if="videos.length === 0 & !loading" to="/crear">
      <button class="px-5 py-2 bg-[#FF5252] text-white font-bold">Crear Video</button>
    </RouterLink>
  </main>
  <!-- Modal para confirmar eliminación -->
  <div v-if="mostrarModal" class="modal">
    <div class="h-full w-full top-0 left-0 absolute bg-black/70"></div>
    <div class="h-full flex justify-center items-center relative">
      <div class="rounded flex w-2/4 flex-col justify-center items-center bg-white text-black border-2 border-white h-auto z-50 py-8">
        <p class="mb-4 px-6 text-center">¿Estás seguro de que deseas eliminar este dato?</p>
        <div class="flex flex-col items-center gap-2 md:flex-row justify-evenly w-full">
          <button class="px-8 py-2 bg-red-600 text-white font-bold w-32" @click="confirmarEliminacion">Aceptar</button>
          <button class="px-8 py-2 bg-gray-300 text-black font-bold w-32" @click="cancelarEliminacion">Cancelar</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .modal {
      position: fixed;
      z-index: 1;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
</style>
<script>
  import axios from 'axios'
  import Card from '../components/Card.vue';
  import Loading from '../components/Loading.vue';
  export default {
    components: {
      Card,
      Loading
    },
    props: {
      toggle: {
        type: Function,
        required: true
      }
    },
    data() {
      return {
        videos: [],
        eliminarId: null, // ID del elemento a eliminar
        mostrarModal: false, // Controla la hidden del modal
        loading: true,
      };
    },
    created() {
      this.cargarDatos();
      
    },
    methods: {
      cargarDatos() {
        axios.get(`${import.meta.env.VITE_URL_API}`)
            .then(response => {
            // Cargar los datos existentes en las propiedades de datos de Vue
            console.log(response.data);
            this.videos = response.data;
            this.loading = false;
            if(this.videos.length !== 0){
              this.toggle()
            }
        })
            .catch(error => {
              this.loading = false;
              console.error(error);
        });
      },
      eliminarDato(idVideo) {
        axios.delete(`${import.meta.env.VITE_URL_API}${idVideo}`)
          .then(response => {
            console.log(response.data);
            console.log(this.eliminarId);
            this.videos = this.videos.filter(video => video.id !== idVideo);
          })
          .catch(error => {
            console.error(error);
          });
      },
      abrirModalEliminar(id) {
        this.eliminarId = id;
        this.mostrarModal = true;
      },
      cancelarEliminacion() {
        this.eliminarId = null;
        this.mostrarModal = false;
      },
      confirmarEliminacion() {
        this.eliminarDato(this.eliminarId);
        this.eliminarId = null;
        this.mostrarModal = false;
      }
    },
};
</script>