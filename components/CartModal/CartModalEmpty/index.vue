<template>
  <div>
    <div :class="$style.modalBodyEmpty" >
      Пока что вы ничего не добавили
      в корзину.
    </div>
    <button :class="$style.modalButton" @click.stop="closeModal" >Перейти к выбору</button>
  </div>
</template>

<script>
export default {
  props: ["closeModal"]
}
</script>

<style module>
.modalBodyEmpty {
  font-size: 22px;
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

.modalButton:hover {
  opacity: .7;
}
</style>
