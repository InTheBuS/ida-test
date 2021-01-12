<template>
  <div :class="$style.modalCompleteWrapper">
    <div :class="$style.modalHeader">
      <div :class="$style.modalHeaderName">Корзина</div>
      <div></div>
    </div>
    <div :class="$style.modalCompleteBodyWrapper">
      <div :class="$style.modalComplete">👌</div>
      <div :class="$style.modalCompleteText">Заявка успешно отправлена</div>
      <div :class="$style.modalCompleteContactText">Вскоре наш менеджер свяжется с вами</div>
    </div>
  </div>
</template>

<script>

</script>

<style module>
.modalHeader {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.modalHeaderName {
  font-weight: 700;
  font-size: 32px;
}

.modalCompleteWrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.modalCompleteBodyWrapper {
  margin: auto;
  text-align: center;
}

.modalComplete {
  font-size: 92px;
}

.modalCompleteText {
  font-weight: 700;
  font-size: 24px;
}

.modalCompleteContactText {
  color: #59606D;
  font-size: 16px;
}
</style>
