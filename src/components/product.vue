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
          :onPress="() => askBuyProduct(product.product)"
        >
          <Icon name="shopping-cart" color="#fff" />
        </nb-button>
      </view>
    </nb-col>
  </nb-row>
</template>

<script>
import Icon from "react-native-vector-icons/FontAwesome";
import { Toast } from "native-base";
import store from "../store";
import { Alert } from "react-native";

export default {
  props: {
    product: Object
  },
  methods: {
    askBuyProduct(product) {
      Alert.alert(
        "Confirme o pedido",
        `${product.name} -> ${product.price}`,
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => this.buyProduct(product.id) }
        ],
        { cancelable: false }
      );
    },
    buyProduct(product_id) {
      store.dispatch("BUY_PRODUCT", {
        product_id: product_id,
        user_id: store.state.userObj.id,
        price: this.product.product.price
      });
      Toast.show({
        text: "Produto comprado com sucesso.",
        buttonText: "Okay"
      });
    }
  },
  components: {
    Icon
  }
};
</script>

<style>
</style>