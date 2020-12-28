<template>
  <div class="testProjectWrapper">
    <Header/>
    <div>
      <Body />
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header/index"
import Body from "@/components/Body/index"
import {mapActions} from "vuex"

export default {
  components: {
    Header,
    Body
  },
  methods: {
    ...mapActions("ProductCategory", ["productCategoryList"]),
    ...mapActions("Cart", ["checkForItemsBeforeInitialize"])
  },
  async fetch() {
    await this.productCategoryList()
  },
  mounted() {
    this.checkForItemsBeforeInitialize()
  },
}
</script>
<style>
html {
  box-sizing: border-box;
  font-family: 'PT Sans', sans-serif;;
}

.testProjectWrapper {
  width: 100%;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}


</style>
