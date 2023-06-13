const openButton = document.getElementById('openPopup');
const closeButton = document.querySelector('.close');
const popup = document.getElementById('popup');

openButton.addEventListener('click', () => {
  popup.style.display = 'flex';
});

closeButton.addEventListener('click', () => {
  popup.style.display = 'none';
});

const cancelButton = document.getElementById('cancelButton');
cancelButton.addEventListener('click', () => {
  popup.style.display = 'none';
});

const textarea = document.querySelector('.custom-textarea');
const characterCount = document.querySelector('.character-count');
const maxCharacters = 120;

textarea.addEventListener('input', () => {
  const remainingCharacters = maxCharacters - textarea.value.length;
  characterCount.textContent = `${remainingCharacters} caracteres restantes`;

  if (remainingCharacters < 0) {
    textarea.value = textarea.value.substring(0, maxCharacters);
    characterCount.textContent = '0 caracteres restantes';
  }
});

const acceptButton = document.getElementById('acceptButton');
const recuadrosContainer = document.getElementById('recuadros-container');
let editingRecuadroIndex = -1;

// Agrega un atributo "data-index" a los botones de eliminar


function updateEliminarButtons() {
  const eliminarButtons = document.querySelectorAll('.eliminar-button');
  eliminarButtons.forEach((button, index) => {
    button.setAttribute('data-index', index);
    button.addEventListener('click', showConfirmPopup);
  });
}

function agregarRecuadro(recuadro) {
  recuadrosContainer.appendChild(recuadro);
  updateEliminarButtons();
}

function eliminarRecuadro(index) {
  const recuadro = recuadrosContainer.children[index];
  recuadrosContainer.removeChild(recuadro);
  updateEliminarButtons();
}

acceptButton.addEventListener('click', () => {
  const nombre = document.getElementById('nombreImput').value;
  const apellido = document.getElementById('apellidoImput').value;
  const raza = document.getElementById('razaImput').value;
  const telefono = document.getElementById('telefonoImput').value;
  const pais = document.querySelector('.country-input').value;
  const descripcion = document.getElementById('descripciontext').value;
  const fotoUrl = document.getElementById('fotoImput').value;

  if (editingRecuadroIndex !== -1) {
    const recuadroEditado = recuadrosContainer.children[editingRecuadroIndex];
    recuadroEditado.querySelector('.nombreMascota').textContent = nombre;
    recuadroEditado.querySelector('.apellidoMascota').textContent = apellido;
    recuadroEditado.querySelector('.telefono-raza p:first-child').textContent = telefono;
    recuadroEditado.querySelector('.telefono-raza p:last-child').textContent = raza;
    recuadroEditado.querySelector('.paisElement').textContent = pais;
    recuadroEditado.querySelector('img').src = fotoUrl;
    recuadroEditado.querySelector('.descripcion').textContent = descripcion;

    // Limpiar los campos del formulario
    document.getElementById('nombreImput').value = '';
    document.getElementById('apellidoImput').value = '';
    document.getElementById('razaImput').value = '';
    document.getElementById('telefonoImput').value = '';
    document.querySelector('.country-input').value = '';
    document.getElementById('descripciontext').value = '';
    document.getElementById('fotoImput').value = '';

    editingRecuadroIndex = -1; // Restablecer el índice de edición
  } else {
    const recuadro = document.createElement('div');
    recuadro.classList.add('recuadro');

    const editarButton = document.createElement('button');
    editarButton.classList.add('editar-button');
    editarButton.title = 'Editar';
    
    recuadro.appendChild(editarButton);

    const eliminarButton = document.createElement('button');
    eliminarButton.classList.add('eliminar-button');
    eliminarButton.title = 'Eliminar';
    
    recuadro.appendChild(eliminarButton);

    const fotoElement = document.createElement('img');
    fotoElement.src = fotoUrl;
    recuadro.appendChild(fotoElement);

    const datosMascota = document.createElement('div');
    datosMascota.classList.add('datos-mascota');

    const nombreMascota = document.createElement('p');
    nombreMascota.classList.add('nombreMascota');
    nombreMascota.textContent = nombre;
    datosMascota.appendChild(nombreMascota);

    const apellidoMascota = document.createElement('p');
    apellidoMascota.classList.add('apellidoMascota');
    apellidoMascota.textContent = apellido;
    datosMascota.appendChild(apellidoMascota);

    const telefonoRaza = document.createElement('div');
    telefonoRaza.classList.add('telefono-raza');
    telefonoRaza.innerHTML = `
      <p>${telefono}</p>
      <div class="line"></div>
      <p>${raza}</p>
    `;
    datosMascota.appendChild(telefonoRaza);

    const paisElement = document.createElement('p');
    paisElement.classList.add('paisElement');
    paisElement.textContent = pais;
    datosMascota.appendChild(paisElement);

    recuadro.appendChild(datosMascota);

    const descripcionElement = document.createElement('p');
    descripcionElement.classList.add('descripcion');
    descripcionElement.textContent = descripcion;
    recuadro.appendChild(descripcionElement);

    recuadrosContainer.appendChild(recuadro);
    agregarRecuadro(recuadro);

    // Limpiar los campos del formulario
    document.getElementById('nombreImput').value = '';
    document.getElementById('apellidoImput').value = '';
    document.getElementById('razaImput').value = '';
    document.getElementById('telefonoImput').value = '';
    document.querySelector('.country-input').value = '';
    document.getElementById('descripciontext').value = '';
    document.getElementById('fotoImput').value = '';
  }

  popup.style.display = 'none';
});

