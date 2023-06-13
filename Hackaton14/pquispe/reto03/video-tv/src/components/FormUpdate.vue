<template>
  <main class="main">
    <form action="#" class="modalDelete__form" @submit.prevent="onSubmit">
      <h4 class="form__title">Editar video</h4>
      <div class="form__inputsContainer">
        <input type="text" id="title" name="title" placeholder="Titulo" autocomplete="off" :value="editVideo.title" required>
        <input type="text" id="url" name="url" placeholder="url-video" autocomplete="off" pattern="^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-.\/?%&=]*)?$" title="Por favor, ingrese un enlace válido. Ejemplo: https://www.example.com" required :value="editVideo.url">
      </div>
      <textarea name="description" id="description" rows="6" placeholder="Descripcion" autocomplete="off" required
        :value="editVideo.description"></textarea>
      <div class="form___buttonsContainer">
        <button type="button" class="btnEdit" @click="emitUpdateVideo1">Guardar</button>
        <button type="button" class="btnCancel" @click="emitCancelUpdate">Cancelar</button>
      </div>
    </form>
  </main>
</template>

<script>
export default {
  props: {
    editVideo: Object
  },
  emits: ['emitUpdateVideo1', 'emitCancelUpdate'],
  data() {
    return {
      updateVideo: {
        title: '',
        url: '',
        description: '',
        views: 0
      }
    }
  },
  methods: {
    emitUpdateVideo1() {
      this.updateVideo.title = document.getElementById('title').value;
      this.updateVideo.url = document.getElementById('url').value;
      this.updateVideo.description = document.getElementById('description').value;
      this.updateVideo.views = this.editVideo.views;

      if (this.updateVideo.title != '' && this.updateVideo.url.startsWith("https://www.") && this.updateVideo.description != '') {
        this.$emit('emitUpdateVideo1', this.updateVideo);
        document.getElementById('title').value = '';
        document.getElementById('url').value = '';
        document.getElementById('description').value = '';
      }
    },
    emitCancelUpdate() {
      this.$emit('emitCancelUpdate');
      document.getElementById('title').value = '';
      document.getElementById('url').value = '';
      document.getElementById('description').value = '';
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

.modalDelete__form {
  background-color: #fff;
  width: 100%;
  max-width: 625px;
  padding: 20px;
}

.form__title {
  color: #000;
  font-size: 2.2rem;
  font-style: normal;
  font-weight: 700;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid #A0A0A0;
}

.form__inputsContainer {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 25px;
}

.form__inputsContainer input {
  font-family: 'Roboto', sans-serif;
  width: 100%;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  padding: 13px;
  border: 1px solid #BCBCBC;
  outline: none;
}

.form__inputsContainer input:focus {
  border: 1px solid #00C1AA;
}

.modalDelete__form textarea {
  font-family: 'Roboto', sans-serif;
  width: 100%;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  padding: 13px;
  margin-bottom: 30px;
  border: 1px solid #BCBCBC;
  outline: none;
  resize: none;
}

.modalDelete__form textarea:focus {
  border: 1px solid #00C1AA;
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

.btnEdit {
  background: #FF5252;
  color: #fff;
}

.btnCancel {
  background: #C4C4C4;
  color: #000;
}

@media screen and (min-width: 600px) {
  .form__inputsContainer {
    flex-direction: row;
  }

  .form__inputsContainer input {
    width: 50%;
  }
}
</style>
