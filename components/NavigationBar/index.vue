<template>
  <div :class="$style.categoriesWrapper">
    <CategoryItem v-for="category of categories" :category="category"/>
  </div>
</template>

<script>
import {mapGetters} from "vuex"
import CategoryItem from "@/components/CategoryItem/index"

export default {
  components: {
    CategoryItem
  },
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters("ProductCategory", ["categories"])
  }
}

</script>

<style module>

</style>
