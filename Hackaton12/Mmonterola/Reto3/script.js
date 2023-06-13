function Modal(callbackAccept, callbackCancel) {
    this.modal = document.getElementById('modal');
    this.openButton = document.getElementById('open-modal');
    this.acceptButton = document.getElementById('btn-accept');
    this.cancelButton = document.getElementById('btn-cancel');
  
    this.openModal = function() {
      this.modal.style.display = 'flex';
    };
  
    this.closeModal = function() {
      this.modal.style.display = 'none';
    };
  
    this.acceptButton.addEventListener('click', () => {
      if (callbackAccept) {
        callbackAccept();
      }
      this.closeModal();
    });
  
    this.cancelButton.addEventListener('click', () => {
      if (callbackCancel) {
        callbackCancel();
      }
      this.closeModal();
    });
  
    this.openButton.addEventListener('click', () => {
      this.openModal();
    });
  }
  
  // Ejemplo de uso
  const modal = new Modal(
    () => {
      console.log('Botón Aceptar presionado');
      // Aquí puedes ejecutar la lógica deseada para el botón Aceptar
    },
    () => {
      console.log('Botón Cancelar presionado');
      // Aquí puedes ejecutar la lógica deseada para el botón Cancelar
    }
  );
  