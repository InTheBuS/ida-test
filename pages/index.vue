<template>
  <div :class="$style.productListWrapper">
  </div>
</template>

<script>

export default {
  mounted() {
    this.$router.push({path: "/category/1"})
  },
}
</script>

<style module>
.productListWrapper {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(264px, 1fr));
  grid-column-gap: 16px;
  grid-row-gap: 16px;
}
</style>
