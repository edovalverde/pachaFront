var mascotas = [
  {
    "nombre": "Perro 1",
    "telefono": "Telefono 1",
    "correo": "Correo 1",
    "pais":" Pais 1",
    "descripcion":"Lorem ipsum"
  },
  {
    "nombre": "Perro 2",
    "telefono": "Telefono 2",
    "correo": "Correo 2",
    "pais":" Pais 2",
    "descripcion":"Lorem ipsum"
  }
];

function mostrarMascotas() {
  var mascotasContainer = document.getElementById("mascotas-container");
  mascotasContainer.innerHTML = "";

  mascotas.forEach(function(mascota, index) {
    var mascotaDiv = document.createElement("div");
    mascotaDiv.classList.add("mascota");

    var nombreHeading = document.createElement("h3");
    nombreHeading.textContent = mascota.nombre;

    var telefonoParrafo = document.createElement("p");
    telefonoParrafo.textContent = "Teléfono: " + mascota.telefono;

    var correoParrafo = document.createElement("p");
    correoParrafo.textContent = "Correo: " + mascota.correo;

    var paisParrafo = document.createElement("p");
    paisParrafo.textContent = "País: " + mascota.pais;

    var descripcionParrafo = document.createElement("p");
    descripcionParrafo.textContent = "Descripción: " + mascota.descripcion;

    var eliminarButton = document.createElement("button");
    eliminarButton.textContent = "Eliminar";
    eliminarButton.addEventListener("click", function() {
      eliminarMascota(index);
    });

    mascotaDiv.appendChild(nombreHeading);
    mascotaDiv.appendChild(telefonoParrafo);
    mascotaDiv.appendChild(correoParrafo);
    mascotaDiv.appendChild(paisParrafo);
    mascotaDiv.appendChild(descripcionParrafo);
    mascotaDiv.appendChild(eliminarButton);

    mascotasContainer.appendChild(mascotaDiv);
  });
}

function agregarMascota(nombre, telefono, correo, pais, descripcion) {
  var nuevaMascota = {
    nombre: nombre,
    telefono: telefono,
    correo: correo,
    pais: pais,
    descripcion: descripcion
  };

  mascotas.push(nuevaMascota);
  mostrarMascotas();
}

function eliminarMascota(index) {
  mascotas.splice(index, 1);
  mostrarMascotas();
}

var agregarForm = document.getElementById("agregar-form");
agregarForm.addEventListener("submit", function(event) {
  event.preventDefault();

  var nombreInput = document.getElementById("nombre");
  var telefonoInput = document.getElementById("telefono");
  var correoInput = document.getElementById("correo");
  var paisInput = document.getElementById("pais");
  var descripcionInput = document.getElementById("descripcion");

  agregarMascota(nombreInput.value, telefonoInput.value, correoInput.value, paisInput.value, descripcionInput.value);

  nombreInput.value = "";
  telefonoInput.value = "";
  correoInput.value = "";
  paisInput.value = "";
  descripcionInput.value = "";
});

mostrarMascotas();
  
 