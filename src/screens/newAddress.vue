<template>
  <nb-container>
    <nb-header :style="{backgroundColor: '#35654d'}">
      <nb-left>
        <nb-button transparent :on-press="() => navigation.navigate('DrawerOpen')">
          <Icon name="bars" color="#fff" />
        </nb-button>
      </nb-left>
      <nb-body>
        <nb-title>Cadastro Endereço</nb-title>
      </nb-body>
      <nb-right />
    </nb-header>
    <nb-content padder>
      <nb-form>
        <nb-item>
          <nb-input v-model="street" placeholder="Rua" />
        </nb-item>
        <nb-item>
          <nb-input v-model="number" placeholder="Numero" />
        </nb-item>
        <nb-item>
          <nb-input v-model="cep" placeholder="CEP" />
        </nb-item>
        <nb-item>
          <nb-input v-model="district" placeholder="Bairro" />
        </nb-item>
        <nb-item>
          <nb-input v-model="city" placeholder="Cidade" />
        </nb-item>
        <nb-item>
          <nb-input v-model="state" placeholder="Estado" />
        </nb-item>
        <nb-item last>
          <nb-input v-model="country" placeholder="País" />
        </nb-item>
        <view :style="{marginTop:10}">
          <nb-button block :style="{backgroundColor: '#35654d'}" :on-press="addAddress">
            <nb-text :style="{fontWeight: 'bold'}">Cadastrar</nb-text>
          </nb-button>
        </view>
      </nb-form>
    </nb-content>
  </nb-container>
</template>

<script>
import { Dimensions, Platform, AsyncStorage } from "react-native";
import { Toast } from "native-base";
import { NavigationActions } from "vue-native-router";
import store from "../store";
import Icon from "react-native-vector-icons/FontAwesome";

export default {
  props: {
    navigation: {
      type: Object
    }
  },
  computed: {},
  data: function() {
    return {
      street: "",
      number: "",
      cep: "",
      district: "",
      city: "",
      state: "",
      country: ""
    };
  },
  created() {},
  methods: {
    addAddress() {
      store.dispatch("ADD_ADDRESS", {
        id_user: store.state.userObj.id,
        street: this.street,
        number: this.number,
        cep: this.cep,
        district: this.district,
        city: this.city,
        state: this.state,
        country: this.country
      });
      Toast.show({
        text: "Endereço cadastrado com sucesso",
        buttonText: "Okay"
      });
      setTimeout(() => {
        this.navigation.navigate("Home");
      }, 3000);
    }
  },
  components: { Icon }
};
</script>