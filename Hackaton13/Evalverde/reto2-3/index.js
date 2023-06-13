const modal = document.getElementById("myModal");
const open = document.getElementById("openModal");
//const mascotas = [];

let mascotas = localStorage.getItem("mascotas")

if(!mascotas){

    localStorage.setItem("mascotas", JSON.stringify([]))

}




function Mascota(nombre, apellido, email, telefono, pais, celular, raza, foto, descripcion) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.email = email;
  this.telefono = telefono;
  this.pais = pais;
  this.celular = celular;
  this.raza = raza;
  this.foto = foto;
  this.descripcion = descripcion;
}
mostrarMascotas();
document.getElementById("agregar").addEventListener("click", function() {
  // Obtener los valores
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let email = document.getElementById("email").value;
  let telefono = document.getElementById("telefono").value;
  let pais = document.getElementById("pais").value;
  let celular = document.getElementById("celular").value;
  let raza = document.getElementById("raza").value;
  let foto = document.getElementById("foto").value;
  let descripcion = document.getElementById("descripcion").value;

  // Crear objeto Mascota con los datos ingresados
  let mascota = new Mascota(nombre, apellido, email, telefono, pais, celular, raza, foto, descripcion);

  // Agregar la mascota al arreglo de mascotas
  let mascotas = JSON.parse(localStorage.getItem("mascotas"))

  let indexMascota = mascotas.findIndex((m , i)=> m.email === mascota.email )

  console.log(indexMascota)

  if(indexMascota > 0) {
    mascotas[indexMascota] = {...mascota}
  }else{
    mascotas.push(mascota); 
  }

     

  localStorage.setItem("mascotas", JSON.stringify(mascotas))

  // Llamar a la función para mostrar las mascotas
  mostrarMascotas();

  // Limpiar los campos de entrada
  document.getElementById("nombre").value = "";
  document.getElementById("apellido").value = "";
  document.getElementById("email").value = "";
  document.getElementById("telefono").value = "";
  document.getElementById("pais").value = "";
  document.getElementById("celular").value = "";
  document.getElementById("raza").value = "";
  document.getElementById("foto").value = "";
  document.getElementById("descripcion").value = "";

  // Cerrar el modal
  modal.style.display = "none";
});

function mostrarMascotas() {
  // Obtener el div de visualización
  let divMascotas = document.getElementById("mascota");

  // Limpiar el contenido anterior
  divMascotas.innerHTML = "";

  // Recorrer el arreglo de mascotas y construir el contenido HTML
  let mascotas = JSON.parse(localStorage.getItem("mascotas"))
  for (let i = 0; i < mascotas.length; i++) {

    let mascota = mascotas[i];

    let contenidoHTML = "<div class='carta'>";
    contenidoHTML += "<button class=`btmMod` onclick='modificarMascota(" + i + ")'>Modificar</button>";
    contenidoHTML += "<button class=`btmEli` onclick='eliminarMascota(" + i + ")'>Eliminar</button>";

    contenidoHTML += "<h2>Mascota " + (i + 1) + "</h2>";
    contenidoHTML += "<p><img src='" + mascota.foto + "' ></p>";
    contenidoHTML += "<p><strong>Nombre:</strong> " + mascota.nombre + "</p>";
    contenidoHTML += "<p><strong>Apellido:</strong> " + mascota.apellido + "</p>";
    contenidoHTML += "<p><strong>Email:</strong> " + mascota.email + "</p>";
    contenidoHTML += "<p><strong>Teléfono:</strong> " + mascota.telefono + "</p>";
    contenidoHTML += "<p><strong>País:</strong> " + mascota.pais + "</p>";
    contenidoHTML += "<p><strong>Celular:</strong> " + mascota.celular + "</p>";
    contenidoHTML += "<p><strong>Raza:</strong> " + mascota.raza + "</p>";
    contenidoHTML += "<p><strong>Descripción:</strong> " + mascota.descripcion + "</p>";
    contenidoHTML += "</div>";

    // Agregar el contenido HTML al div de visualización
    divMascotas.innerHTML += contenidoHTML;
  }
  
}

function modificarMascota(index) {
  let mascotas = JSON.parse(localStorage.getItem("mascotas"));
  let mascota = mascotas[index];
console.log(mascotas)

console.log(mascota)
  // Mostrar un formulario 
  document.getElementById("nombre").value = mascota.nombre;
  document.getElementById("apellido").value = mascota.apellido;
  document.getElementById("email").value = mascota.email;
  document.getElementById("telefono").value = mascota.telefono;
  document.getElementById("pais").value = mascota.pais;
  document.getElementById("celular").value = mascota.celular;
  document.getElementById("raza").value = mascota.raza;
  document.getElementById("foto").value = mascota.foto;
  document.getElementById("descripcion").value = mascota.descripcion;


  modal.style.display = "block";
}



function eliminarMascota(index) {
  let mascotas = JSON.parse(localStorage.getItem("mascotas"));

  // Elimina la mascota del arreglo según el índice proporcionado
  mascotas.splice(index, 1);

  localStorage.setItem("mascotas", JSON.stringify(mascotas));

  mostrarMascotas();
}

document.getElementById("openModal").addEventListener("click", function() {
  modal.style.display = "block";
});

document.getElementById("clearModal").addEventListener("click", function() {
  modal.style.display = "none";
});
