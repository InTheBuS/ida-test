<template>
  <nuxt-link :active-class="$style.categoryItemActive" exact no-prefetch :to="'/category/' + category.id" :class="$style.categoryItem">
    <div :class="$style.categoryLink">{{ category.name }}</div>
  </nuxt-link>
</template>

<script>
export default {
  props: ['category']
}
</script>

<style module>
.categoryItem {
  text-decoration: none;
}
.categoryLink {
  margin-top: 16px;
  cursor: pointer;
  color: black;
}
.categoryLink:hover {
  color: #959DAD;
}
.categoryItem {

}
.categoryItemActive {
  text-decoration: underline black;
}
</style>
