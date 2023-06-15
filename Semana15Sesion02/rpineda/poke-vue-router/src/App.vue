<template>
    <router-view />
</template>

<script>
import './assets/tailwind.css'

export default {
  name: 'App'
}
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
