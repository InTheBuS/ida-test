<template>
  <div :class="$style.modalCompleteWrapper">
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
  justify-content: space-around;
}
.modalHeaderName {
  font-weight: 700;
  font-size: 32px;
}

.modalCompleteWrapper {
  width: 100%;
  height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