recuadrosContainer.addEventListener('click', (event) => {
  const target = event.target;
  if (target.classList.contains('editar-button')) {
    // ...
  } else if (target.classList.contains('eliminar-button')) {
    const recuadro = target.parentNode;
    const recuadroIndex = Array.from(recuadrosContainer.children).indexOf(recuadro);
    showConfirmPopup(recuadroIndex);
  }
});

function mostrarVentanaEdicion(index) {
  const recuadro = recuadrosContainer.children[index];
  const nombre = recuadro.querySelector('.nombreMascota').textContent;
  const apellido = recuadro.querySelector('.apellidoMascota').textContent;
  const telefono = recuadro.querySelector('.telefono-raza p:first-child').textContent;
  const raza = recuadro.querySelector('.telefono-raza p:last-child').textContent;
  const pais = recuadro.querySelector('.paisElement').textContent;
  const descripcion = recuadro.querySelector('.descripcion').textContent;
  const fotoUrl = recuadro.querySelector('img').src;

  document.getElementById('nombreImput').value = nombre;
  document.getElementById('apellidoImput').value = apellido;
  document.getElementById('razaImput').value = raza;
  document.getElementById('telefonoImput').value = telefono;
  document.querySelector('.country-input').value = pais;
  document.getElementById('descripciontext').value = descripcion;
  document.getElementById('fotoImput').value = fotoUrl;

  editingRecuadroIndex = index; // Almacena el índice del recuadro que se está editando

  popup.style.display = 'flex';
}

cancelButton.addEventListener('click', () => {
  document.getElementById('nombreImput').value = '';
  document.getElementById('apellidoImput').value = '';
  document.getElementById('razaImput').value = '';
  document.getElementById('telefonoImput').value = '';
  document.querySelector('.country-input').value = '';
  document.getElementById('descripciontext').value = '';
  document.getElementById('fotoImput').value = '';

  editingRecuadroIndex = -1; // Restablecer el índice de edición

  popup.style.display = 'none';
});

function showConfirmPopup(index) {
  deleteTargetIndex = index;
  confirmPopup.style.display = 'flex';
}

confirmDeleteButton.addEventListener('click', () => {
  if (deleteTargetIndex !== -1) {
    eliminarRecuadro(deleteTargetIndex);

    if (editingRecuadroIndex === deleteTargetIndex) {
      editingRecuadroIndex = -1;
    }
  }

  confirmPopup.style.display = 'none';
  deleteTargetIndex = -1;
});

cancelDeleteButton.addEventListener('click', () => {
  confirmPopup.style.display = 'none';
  deleteTargetIndex = -1;
});












