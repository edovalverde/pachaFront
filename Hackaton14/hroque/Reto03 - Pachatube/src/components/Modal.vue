<template>
  <button @onclick="open" type="button" class="bg-green-500 py-1 px-3 rounded">Modal</button>
  <div id="modal" class="modal" v-if="open">
    <div class="h-full w-full top-0 left-0 absolute bg-black/70"></div>
    <div class="h-full flex justify-center items-center relative">
      <div class="rounded flex w-2/4 flex-col justify-center items-center bg-white text-black border-2 border-gray-400 h-auto z-50">
        <div class="flex flex-row w-full justify-between items-center border-b border-gray-300 p-6">
          <h3 class="font-bold text-lg">Modal title</h3>
          <div @onclick="open">
            <svg class="fill-gray-500 cursor-pointer" width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#808080"><path d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243" stroke="#808080" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          </div>
        </div>
        <div class="text-base border-b border-gray-300 p-6 w-full">
          <p>Modal body text goes here</p>
        </div>
        <div class="flex flex-col md:flex-row justify-end gap-2 md:gap-8 p-3 w-full text-white">
          <button @onclick="open" class="bg-gray-500 py-2 px-4 rounded">Cancel</button>
          <button @onclick="" class="bg-blue-500 py-2 px-4 rounded">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'

  export default {
    name: 'Modal',
    props: {
      id: {
          type: Number,
          required: false
      },
    },
    methods: {
      eliminarDato(idVideo) {
        axios.delete(`${import.meta.env.VITE_URL_API}${idVideo}`)
          .then(response => {
            // La solicitud de eliminación fue exitosa, puedes manejar la respuesta aquí
            console.log(response.data);
          })
          .catch(error => {
            // Ocurrió un error durante la solicitud de eliminación, puedes manejar el error aquí
            console.error(error);
          });
      }
    }
  }
</script>
<style scoped>
  
</style>

<!-- @click="`eliminarDato(${id})`" -->