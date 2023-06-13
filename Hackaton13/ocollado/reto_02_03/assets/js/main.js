class Perro {

    #codigo;
    #nombre;
    #apellido;
    #raza;
    #telefono;
    #pais;
    #urlFotografia;
    #sobreElElla;
    #activo;

    constructor() {

    }

    get getCodigo() {
        return this.#codigo;
    }

    set setCodigo(codigo) {
        this.#codigo = codigo;
    }

    get getNombre() {
        return this.#nombre;
    }

    set setNombre(nombre) {
        this.#nombre = nombre;
    }

    get getApellido() {
        return this.#apellido;
    }

    set setApellido(apellido) {
        this.#apellido = apellido;
    }

    get getRaza() {
        return this.#raza;
    }

    set setRaza(raza) {
        this.#raza = raza;
    }

    get getTelefono() {
        return this.#telefono;
    }

    set setTelefono(telefono) {
        this.#telefono = telefono;
    }

    get getPais() {
        return this.#pais;
    }

    set setPais(pais) {
        this.#pais = pais;
    }

    get getUrlFotografia() {
        return this.#urlFotografia;
    }

    set setUrlFotografia(urlFotografia) {
        this.#urlFotografia = urlFotografia;
    }

    get getSobreElElla() {
        return this.#sobreElElla;
    }

    set setSobreElElla(sobreElElla) {
        this.#sobreElElla = sobreElElla;
    }

    get esActivo() {
        return this.#activo;
    }

    set setActivo(activo) {
        this.#activo = activo;
    }

    toJSON() {
        return {
            codigo: this.#codigo,
            nombre: this.#nombre,
            apellido: this.#apellido,
            raza: this.#raza,
            telefono: this.#telefono,
            pais: this.#pais,
            urlFotografia: this.#urlFotografia,
            sobreElElla: this.#sobreElElla,
            activo: this.#activo,
        }
    }

}

const ID_MODAL_AGREGAR_EDITAR = "#idModalAgregarEditar";
const ID_MODAL_ELIMINAR = "#idModalEliminar";
const BTN_AGREGAR_MASCOTA = "#btnAgregarMascota";
const BTN_AGREGAR_MASCOTA_CENTER = "#btnAgregarMascotaCenter";
const BTN_EDITAR_MASCOTA = "#btnEditarMascota";
const BTN_ACEPTAR_ELIMINAR_MASCOTA = "#btnAceptarEliminarMascota";
const BTN_ELIMINAR_MASCOTA = "#btnEliminarMascota";
const FORM_MASCOTA = "#formMascota";
const FORM_ELIMINAR_MASCOTA = "#formEliminarMascota";

const ID_VALUES_FORM = {
    ID_NOMBRE: "#idFirstNamePet",
    ID_APELLIDO: "#idLastNamePet",
    ID_RAZA: "#idRace",
    ID_TELEFONO: "#idPhone",
    ID_PAIS: "#idCountry",
    ID_URL_FOTOGRAFIA: "#idUrlPhotography",
    ID_SOBRE_EL_ELLA: "#idAboutHimHer"
}

const TIPO_ACCIONES = {
    NUEVO: "Nuevo",
    EDITAR: "Editar",
    ELIMINAR: 'Eliminar'
}

$(document).ready(() => {

    const formAgregarEditarMascota = $(FORM_MASCOTA);
    const formEliminarMascota = $(FORM_ELIMINAR_MASCOTA);

    formAgregarEditarMascota.on('submit', (event) => {
        event.preventDefault();
        const idButton = formAgregarEditarMascota.data('data-idButton');

        let perro = buildPerro(true);

        switch (idButton) {
            case BTN_AGREGAR_MASCOTA:

                agregarMascota(perro);
                cerrarModal(ID_MODAL_AGREGAR_EDITAR);
                break;
            case BTN_AGREGAR_MASCOTA_CENTER:
                $(BTN_AGREGAR_MASCOTA_CENTER).addClass('d-none');
                $(BTN_AGREGAR_MASCOTA).removeClass('d-none');

                agregarMascota(perro);
                cerrarModal(ID_MODAL_AGREGAR_EDITAR);
                break;
            case BTN_EDITAR_MASCOTA:

                editarMascota(perro);
                cerrarModal(ID_MODAL_AGREGAR_EDITAR);
                break;
        }
        formAgregarEditarMascota[0].reset();
    });

    formEliminarMascota.on('submit', (event) => {
        event.preventDefault();

        eliminarMascota(perro);
        cerrarModal(ID_MODAL_ELIMINAR);
    });


    agregarEventosOnClick();
});

