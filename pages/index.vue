<template>
  <div :class="$style.productListWrapper">
    <ProductItem v-for="item in filteredItemList" :item="item" :key="item.id"/>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex"
import ProductItem from "@/components/ProductItem/index"

export default {
  components: {
    ProductItem
  },
  computed: {
    ...mapGetters("ProductList", ["itemList", "filteredItemList"])
  },
  methods: {
    ...mapActions("ProductList", ["productCategoryList"])
  },
  async fetch() {
    await this.productCategoryList(1)
  }
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
