<template>
  <div :class="$style.bodyWrapper">
    <div :class="$style.bodyLeft">
      <h1>Каталог</h1>
      <CategoryItem v-for="category in categories"
                    :category="category"
                    :key="category.id"/>
    </div>
    <div :class="$style.bodyRight">
      <div :class="$style.bodyRightSelectStyle">
        <label>Сортировать по<select v-model="selected"
                                     :class="$style.bodyRightSelect"
                                     @change="productItemListByFilter(selected)">
          <option v-for="option in optionsForSelected"
                  :value="option.value">{{ option.name}}</option>
        </select>
        </label>
      </div>
      <Nuxt/>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex"
import CategoryItem from "@/components/CategoryItem/index"

export default {
  data() {
    return {
      selected: '',
      optionsForSelected:
        [
          {name: 'выберите фильтр', value: ''},
          {name: 'цене', value: 'price'},
          {name: 'популярности', value: 'rating'}
        ]
    }
  },
  components: {
    CategoryItem,
  },
  computed: {
    ...mapGetters("ProductCategory", ["categories"])
  },
  methods: {
    ...mapActions("ProductList", ["productItemListByFilter"]),
  }
}
</script>

<style module>
.bodyLeft {
  align-self: flex-start;
  width: 15%;
}

.bodyRight {
  width: 85%;
}

.bodyRightSelectStyle {
  font-size: 16px;
  text-align: right;
  margin-bottom: 35px;
}

.bodyWrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 32px 88px;
  width: 100%;
  box-sizing: border-box;
}

.bodyRightSelect {
  border: none;
  outline: none;
  color: gray;
  font-size: 14px;
}
</style>
