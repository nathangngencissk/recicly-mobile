/**
 * reference
 * https://github.com/weexteam/weex-hackernews/tree/master/src/store
 */

import Vue from 'vue-native-core';
import Vuex from 'vuex';
import * as actions from './actions';
import * as mutations from './mutations';

Vue.use(Vuex);

const store = new Vuex.Store({
    actions,
    mutations,

    state: {
        activeType: 'posts',
        posts: [],
        logging_in: false,
        userObj: {},
        wrong_login: false,
        loadingPosts: false,
        adresses: [],
        fetchingAddresses: false,
        selectedAddress: {},
        userRequests: [],
        selectedRequest: {},
        fetchingRequests: false,
        fetchingProducts: false,
        products: [],
        fetchingOrders: false,
        orders: []
    }
});

export default store;
