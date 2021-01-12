<template>
  <div :class="$style.itemWrapper">
    <div :class="$style.itemHeader">
      <div :class="$style.itemHeaderRating">
        <div :class="$style.itemHeaderLalala">
          <div :class="$style.itemHeaderRatingStar" :style="IconCreator(...IconStyleTwo)"></div>
          <div>{{ item.rating }}</div>
        </div>
      </div>
      <img :class="$style.itemHeaderPhoto" :src="url + item.photo"/>
      <div :class="$style.itemHeaderCart" :style="IconCreator(...IconStyle)" @click.stop="addItemInCart(item)"></div>
    </div>
    <div :class="$style.itemName">{{ item.name }}</div>
    <div :class="$style.itemPrice">{{ PriceChanger(item.price) }}</div>
  </div>
</template>

<script>
import {mapActions} from "vuex"
import priceMixin from "@/mixins/PriceChanger/index";
import iconMixin from "@/mixins/IconCreator/index"

export default {
  data() {
    return {
      url: "https://frontend-test.idaproject.com",
      IconStyle: [24, 24, '/Cart.svg', 'no-repeat', '100% 100%'],
      IconStyleTwo: [18, 18, '/Star.svg', 'no-repeat', '100% 100%'],
    }
  },
  mixins: [priceMixin, iconMixin],
  props: ["item"],
  methods: {
    ...mapActions("Cart", ["addItemInCart"]),
  }
}
</script>

<style module>
.itemWrapper {
  height: 272px;
  width: 100%;
  background: #FFFFFF;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  padding: 14px;
}

.itemHeader {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
}

.itemHeaderRating {
  width: 15%;
  color: #F2C94C;
  font-weight: 700;

}

.itemHeaderLalala {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.itemHeaderRatingStar {
  width: 18px;
  height: 18px;
}

.itemHeaderPhoto {
  height: 200px;
}

.itemHeaderCart {
  min-width: 24px;
  height: 24px;
  transition: .3s;
  opacity: .4;
  cursor: pointer;
}

.itemHeaderCart:hover {
  opacity: 1;
  -webkit-animation: swing 1s ease;
  animation: swing 1s ease;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
}

.itemHeaderCart:active {
  opacity: .5;
}

.itemName {
  color: #59606D;
  font-size: 14px;
  margin-top: 5px;
}

.itemPrice {
  font-size: 14px;
  margin-top: 5px;
  font-weight: 700;
}

@-webkit-keyframes swing {
  20% {
    -webkit-transform: rotate3d(0, 0, 1, 15deg);
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    -webkit-transform: rotate3d(0, 0, 1, -10deg);
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    -webkit-transform: rotate3d(0, 0, 1, 5deg);
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    -webkit-transform: rotate3d(0, 0, 1, -5deg);
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    -webkit-transform: rotate3d(0, 0, 1, 0deg);
    transform: rotate3d(0, 0, 1, 0deg);
  }
}

@keyframes swing {
  20% {
    -webkit-transform: rotate3d(0, 0, 1, 15deg);
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    -webkit-transform: rotate3d(0, 0, 1, -10deg);
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    -webkit-transform: rotate3d(0, 0, 1, 5deg);
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    -webkit-transform: rotate3d(0, 0, 1, -5deg);
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    -webkit-transform: rotate3d(0, 0, 1, 0deg);
    transform: rotate3d(0, 0, 1, 0deg);
  }
}
</style>
