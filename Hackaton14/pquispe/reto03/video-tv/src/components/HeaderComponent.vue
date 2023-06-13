<template>
  <header class="header">
    <h1 class="header__title">VIDEO PACHA TV</h1>
    <slot name="header-options"></slot>
  </header>
</template>

<script>
export default {
  data() {
    return {

    };
  },
};
</script>

<style scoped>
.header {
  background-color: #FF5252;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: 1;
}

.header__title {
  color: #fff;
  font-size: 3.6rem;
  font-style: normal;
  font-weight: 700;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>
