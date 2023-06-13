<template>
    <div class="modal fade" tabindex="-1" aria-labelledby="modalEliminarLabel" aria-hidden="true" ref="modalEliminarPage">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-body">
                    <form id="formEliminarMascota" action="#">
                        <div class="container">
                            <div class="text-center">
                                <p>Estas seguro de eliminar a esta mascota??</p>
                            </div>
                            <div class="d-flex justify-content-evenly align-items-center">
                                <button id="btnAceptarEliminarMascota" type="submit" class="button_modal">Aceptar</button>
                                <button type="button" class="button_modal" data-bs-dismiss="modal">Cancelar</button>
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
    name: 'modal-eliminar-page',
  methods: {
    saveChanges() {
      // Aquí puedes implementar la lógica para guardar los cambios del modal
      // Por ejemplo, puedes emitir un evento hacia el componente padre
      this.$emit('changes-saved');
    },
    show() {
      // Muestra el modal utilizando Bootstrap 5
      const modal = new bootstrap.Modal(this.$refs.modalEliminarPage);
      modal.show();
    },
    close() {
      // Muestra el modal utilizando Bootstrap 5
      const modal = new bootstrap.Modal(this.$refs.modalEliminarPage);
      modal.hide();
    }
  }
}
</script>
<style lang="scss"></style>