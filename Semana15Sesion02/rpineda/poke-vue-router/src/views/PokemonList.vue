<template>
    <MyList :items="items" />
</template>
<script>
import axios from "axios";
import MyList from "../components/MyList.vue";

export default {
  name: "PokemonList",
  data() {
    return {
      items: null,
    };
  },
  mounted() {
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=151`).then((res) => {
      if (res.data && res.data.results) {
        this.items = res.data.results;
      }
    });
  },
  components: {
    MyList,
  },
};
</script>
<style>
</style>