verificarDataEnLocalStorage();

function agregarEventosOnClick() {
    $(BTN_AGREGAR_MASCOTA).on("click", () => {
        $('#idModalAgregarEditarLabel').text('Agregar Mascota');
        $(FORM_MASCOTA).data('data-idButton', BTN_AGREGAR_MASCOTA);
        mostrarModal(ID_MODAL_AGREGAR_EDITAR);
    });

    $(BTN_AGREGAR_MASCOTA_CENTER).on("click", () => {
        $('#idModalAgregarEditarLabel').text('Agregar Mascota');
        $(FORM_MASCOTA).data('data-idButton', BTN_AGREGAR_MASCOTA_CENTER);
        mostrarModal(ID_MODAL_AGREGAR_EDITAR);
    });

    $(document).on("click", BTN_EDITAR_MASCOTA, () => {
        $('#idModalAgregarEditarLabel').text('Editar Mascota');
        $(FORM_MASCOTA).data('data-idButton', BTN_EDITAR_MASCOTA);
        mostrarModal(ID_MODAL_AGREGAR_EDITAR);
    });

    $(document).on("click", BTN_ELIMINAR_MASCOTA, () => {
        mostrarModal(ID_MODAL_ELIMINAR);
    });
}

function buildPerro(esNuevoPerro) {
    const firstName = $(ID_VALUES_FORM.ID_NOMBRE).val();
    const lastName = $(ID_VALUES_FORM.ID_APELLIDO).val();
    const race = $(ID_VALUES_FORM.ID_RAZA).val();
    const phone = $(ID_VALUES_FORM.ID_PAIS).val();
    const country = $(ID_VALUES_FORM.ID_PAIS).val();
    const urlPhotography = $(ID_VALUES_FORM.ID_URL_FOTOGRAFIA).val();
    const aboutHimHer = $(ID_VALUES_FORM.ID_SOBRE_EL_ELLA).val();

    let perro = new Perro();
    perro.setNombre = firstName;
    perro.setApellido = lastName;
    perro.setRaza = race;
    perro.setTelefono = phone;
    perro.setPais = country;
    perro.setUrlFotografia = urlPhotography;
    perro.setSobreElElla = aboutHimHer;
    if (esNuevoPerro) {
        perro.setCodigo = generarCodigoMascota();
        perro.setActivo = true;
    }

    return perro;
}

function mostrarModal(idModal) {
    $(idModal).modal('show');
}

function cerrarModal(idModal) {
    $(idModal).modal('hide');
}

function actualizarLocalStorage(nuevoPerro, tipoAccion) {

    const perros = JSON.parse(localStorage.getItem('perro')) || [];

    switch (tipoAccion) {
        case TIPO_ACCIONES.NUEVO:
            perros.push(nuevoPerro);
            break;
        case TIPO_ACCIONES.EDITAR:
            const perro = obtenerPerroEnLocalStorage($('#btnEditarMascota').data('codigoMascota'));

            perros.forEach(perroInLocalStorage => {
                if (perro.getCodigo === perroInLocalStorage.getCodigo) {
                    perroInLocalStorage = perro;
                }
            })

            break;
        case TIPO_ACCIONES.ELIMINAR:
            alert('accion no disponible')
            break;
        default:
            throw new Error('Tipo Accion no soportada')
    }
    localStorage.setItem('perro', JSON.stringify(perros));
}

