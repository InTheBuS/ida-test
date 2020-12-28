<template>
  <div :class="$style.modalPopup">
    <div :class="$style.modalWrapper" v-click-outside="closeModal">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import ClickOutside from "vue-click-outside"


export default {
  props: ["closeModal"],
  data() {
    return {

    }
  },
  components: {

  },
  methods: {

  },
  computed: {

  },
  directives: {
    ClickOutside
  }
}
</script>

<style module>
.modalPopup {
  z-index: 200;
  position: fixed;
  left: 0;
  top: 0;
  min-width: 100%;
  min-height: 100vh;
  background-color: rgba(255, 255, 255, 0.8);
}

.modalWrapper {
  margin-left: auto;
  width: 460px;
  height: 100vh;
  background: white;
  box-shadow: -4px 0 16px rgba(0, 0, 0, 0.05);
  border-radius: 8px 0 0 8px;
  padding: 52px 24px 24px 48px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
}


</style>
