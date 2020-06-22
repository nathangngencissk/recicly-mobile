<template>
  <nb-row :style="{flex:1, alignItems: 'center'}">
    <nb-col>
      <text>{{orderDate}}</text>
    </nb-col>
    <nb-col>
      <text :style="{fontWeight: 'bold', fontSize: 15, color: '#35654d'}">{{order.product.name}}</text>
    </nb-col>
    <nb-col>
      <text :style="{fontWeight: 'bold', fontSize: 15, color: '#35654d'}">{{order.product.price}}</text>
    </nb-col>
  </nb-row>
</template>

<script>
import Icon from "react-native-vector-icons/FontAwesome";

export default {
  computed: {
    orderDate() {
      let unix_timestamp = this.order.timestamp;
      let date = new Date(unix_timestamp * 1000);
      return `${date.getDate()}/${date.getMonth()}`;
    }
  },
  props: {
    order: Object
  },
  components: {
    Icon
  }
};
</script>

<style>
</style>