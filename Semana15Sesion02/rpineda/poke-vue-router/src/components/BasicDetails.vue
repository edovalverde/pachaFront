<template>
    <div v-if="pokemon">
        
      <img :src="pokemon.sprites.front_default" :alt="pokemon.name" />
      <h1>{{ pokemon.name }}</h1>
   
      <div class="types">
        <div
          class="type-box"
          v-for="row in pokemon.types"
          :key="row.slot"
          v-bind:class="row.type.name.toLowerCase()"
        >
          {{ row.type.name }}
        </div>
      </div>
  
      <div class="description">
      {{ pokemon.description }}
      </div>
  
      <a @click="moreDetails" class="link">More Details</a>
    </div>
  </template>
  
  <script>
  export default {
    name: "BasicDetails",
    props: {
      pokemon: {
        type: Object,
      },
    },
  
    methods: {
      moreDetails() {
        this.$router.push({
          name: "PokemonDetails",
          params: {
            name: this.pokemon.name,
            specie_id: this.pokemon.specie_id,
          },
        });
      },
    },
  };
  </script>
  <style>
.bug {
  background-color: #abb642;
}

.dark {
  background-color: #6c584a;
}

.dragon {
  background-color: #6843ef;
}

.electric {
  background-color: #f2d054;
}

.fairy {
  background-color: #e29dac;
}

.flying {
  background-color: #a493ea;
}

.fighting {
  background-color: #b13c31;
}

.fire {
  background-color: #e28544;
}

.ghost {
  background-color: #6c5a94;
}

.grass {
  background-color: #8bc560;
}

.ground {
  background-color: #dbc074;
}

.ice {
  background-color: #a6d6d7;
}

.normal {
  background-color: #a8a77d;
}

.poison {
  background-color: #94489b;
}

.psychic {
  background-color: #e66388;
}

.rock {
  background-color: #b4a04a;
}

.steel {
  background-color: #b8b8ce;
}

.water {
  background-color: #6f91e9;
}

h1 {
	font-size: 18px;
	font-weight: bold;
    justify-content: center;
}

.types {
	display: flex;
	color: #fff;
	justify-content: center;
	margin-top: 10px;
}

.type-box {
	padding: 10px;
}

.description {
	margin-top: 20px;
	margin-bottom: 20px;
}

a {
	color: #03a9f4;
	text-decoration: none;
}
</style>
  