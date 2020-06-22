<template>
  <nb-container>
    <nb-header :style="{backgroundColor: '#35654d'}">
      <nb-left>
        <nb-button transparent :on-press="() => navigation.navigate('DrawerOpen')">
          <Icon name="bars" color="#fff" />
        </nb-button>
      </nb-left>
      <nb-body>
        <nb-title>Loja</nb-title>
      </nb-body>
      <nb-right />
    </nb-header>
    <nb-content padder>
      <scroll-view
        :content-container-style="{contentContainer: {
        paddingVertical: 20
    }}"
      >
        <text :style="{fontSize: 20, fontWeight: 'bold', color: '#35654d'}">{{userPoints}} pts</text>
        <nb-spinner v-if="fetchingProducts" />
        <nb-list v-else>
          <nb-list-item
            v-for="product in products"
            :key="product.id"
            :onPress="() => console.log(product)"
          >
            <product :product="product" />
          </nb-list-item>
        </nb-list>
      </scroll-view>
    </nb-content>
  </nb-container>
</template>

<script>
import { Dimensions, Platform, AsyncStorage } from "react-native";
import { NavigationActions } from "vue-native-router";
import store from "../store";
import Product from "../components/product";
import Icon from "react-native-vector-icons/FontAwesome";

export default {
  props: {
    navigation: {
      type: Object
    }
  },
  computed: {
    products() {
      return store.state.products;
    },
    fetchingProducts() {
      return store.state.fetchingProducts;
    },
    userPoints() {
      return store.state.userObj.points;
    }
  },
  data: function() {
    return {};
  },
  created() {
    this.fetchProducts();
  },
  methods: {
    fetchProducts() {
      store.dispatch("FETCH_PRODUCTS");
    }
  },
  components: {
    Product,
    Icon
  }
};
</script>