<template>
  <nb-container :style="{flex:1, backgroundColor: '#fff'}">
    <nb-header :style="{backgroundColor: '#35654d'}">
      <nb-left>
        <nb-button transparent :on-press="() => navigation.navigate('DrawerOpen')">
          <Icon name="bars" color="#fff" />
        </nb-button>
      </nb-left>
      <nb-body>
        <nb-title>Inicio</nb-title>
      </nb-body>
      <nb-right />
    </nb-header>
    <nb-content padder>
      <nb-row :style="{flex:1, alignItems: 'center'}">
        <nb-col>
          <image
            v-if="profilePicture"
            :style="{width: 100, height: 100, borderRadius: 50, margin: 25}"
            :source="{uri: profilePicture}"
          />
          <image
            v-else
            :style="{width: 100, height: 100, borderRadius: 50, margin: 25}"
            :source="require('../../assets/user.png')"
          />
        </nb-col>
        <nb-col>
          <text :style="{fontSize: 20, color: '#35654d'}">{{userName}}</text>
          <text :style="{fontSize: 20, fontWeight: 'bold', color: '#35654d'}">{{userPoints}} pts</text>
        </nb-col>
      </nb-row>
      <nb-spinner v-if="fetchingAddresses" />
      <nb-list v-else>
        <nb-list-item
          v-for="address in userAddresses"
          :key="address.id"
          :onPress="() => changeAddress(address)"
        >
          <nb-left>
            <nb-text>{{address.street}}</nb-text>
          </nb-left>
          <nb-right>
            <nb-radio :selected="address==selectedAddress" />
          </nb-right>
        </nb-list-item>
      </nb-list>
      <view :style="{marginTop:10}">
        <nb-button
          block
          :style="{backgroundColor: '#35654d'}"
          :on-press="() => navigation.navigate('NewAddress')"
        >
          <Icon name="plus" color="#fff" />
          <nb-text>Novo Endereço</nb-text>
        </nb-button>
      </view>
      <view :style="{marginTop:10}">
        <nb-button block :style="{backgroundColor: '#35654d'}" :on-press="askDelivery">
          <nb-text :style="{fontWeight: 'bold'}">Pedir Motorista</nb-text>
        </nb-button>
      </view>
    </nb-content>
  </nb-container>
</template>

<script>
import React from "react";
import Item from "../components/item";
import { Dimensions } from "react-native";
import { NavigationActions } from "vue-native-router";
import store from "../store";
import Icon from "react-native-vector-icons/FontAwesome";
import { Alert } from "react-native";
import { Toast } from "native-base";

const SCREEN_WIDTH = Dimensions.get("window").width;

export default {
  computed: {
    items() {
      return store.state.posts;
    },
    loading() {
      return store.state.loadingPosts;
    },
    profilePicture() {
      return store.state.userObj.profile_picture;
    },
    userPoints() {
      return store.state.userObj.points;
    },
    userName() {
      return store.state.userObj.name;
    },
    userAddresses() {
      return store.state.adresses;
    },
    fetchingAddresses() {
      return store.state.fetchingAddresses;
    },
    selectedAddress() {
      return store.state.selectedAddress;
    }
  },
  props: {
    navigation: {
      type: Object
    }
  },
  created() {
    this.fetchAddresses();
  },
  methods: {
    fetchAddresses() {
      return store.dispatch("GET_USER_ADRESSES", store.state.userObj.id);
    },
    navigate() {
      this.navigation.navigate("Home");
    },
    startRequest() {
      store.dispatch("START_REQUEST", {
        user_id: store.state.userObj.id,
        address_id: this.selectedAddress.id
      });
      this.navigation.navigate("History");
    },
    changeAddress(address) {
      return store.dispatch("SET_ADDRESS", address);
    },
    askDelivery: function() {
      if (this.selectedAddress.id) {
        Alert.alert(
          "Confirme o endereço",
          `${this.selectedAddress.street}, ${this.selectedAddress.number}. ${this.selectedAddress.district}, ${this.selectedAddress.state}, ${this.selectedAddress.country}`,
          [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel"
            },
            { text: "OK", onPress: () => this.startRequest() }
          ],
          { cancelable: false }
        );
      } else {
        Toast.show({
          text: "Selecione um endereço",
          buttonText: "Okay"
        });
      }
    }
  },
  components: {
    Item,
    Icon
  }
};
</script>