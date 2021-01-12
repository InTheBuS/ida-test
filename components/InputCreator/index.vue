<template>
  <masked-input
    :name="input.name"
    type="text"
    v-model="input.value"
    :class="$style.formInput"
    v-if="input.masked"
    :mask="['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]"
    placeholderChar="_"
    :placeholder="input.placeholder"
    :change="checkIsValid()">
  </masked-input>
  <input v-model="input.value"
         :class="$style.formInput"
         v-else-if="!input.masked" :placeholder="input.placeholder" @change="checkIsValid"/>

</template>

<script>
import MaskedInput from "vue-text-mask"

export default {
  props: ["input", "checkIsValid"],
  components: {
    MaskedInput
  }
}
</script>

<style module>
.formInput {
  width: 100%;
  background: #F8F8F8;
  border-radius: 8px;
  height: 50px;
  margin-top: 16px;
  padding-left: 14px;
  font-size: 16px;
  border: none;
  outline: none;
}
</style>
