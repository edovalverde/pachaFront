<template>
  <main class="main">
    <h2 class="main__title">Lista de videos</h2>
    <ul class="main__listCards">
      <li class="itemCard" v-for="video in arrayVideos" :key="video.id">
        <div class="editContainer" @click="emitFormUpdate(video.id)">
          <img src="../assets/edit.svg" alt="edit icon">
        </div>
        <div class="deleteContainer" @click="modalDeleteVideo(video.id)">
          <img src="../assets/delete.svg" alt="delete icon">
        </div>
        <div class="itemCard__videoContainer">
          <iframe :src="modifiedUrl(video.url)" :title="video.title" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        </div>
        <div class="itemCard__infoContainer">
          <h3 class="itemCard__title">{{ video.title }}</h3>
          <span class="itemCard__views">{{ viewsFormat(video.views) }} visualizaciones</span>
          <p class="itemCard__description">{{ video.description }}</p>
          <button class="itemCard__button"
            @click="emitDetails(video.title, video.url, video.description, video.views)">Ver Detalle</button>
        </div>
      </li>
    </ul>
  </main>

  <section v-if="showModalDelete" class="modalDelete">
    <form action="#" class="modalDelete__form" @submit.prevent="onSubmit">
      <div class="form__title">
        <h4>Eliminar video</h4>
        <img src="../assets/close.svg" alt="close" @click="showModalDelete = false">
      </div>
      <p class="form__question">¿Estas seguro que quieres eliminar este video?</p>
      <div class="form___buttonsContainer">
        <button type="button" class="btnDelete" @click="emitDeleteVideo1">Eliminar</button>
        <button type="button" class="btnCancel" @click="showModalDelete = false">Cancelar</button>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  props: {
    arrayVideos: Array
  },
  emits: ['emitDeleteVideo1', 'emitFormUpdate', 'emitDetails'],
  data() {
    return {
      showModalDelete: false,
      indexVideo: null
    };
  },
  methods: {
    modalDeleteVideo(index) {
      this.indexVideo = index;
      this.showModalDelete = true;
    },
    emitDeleteVideo1() {
      this.showModalDelete = false;
      this.$emit('emitDeleteVideo1', this.indexVideo);
    },
    emitFormUpdate(index) {
      this.$emit('emitFormUpdate', index);
    },
    emitDetails(title, url, description, views) {
      this.$emit('emitDetails', title, url, description, views);
    }
  },
  computed: {
    modifiedUrl() {
      return (url) => {
        return url.replace('/watch?v=', '/embed/');
      };
    },
    viewsFormat() {
      return (views) => {
        return views.toLocaleString();
      };
    }
  }
};
</script>

<style scoped>
.main {
  background-color: #fff;
  width: 100%;
  padding: 50px 0 100px;
}

.main__title {
  color: #000;
  font-size: 2.8rem;
  font-style: normal;
  font-weight: 700;
  margin-bottom: 36px;
  padding: 0 20px;
}

.main__listCards {
  display: flex;
  justify-content: center;
  flex-direction: row-reverse;
  flex-wrap: wrap-reverse;
  column-gap: 23px;
  row-gap: 20px;
  list-style: none;
}

.itemCard {
  position: relative;
  width: 100%;
  max-width: 255px;
  border: 1px solid #CFCFCF;
}

.itemCard:hover {
  border: 1px solid #FF5252;
  box-shadow: 0px 0px 8px rgba(146, 146, 146, 0.53);
}

.itemCard:hover .editContainer,
.itemCard:hover .deleteContainer {
  display: flex;
}

.itemCard__videoContainer {
  position: relative;
  overflow: hidden;
  padding-bottom: 56.25%;
}

.itemCard__videoContainer iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.itemCard__infoContainer {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  padding: 15px;
}

.itemCard__title {
  color: #000;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 700;
}

.itemCard__views {
  color: #303030;
  font-size: 1.1rem;
  font-style: normal;
  font-weight: 400;
}

.itemCard__description {
  color: #808080;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
}

.itemCard__button {
  background: #00C1AA;
  color: #fff;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 700;
  padding: 10px 0;
  border: none;
  cursor: pointer;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);
}

.editContainer,
.deleteContainer {
  background: #C4C4C4;
  display: none;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 18px;
  height: 18px;
  top: 8px;
  border-radius: 2px;
  z-index: 1;
  cursor: pointer;
}

.editContainer {
  left: 8px;
}

.deleteContainer {
  right: 8px;
}

.modalDelete {
  background: rgba(0, 0, 0, 0.3);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  top: 0;
  left: 0;
}

.modalDelete__form {
  background-color: #fff;
  width: 100%;
  max-width: 532px;
  padding: 20px 20px 50px;
  border: 1px solid #ABABAB;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
}

.form__title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  padding-bottom: 20px;
  border-bottom: 1px solid #A0A0A0;
}

.form__title h4 {
  color: #000;
  font-size: 2.2rem;
  font-style: normal;
  font-weight: 700;
}

.form__title img {
  width: 12px;
  height: 26px;
  cursor: pointer;
}

.form__question {
  color: #808080;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  text-align: center;
  margin-bottom: 35px;
}

.form___buttonsContainer {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
}

.form___buttonsContainer button {
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  padding: 12px 35px;
  border: none;
  cursor: pointer;
}

.btnDelete {
  background: #FF5252;
  color: #fff;
}

.btnCancel {
  background: #C4C4C4;
  color: #000;
}
</style>
