<template>
  <nb-container>
    <nb-header :style="{backgroundColor: '#35654d'}">
      <nb-left>
        <nb-button transparent :on-press="() => navigation.navigate('DrawerOpen')">
          <Icon name="bars" color="#fff" />
        </nb-button>
      </nb-left>
      <nb-body>
        <nb-title>History</nb-title>
      </nb-body>
      <nb-right />
    </nb-header>
    <nb-content padder>
      <scroll-view
        :content-container-style="{contentContainer: {
        paddingVertical: 20
    }}"
      >
        <nb-spinner v-if="fetchingRequests" />
        <nb-list v-else>
          <nb-list-item
            v-for="request in userRequests"
            :key="request.id"
            :onPress="() => console.log(request)"
          >
            <request :request="request" />
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
import Request from "../components/request";
import Icon from "react-native-vector-icons/FontAwesome";

export default {
  props: {
    navigation: {
      type: Object
    }
  },
  computed: {
    userRequests() {
      return store.state.userRequests;
    },
    fetchingRequests() {
      return store.state.fetchingRequests;
    }
  },
  data: function() {
    return {};
  },
  created() {
    this.fetchRequests();
  },
  methods: {
    fetchRequests() {
      store.dispatch("GET_USER_REQUESTS", store.state.userObj.id);
    }
  },
  components: {
    Request,
    Icon
  }
};
</script>