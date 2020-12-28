<template>
  <div :class="$style.itemWrapper">
    <img :class="$style.itemPhoto" :src="url + item.photo"/>
    <div :class="$style.itemInfoWrapper">
      <div :class="$style.itemName">{{ item.name }}</div>
      <div :class="$style.itemPrice">{{ PriceChanger(item.price) }}</div>
      <div :class="$style.itemRating">{{ item.rating }}</div>
    </div>
    <div :class="$style.itemTrashWrapper">
      <div @click.stop="deleteItemInCart(index)" :class="$style.itemTrash" :style="IconCreator(...iconStyle)"></div>
    </div>
  </div>
</template>

<script>
import priceMixin from "@/mixins/PriceChanger/index";
import iconMixin from "@/mixins/IconCreator/index"
import {mapActions} from "vuex"

export default {
  data() {
    return {
      iconStyle: [22, 22, '/Trash.svg', 'no-repeat', '100% 100%'],
      url: "https://frontend-test.idaproject.com"
    }
  },
  mixins: [priceMixin, iconMixin],
  props: ["item", "index"],
  mounted() {

  },
  methods: {
    ...mapActions("Cart", ["deleteItemInCart"])
  }
}
</script>

<style module>
.itemWrapper {
  width: 100%;
  height: 120px;
  margin-top: 14px;
  display: flex;
  flex-direction: row;
}

.itemPhoto {
  height: 100%;
}

.itemInfoWrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 193px;
}

.itemName {
  color: #59606D;
  font-size: 14px;
  min-height: 32px;
}

.itemPrice {
  font-size: 14px;
  font-weight: 700;
  margin-top: 10px;
}

.itemRating {
  margin-top: 20px;
  color: #F2C94C;
}

.itemTrashWrapper {
  width: 66px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.itemTrash {
  width: 22px;
  height: 22px;
  cursor: pointer;;
}
.itemTrash:hover {
  -webkit-animation: shake .5s ease-in-out;
  animation: shake .5s ease-in-out;
}

@-webkit-keyframes shake {
  0% {
    -webkit-transform: translateX(0);
  }

  20% {
    -webkit-transform: translateX(-5px);
  }

  40% {
    -webkit-transform: translateX(5px);
  }

  60% {
    -webkit-transform: translateX(-2px);
  }

  80% {
    -webkit-transform: translateX(2px);
  }

  100% {
    -webkit-transform: translateX(0);
  }
}
@keyframes shake {
  0% {
    transform: translateX(0);
  }

  20% {
    transform: translateX(-5px);
  }

  40% {
    transform: translateX(5px);
  }

  60% {
    transform: translateX(-2px);
  }

  80% {
    transform: translateX(2px);
  }

  100% {
    transform: translateX(0);
  }
}
</style>
