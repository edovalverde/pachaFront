<template>
    <header>
        <div class="header-nav d-flex justify-content-between align-items-center">
            <h2 class="ms-4">{{ titulo }}</h2>
            <div class="me-4 cursor-pointer" @click="() => $emit('abrir-modal', 'nuevo')">
                <h6>Agregar mascota</h6>
            </div>
        </div>
    </header>
</template>
<script lang="js">
export default {
    name: 'HeaderPage',
    props: {
        titulo: String
    },
    components: {

    },
    methods: {
    }
}
</script>
<style lang="scss"></style>