function obtenerValoresPerrosInLocalStorage() {
    const perrosFromLocalStorage = JSON.parse(localStorage.getItem('perro'));

    if (!perrosFromLocalStorage || perrosFromLocalStorage.length === 0) {
        return;
    }

    return perrosFromLocalStorage
        .filter(perroFromLocalStorage => perroFromLocalStorage.activo)
        .map(perroFromLocalStorage => {
            let perro = new Perro();
            perro.setCodigo = perroFromLocalStorage.codigo;
            perro.setNombre = perroFromLocalStorage.nombre;
            perro.setApellido = perroFromLocalStorage.apellido;
            perro.setRaza = perroFromLocalStorage.raza;
            perro.setTelefono = perroFromLocalStorage.telefono;
            perro.setPais = perroFromLocalStorage.pais;
            perro.setUrlFotografia = perroFromLocalStorage.urlFotografia;
            perro.setSobreElElla = perroFromLocalStorage.sobreElElla;
            perro.setActivo = perroFromLocalStorage.activo;

            return perro;
        });
}

function agregarNuevoPerroEnDiv(perro) {
    const divListaPerros = $("#idListaPerros");
    const contenidoActual = divListaPerros.html();
    const nuevoContenido = `
            <div class="col-md-6 col-lg-3">
                <div class="card">
                    <div class="d-flex justify-content-between">
                        <div id="btnEditarMascota" class="cursor-pointer mt-3 ms-3 d-flex flex-column align-items-center" data-codigoMascota = ${perro.getCodigo}>
                            <img src="assets/svg/pen.svg" width="20" alt="">
                            <p>Editar</p>
                        </div>
                        <div id="btnEliminarMascota" class="cursor-pointer mt-3 me-3 d-flex flex-column align-items-center" data-codigoMascota = ${perro.getCodigo}>
                        <img src="assets/svg/x.svg" width="20" alt="">
                        <p>Eliminar</p>
                        </div>
                    </div>
                    <img src="" class="rounded-circle card-img-top mx-auto img-thumbnail">
                    <div class="card-body text-center">
                        <h3 class="card-title">${perro.getNombre}</h3>
                        <p>${perro.getTelefono} | ${perro.getRaza}</p>
                        <p>${perro.getPais}</p>
                        <p class="card-text">${perro.getSobreElElla}</p>
                    </div>
                </div>
            </div>
        `;

    divListaPerros.html(`${contenidoActual} ${nuevoContenido}`);
}

function agregarMascota(perro) {
    agregarNuevoPerroEnDiv(perro);
    actualizarLocalStorage(perro, TIPO_ACCIONES.NUEVO);
}

function editarMascota(perro) {
    actualizarLocalStorage(perro, TIPO_ACCIONES.EDITAR);
}

function eliminarMascota(perro) {
    actualizarLocalStorage(perro, TIPO_ACCIONES.ELIMINAR);
}

function verificarDataEnLocalStorage() {
    const perrosInLocalStorage = obtenerValoresPerrosInLocalStorage();

    if (!perrosInLocalStorage || perrosInLocalStorage.length === 0) {
        return;
    }

    $(BTN_AGREGAR_MASCOTA_CENTER).addClass('d-none');
    $(BTN_AGREGAR_MASCOTA).removeClass('d-none');

    perrosInLocalStorage.forEach(perro => agregarNuevoPerroEnDiv(perro));

}

function generarCodigoMascota() {
    const mascotasInLocalStorage = obtenerValoresPerrosInLocalStorage();

    if (!mascotasInLocalStorage || mascotasInLocalStorage.length === 0) {
        return 1;
    }

    return mascotasInLocalStorage.length + 1;
}

function obtenerPerroEnLocalStorage(codigo) {
    const perrosInLocalStorage = obtenerValoresPerrosInLocalStorage();

    if (!perrosInLocalStorage || perrosInLocalStorage.length === 0) {
        return;
    }

    return perrosInLocalStorage.filter(perroInLocalStorage => perroInLocalStorage.codigo === codigo).shift();
}