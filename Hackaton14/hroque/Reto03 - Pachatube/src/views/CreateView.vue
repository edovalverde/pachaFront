<template>
  <div class="grid grid-cols-1 h-[calc(100vh-68px)] justify-items-center content-center">
    <h2 class="text-3xl font-bold mb-4 text-left">Agregar video</h2>
    <hr class="text-white border-t-2 w-full">
    <form @submit.prevent="enviarDatos" class="relative mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 w-2/3">
      <input class="py-3 px-4 border-cyan-400 text-black" type="text" v-model="title" placeholder="Titulo del video" required>
      <input class="py-3 px-4 border-cyan-400 text-black" type="text" v-model="url" placeholder="Identificador del video o la url (Ejemplo: ccvBbckRffc)" required>
      <textarea class="md:col-span-2 p-4 resize-none text-black" v-model="description" cols="30" rows="10" placeholder="Descripcion del video" required></textarea>
      <div class="md:col-span-2 flex flex-col gap-2 md:gap-0 md:flex-row justify-evenly">
          <button type="submit" class="px-8 py-2 bg-[#FF5252] text-white">Agregar</button>
          <RouterLink to="/" class="">
            <button type="button" class="w-full px-8 py-2 bg-gray-300 text-black">Cancelar</button>
          </RouterLink>
      </div>
    </form>
  </div>
</template>
  
<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        title: '',
        url: '',
        description: ''
      };
    },
    methods: {
      enviarDatos() {
        const data = {
          title: this.title,
          url: this.url.slice(-11),
          description: this.description,
        };
        console.log(data);
        try {
          axios.post(import.meta.env.VITE_URL_API, data)
            .then(response => {
              // La solicitud fue exitosa, puedes manejar la respuesta aquí
              console.log(response.data);
              this.$router.push('/')
            })
            .catch(error => {
              // Ocurrió un error durante la solicitud, puedes manejar el error aquí
              console.error(error);
            });
        } catch (error) {
            this.$router.push('/')
            console.log('No hay nada que hacer aquí')
        }
      }
    }     
  }
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
