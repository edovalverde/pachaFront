<template>
    <main>
        <div class="container mt-4">
            <div class="d-flex justify-content-center align-items-center">
                <button @click="() => $emit('abrir-modal', 'nuevo')" id="btnAgregarMascotaCenter" type="button"
                    class="button_agregarMascota">Agregar mascota</button>
            </div>
            <div id="idListaPerros" class="row gy-4 pb-5">
                <!--TODO lista Perros-->
            </div>
        </div>
    </main>
</template>
<script>
export default {

    name: 'MainPage',
    components: {
    }
}
</script>
<style lang="">
    
</style>