<template>
  <HomeComponent v-if="arrayVideos.length == 0" @emitCreateVideo2="createVideo"></HomeComponent>
  <CrudComponent v-else :arrayVideos="arrayVideos" @emitDeleteVideo2="deleteVideo" @emitCreateVideo2="createVideo" @emitUpdateVideo2="updateVideo"></CrudComponent>
</template>

<script>
import HomeComponent from "@/components/HomeComponent.vue";
import CrudComponent from "@/components/CrudComponent.vue";

export default {
  name: 'App',
  components: {
    HomeComponent,
    CrudComponent
  },
  data() {
    return {
      arrayVideos: [],
      apiFake: 'http://localhost:3000/'
    };
  },
  mounted() {
    this.getVideos();
  },
  methods: {
    getVideos() {
      let endpoint = `videos/`
      fetch(`${this.apiFake}${endpoint}`, {
        method: 'GET'
      })
        .then(response => response.json())
        .then(data => {
          this.arrayVideos = data;
        })
        .catch(error => {
          console.error(`Error al traer los datos: ${error}`)
        });
    },
    async createVideo(newVideo) {
      let endpoint = `videos/`
      try {
        const response = await fetch(`${this.apiFake}${endpoint}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newVideo)
        });

        const data = await response.json();

        const getData = await this.getVideos();

        return {
          response,
          data,
          getData
        };
      } catch (error) {
        console.error(`Error al crear nuevo video: ${error}`);
      }
    },
    async updateVideo(updateVideo, index) {
      let endpoint = `videos/${index}`
      try {
        const response = await fetch(`${this.apiFake}${endpoint}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(updateVideo)
        });

        const data = await response.json();

        const getData = await this.getVideos();

        return {
          response,
          data,
          getData
        };
      } catch (error) {
        console.error(`Error al editar video: ${error}`);
      }
    },
    async deleteVideo(index) {
      let endpoint = `videos/${index}`
      try {
        const deleteData = await fetch(`${this.apiFake}${endpoint}`, {
          method: 'DELETE'
        });

        const getData = await this.getVideos();

        return {
          deleteData,
          getData
        };
      } catch (error) {
        console.log(`Error al eliminar el video: ${error}`);
      }
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  font-size: 62.5%;
}

body {
  font-family: 'Roboto', sans-serif;
}
</style>
