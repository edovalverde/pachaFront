<template>
  <HeaderComponent>
    <template #header-options>
      <div class="header__buttons">
        <button v-if="showMap" @click="showPage = 'listCards', showMap = false, showAdd = true">
          Ver mapa
        </button>
        <button v-if="showAdd" @click="showPage = 'formCreate', showAdd = false, showMap = true">
          Agregar video
        </button>
      </div>
    </template>
  </HeaderComponent>
  <ListCards v-if="showPage == 'listCards'" :arrayVideos="arrayVideos" @emitDeleteVideo1="emitDeleteVideo2"
    @emitFormUpdate="formUpdate" @emitDetails="showDetails"></ListCards>
  <FormCreate v-else-if="showPage == 'formCreate'" @emitCreateVideo1="emitCreateVideo2" @emitCancelCreate="emitCancel">
  </FormCreate>
  <FormUpdate v-else-if="showPage == 'formUpdate'" :editVideo="editVideo" @emitUpdateVideo1="emitUpdateVideo2" @emitCancelUpdate="emitCancel"></FormUpdate>
  <VideoDetails v-else-if="showPage == 'videoDetails'" :detailsVideo="detailsVideo"></VideoDetails>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import ListCards from "@/components/ListCards.vue";
import FormCreate from "@/components/FormCreate.vue";
import FormUpdate from "@/components/FormUpdate.vue";
import VideoDetails from "@/components/VideoDetails.vue";

export default {
  props: {
    arrayVideos: Array
  },
  components: {
    HeaderComponent,
    ListCards,
    FormCreate,
    FormUpdate,
    VideoDetails
  },
  emits: ['emitDeleteVideo2', 'emitCreateVideo2', 'emitUpdateVideo2'],
  data() {
    return {
      showMap: false,
      showAdd: true,
      showPage: 'listCards',
      editVideo: {
        title: '',
        url: '',
        description: '',
        views: 0
      },
      idUpdate: 0,
      detailsVideo: []
    };
  },
  methods: {
    emitDeleteVideo2(index) {
      this.$emit('emitDeleteVideo2', index);
    },
    emitCreateVideo2(newVideo) {
      this.showAdd = true;
      this.showMap = false;
      this.showPage = 'listCards';
      this.$emit('emitCreateVideo2', newVideo);
    },
    emitCancel() {
      this.showAdd = true;
      this.showMap = false;
      this.showPage = 'listCards';
    },
    formUpdate(index) {
      this.showAdd = false;
      this.showMap = true;
      this.idUpdate = index;
      const foundObject = this.arrayVideos.find(object => object.id === index);
      this.editVideo.title = foundObject.title;
      this.editVideo.url = foundObject.url;
      this.editVideo.description = foundObject.description;
      this.editVideo.views = foundObject.views;
      this.showPage = 'formUpdate';
    },
    emitUpdateVideo2(updateVideo) {
      this.showAdd = true;
      this.showMap = false;
      this.showPage = 'listCards';
      this.$emit('emitUpdateVideo2', updateVideo, this.idUpdate);
    },
    showDetails(title, url, description, views) {
      this.showAdd = true;
      this.showMap = true;
      this.detailsVideo = [title, url, description, views]
      this.showPage = 'videoDetails';
    }
  }
};
</script>

<style scoped>
.header__buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
}

.header__buttons button {
  background-color: #FF5252;
  color: #fff;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 700;
  border: none;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
}
</style>
