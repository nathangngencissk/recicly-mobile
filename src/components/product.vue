<template>
  <nb-row :style="{flex:1, alignItems: 'center'}">
    <nb-col>
      <text :style="{fontSize: 15, color: '#000'}">{{product.partner.name}}</text>
    </nb-col>
    <nb-col>
      <text :style="{fontWeight: 'bold', fontSize: 15, color: '#000'}">{{product.product.name}}</text>
    </nb-col>
    <nb-col>
      <text :style="{fontWeight: 'bold', fontSize: 15, color: '#35654d'}">{{product.product.price}}</text>
    </nb-col>
    <nb-col>
      <view :style="{marginTop:10}">
        <nb-button
          block
          :style="{backgroundColor: '#35654d', borderRadius: 100, height: 50, width: 50}"
        >
          <Icon name="shopping-cart" color="#fff" />
        </nb-button>
      </view>
    </nb-col>
  </nb-row>
</template>

<script>
import Icon from "react-native-vector-icons/FontAwesome";

export default {
  props: {
    product: Object
  },
  components: {
    Icon
  }
};
</script>

<style>
</style>