<template>
    <div class="modal fade" id="idModalAgregarEditar" tabindex="-1" aria-labelledby="modalMascotaLabel" aria-hidden="true"
        ref="modalVideoPage">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header border-bottom-0">
                    <h5 class="modal-title" id="idModalAgregarEditarLabel">Test</h5>
                    <button type="button" class="btn-close" aria-label="Close" @click="close"></button>
                </div>
                <div class="modal-body">
                    <form id="formMascota">
                        <div class="container">
                            <div class="row gy-4 pb-5">
                                <div class="col-6">
                                    <input type="text" class="form-control" id="idFirstNamePet"
                                        aria-describedby="firstNamePet" placeholder="Nombre" required>
                                </div>
                                <div class="col-6">
                                    <input type="text" class="form-control" id="idLastNamePet"
                                        aria-describedby="lastNamePet" placeholder="Apellido" required>
                                </div>
                                <div class="col-6">
                                    <input type="text" class="form-control" id="idRace" aria-describedby="racePet"
                                        placeholder="Raza" required>
                                </div>
                                <div class="col-6">
                                    <input type="text" class="form-control" id="idPhone" aria-describedby="phonePet"
                                        placeholder="Teléfono" required>
                                </div>
                                <div class="col-6">
                                    <select class="form-select" id="idCountry" aria-label="Seleccionar pais" required>
                                        <option value="" selected>País</option>
                                        <option value="PE">Perú</option>
                                        <option value="AR">Argentina</option>
                                        <option value="VE">Venezuela</option>
                                    </select>
                                </div>
                                <div class="col-6">
                                    <input type="text" class="form-control" id="idUrlPhotography"
                                        aria-describedby="urlPhotographyPet" placeholder="Url de fotografía" required>
                                </div>
                                <div class="col-12">
                                    <textarea class="form-control" id="idAboutHimHer" rows="3" placeholder="Sobre él/ella"
                                        required></textarea>
                                </div>
                            </div>
                            <div class="d-flex justify-content-evenly align-items-center">
                                <button type="submit" class="button_modal">Aceptar</button>
                                <button type="button" class="button_modal" @click="close">Cancelar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="js">
import * as bootstrap from "bootstrap"
export default {
    name: 'modal-video-page',
  methods: {
    saveChanges() {
      // Aquí puedes implementar la lógica para guardar los cambios del modal
      // Por ejemplo, puedes emitir un evento hacia el componente padre
      this.$emit('changes-saved');
    },
    show() {
      // Muestra el modal utilizando Bootstrap 5
      const modal = new bootstrap.Modal(this.$refs.modalVideoPage);
      modal.show();
    },
    close() {
      // Muestra el modal utilizando Bootstrap 5
      const modal = new bootstrap.Modal(this.$refs.modalVideoPage);
      modal.hide();
    }
  }
}
</script>
<style lang="scss"></style>