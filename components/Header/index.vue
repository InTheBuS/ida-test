<template>
  <div :class="$style.navbarContainer">
    <div :class="$style.navbarContent">
      <div :class="$style.navbarTittle">
        TestList
      </div>
      <div :class="$style.imgContainer">
        <div :class="$style.littleSVG" :style="IconCreator(32, 32, '/Cart.svg')" @click.stop="openModal"></div>
        <div :class="$style.littleCircle">{{ this.totalItemsCountInCart }}</div>

        <CartModal v-show="showModal" :closeModal="closeModal">
          <div v-show="Ordering">
            <div :class="$style.modalHeader">
              <div :class="$style.modalHeaderName">Корзина</div>
              <div :class="$style.modalHeaderClose" @click.stop="closeModal">x</div>
            </div>


            <CartModalEmpty v-if="isCartEmpty()"
                            :closeModal="closeModal"/>

            <CartModalFilled v-if="!isCartEmpty()"
                             :itemsInCart="itemsInCart"
                             :checkForm="checkForm"
                             :inputForm="inputForm"
                             :isFormValid="isFormValid"
                             :sendForm="sendForm"/>
          </div>
          <CartModalOrderingComplete v-if="OrderingComplete"/>
        </CartModal>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex"
import CartModal from "@/components/CartModal/index";
import iconMixin from "@/mixins/IconCreator/index"
import ModalProductItem from "@/components/CartModal/ModalProductItem/index"
import InputCreator from "@/components/InputCreator/index"
import CartModalOrderingComplete from "@/components/CartModal/CartModalOrderingComplete/index"
import CartModalEmpty from "@/components/CartModal/CartModalEmpty/index"
import CartModalFilled from "@/components/CartModal/CartModalFilled/index"

export default {
  data() {
    return {
      showModal: false,
      Ordering: false,
      OrderingComplete: false,
      isFormValid: false,
      inputForm: [
        {name: "fullName", value: '', placeholder: 'Введите имя', masked: false},
        {name: "telephone", value: '', placeholder: '(987) 654 - 3210', masked: true},
        {name: "address", value: '', placeholder: 'Введите адрес', masked: false}
      ],
      validations: {
        fullName(fullName) {
          return Boolean(fullName.length > 4)
        },
        telephone(telephone) {
          return Boolean(telephone.replace(/[) (_-]/g, '').length === 10)
        },
        address(address) {
          return Boolean(address.length > 8)
        }
      },
    }
  },
  mixins: [iconMixin],
  computed: {
    ...mapGetters("Cart", ["itemsInCart", "totalItemsCountInCart"])
  },
  components: {
    CartModal,
    ModalProductItem,
    InputCreator,
    CartModalOrderingComplete,
    CartModalEmpty,
    CartModalFilled
  },
  methods: {
    ...mapActions("Cart", ["deleteAllItemsInCart"]),
    closeModal() {
      this.showModal = false
      this.Ordering = false
      this.OrderingComplete = false
    },
    openModal() {
      this.showModal = true
      this.Ordering = true
    },
    isCartEmpty() {
      return this.totalItemsCountInCart <= 0
    },
    checkForm() {
      this.isFormValid = this.inputForm.every(input => Boolean(this.validations[input.name](input.value)))
      if (!this.isFormValid) {
      }
      if (this.isFormValid) {
      }
    },
    sendForm() {
      if (this.isFormValid) {
        this.inputForm.map(input => {
          input.value = ''
          return input
        })
      }
      this.Ordering = false
      this.deleteAllItemsInCart()
      this.OrderingComplete = true
    }
  }
}
</script>

<style module>
.navbarContainer {
  width: 100%;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
  border-radius: 0 0 8px 8px;
  background-color: #FFFFFF;

}
.navbarContent {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 98px;
  max-width: 1800px;
  height: 66px;
  margin: 0 auto;
}
.navbarTittle {
  font-size: 22px;
  font-weight: 700;
}

.imgContainer {
  display: flex;
  flex-direction: row;
  position: relative;
  cursor: default;
  user-select: none;
}

.littleSVG {
  justify-self: flex-end;
  position: relative;
  right: 0;
}

.littleCircle {
  height: 12px;
  width: 12px;
  background-color: gray;
  border-radius: 50%;
  position: absolute;
  right: 0;
  font-size: 10px;
  text-align: center;
  color: white;
}
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
.modalHeaderClose {
  font-weight: 700;
  font-size: 32px;
  cursor: pointer;
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

.modalBodyName {
  color: #59606D;
  font-size: 18px;
  margin-top: 22px;
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
