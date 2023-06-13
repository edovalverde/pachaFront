<template>
  <main class="main">
    <form action="#" class="modalDelete__form" @submit.prevent="onSubmit">
      <h4 class="form__title">Agrear video</h4>
      <div class="form__inputsContainer">
        <input type="text" id="title" name="title" placeholder="Titulo" autocomplete="off" required>
        <input type="text" id="url" name="url" placeholder="url-video" autocomplete="off" pattern="^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-.\/?%&=]*)?$" title="Por favor, ingrese un enlace válido. Ejemplo: https://www.example.com" required>
      </div>
      <textarea name="description" id="description" rows="6" placeholder="Descripcion" autocomplete="off" required></textarea>
      <div class="form___buttonsContainer">
        <button type="button" class="btnAdd" @click="emitCreateVideo1">Agregar</button>
        <button type="button" class="btnCancel" @click="emitCancelCreate">Cancelar</button>
      </div>
    </form>
  </main>
</template>

<script>
export default {
  emits: ['emitCreateVideo1', 'emitCancelCreate'],
  data() {
    return {
      newVideo: {
        title: '',
        url: '',
        description: '',
        views: 0
      }
    };
  },
  methods: {
    emitCreateVideo1() {
      this.newVideo.title = document.getElementById('title').value;
      this.newVideo.url = document.getElementById('url').value;
      this.newVideo.description = document.getElementById('description').value;

      if (this.newVideo.title != '' && this.newVideo.url.startsWith("https://www.") && this.newVideo.description != '') {
        this.$emit('emitCreateVideo1', this.newVideo);
        document.getElementById('title').value = '';
        document.getElementById('url').value = '';
        document.getElementById('description').value = '';
      }
    },
    emitCancelCreate() {
      this.$emit('emitCancelCreate');
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

.btnAdd {
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
