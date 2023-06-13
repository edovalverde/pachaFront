
<template lang="">
  <div class="relative flex flex-col justify-between items-center border border-gray-400 rounded-xl overflow-clip xl:min-w-[333px]">
    <RouterLink :to="`/editar/${id}`">
      <EditIcon class="absolute top-2 left-2 bg-white rounded cursor-pointer" />
    </RouterLink>
    <button type="button" @click="emitEvent">
      <DeleteIcon class="absolute top-2 right-2 bg-white rounded cursor-pointer" />
    </button>
    <img class="xl:min-w-[333px]" :src="`https://img.youtube.com/vi/${url}/maxresdefault.jpg`" :alt="title">
    <div class="p-4 self-start flex flex-col gap-2 lg:min-h-[188px]">
      <h2 class="font-bold">{{ title }}</h2>
      <p class="text-sm">0 visualizaciones</p>
      <p class="text-base text-white/60 line-clamp-3">{{ description }}</p>
    </div>
    <RouterLink :to="`/detalles/${id}`" class=" px-8 py-2 bg-[#60edac] text-center text-white w-full">Ver detalles</RouterLink>
  </div>
</template>
<script>
  import DeleteIcon from './icons/IconDelete.vue'
  import EditIcon from './icons/IconEdit.vue'
  export default {
    name: 'Card',
    components: {
      EditIcon,
      DeleteIcon,
    },
    props: {
        id: {
            type: Number,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
    },
    methods: {
      emitEvent() {
        this.$emit('custom-event', this.id);
      }
    }
  }
</script>
<style lang="">
  
</style>