<template>
  <nb-container>
    <nb-header :style="{backgroundColor: '#35654d'}">
      <nb-left>
        <nb-button transparent :on-press="() => navigation.navigate('DrawerOpen')">
          <Icon name="bars" color="#fff" />
        </nb-button>
      </nb-left>
      <nb-body>
        <nb-title>Pedidos</nb-title>
      </nb-body>
      <nb-right />
    </nb-header>
    <nb-content padder>
      <scroll-view
        :content-container-style="{contentContainer: {
        paddingVertical: 20
    }}"
      >
        <nb-spinner v-if="fetchingOrders" />
        <nb-list v-else>
          <nb-list-item
            v-for="order in userOrders"
            :key="order.id"
            :onPress="() => console.log(order)"
          >
            <order :order="order" />
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
import Order from "../components/order";
import Icon from "react-native-vector-icons/FontAwesome";

export default {
  props: {
    navigation: {
      type: Object
    }
  },
  computed: {
    userOrders() {
      return store.state.userOrders;
    },
    fetchingOrders() {
      return store.state.fetchingOrders;
    }
  },
  data: function() {
    return {};
  },
  created() {
    this.fetchOrders();
  },
  methods: {
    fetchOrders() {
      store.dispatch("GET_USER_ORDERS", store.state.userObj.id);
    }
  },
  components: {
    Order,
    Icon
  }
};
</script>