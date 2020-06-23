<template>
  <nb-container>
    <nb-header :style="{backgroundColor: '#35654d'}">
      <nb-body>
        <nb-title>Cadastro</nb-title>
      </nb-body>
    </nb-header>
    <nb-content padder>
      <nb-form>
        <nb-item>
          <nb-input v-model="name" placeholder="Nome" />
        </nb-item>
        <nb-item>
          <nb-input v-model="cpf" placeholder="CPF" />
        </nb-item>
        <nb-item>
          <nb-input v-model="email" placeholder="Email" />
        </nb-item>
        <nb-item last>
          <nb-input
            auto-capitalize="none"
            secure-text-entry
            v-model="password"
            placeholder="Senha"
          />
        </nb-item>
        <view :style="{marginTop:10}">
          <nb-button block :style="{backgroundColor: '#35654d'}" :on-press="addUser">
            <nb-text :style="{fontWeight: 'bold'}">Cadastrar</nb-text>
          </nb-button>
        </view>
        <view :style="{marginTop:10}">
          <nb-button
            block
            :style="{backgroundColor: '#35654d'}"
            :on-press="() => navigation.navigate('Login')"
          >
            <nb-text>Login</nb-text>
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
      name: "",
      cpf: "",
      email: "",
      password: ""
    };
  },
  created() {},
  methods: {
    addUser() {
      store.dispatch("ADD_USER", {
        name: this.name,
        cpf: this.cpf,
        email: this.email,
        password: this.password
      });
      Toast.show({
        text: "Cadastro efetuado com sucesso. Redirecionando",
        buttonText: "Okay"
      });
      setTimeout(() => {
        this.navigation.navigate("Login");
      }, 3000);
    }
  },
  components: { Icon }
};
</script>