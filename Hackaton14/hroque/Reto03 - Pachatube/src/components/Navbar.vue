<template lang="">
  <nav class="flex justify-between p-4 bg-[#FF5252] h-16 items-center">
    <RouterLink to="/">
      <h1 class="text-lg md:text-xl lg:text-3xl font-bold text-white uppercase">Video Pacha Tv</h1>
    </RouterLink>
    <RouterLink v-show="mostrar" to="/crear" class="px-5 py-2 text-white font-bold">Crear Video</RouterLink>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  props: {
      mostrar: {
          type: Boolean,
          required: true
      },
  },
}
</script>
<style lang="">
    
</style>