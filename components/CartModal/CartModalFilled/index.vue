<template>
  <div>
    <div :class="$style.modalBody">
      <div :class="$style.modalBodyName">Товары в корзине</div>
      <div >
        <ModalProductItem v-for="(item, index) in itemsInCart"
                          :item="item"
                          :key="item.id + index"
                          :index="index"/>
      </div>
    </div>
    <div :class="$style.modalCheckout">
      <div :class="$style.modalBodyName">
        Оформить заказ
      </div>
      <div :class="$style.modalInputs">
        <InputCreator v-for="input in inputForm" :input="input" :key="input.name" @change="checkForm"
                      :checkIsValid="checkForm"/>
      </div>
      <button
        :disabled="!isFormValid"
        :class="isFormValid ? $style.modalButton : $style.modalButtonBlocked"
        @click.stop="sendForm">
        Отправить
      </button>
    </div>
  </div>
</template>

<script>
import ModalProductItem from "@/components/CartModal/ModalProductItem/index"
import InputCreator from "@/components/InputCreator/index"
import {mapGetters} from "vuex"

export default {
  props: ["inputForm", "checkForm", "isFormValid", "sendForm"],
  components: {
    ModalProductItem,
    InputCreator
  },
  computed: {
    ...mapGetters("Cart", ["itemsInCart"])
  },
}
</script>

<style module>
.modalBodyName {
  color: #59606D;
  font-size: 18px;
  margin-top: 22px;
}

.modalButton {
  margin: 22px auto;
  width: 100%;
  background: #1F1F1F;
  border-radius: 8px;
  outline: none;
  border: none;
  min-height: 50px;
  color: white;
  transition: .3s;
  cursor: pointer;
}
.modalInputs input {
  font-family: 'PT Sans', sans-serif;
}
.modalButton:hover {
  opacity: .7;
}

.modalButtonBlocked {
  margin: 22px auto;
  width: 100%;
  border-radius: 8px;
  outline: none;
  border: none;
  min-height: 50px;
  color: white;
  background: #59606D;
}
</style>
