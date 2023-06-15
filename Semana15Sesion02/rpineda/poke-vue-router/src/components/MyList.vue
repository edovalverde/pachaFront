<template>
  <router-link
  :to="{ name: 'Pokemon', params: { name: row.name } }"
  class="link"
  v-for="row in items"
  :key="row.name"
>
  <div class="list-item">
    {{ row.name }}
  </div>
</router-link>
</template>
  
  <script>
  export default {
    name: "List",
    props: {
      items: {
        type: Array,
      },
    },
  };
  </script>
<style scoped>
.list-item {
	padding: 20px;
	color: #333;
	font-size: 20px;
	border-bottom: 1px solid #ededed;
}

.list-item:first-of-type {
	border-top: 1px solid #ededed;
}

a {
	color: #03a9f4;
	text-decoration: none;
}
</style>
  