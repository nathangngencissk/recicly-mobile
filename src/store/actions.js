import { fetchPosts, login, fetchAdresses, fetchRequests, addRequest } from './fetch';
import { AsyncStorage } from 'react-native';

// ensure data for rendering given list type
export function FETCH_LIST_DATA({ commit, dispatch }, { type }) {
    commit('FETCHING_LISTS');
    return fetchPosts(type)
        .then(posts => {
            return commit('SET_POSTS', { posts })
        });
}

export function LOGIN({ commit, dispatch }, { userObj, navigate }) {
    commit('LOGGING_IN', true)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            login(userObj)
                .then(res => {
                    let user = res.user
                    if (user.id) {
                        commit('LOGIN_SUCCESFULL', user);
                        AsyncStorage.setItem('email', user.email);
                        dispatch('GET_USER_ADRESSES', user.id);
                        commit('FETCHING_ADDRESSES');
                        navigate('Home');
                        resolve();
                    }
                    else {
                        commit('LOGIN_FAILED')
                    }
                });
        }, 1000)
    })
}

export function SET_USER({ commit, state }, { userObj }) {
    return commit('LOGIN_SUCCESFULL', { userObj })
}

export function LOGOUT({ commit, state }, callback) {
    return new Promise((resolve, reject) => {
        AsyncStorage.removeItem('email').then(() => {
            callback();
            resolve();
        })
    })
}

export function GET_USER_ADRESSES({ commit, dispatch }, id) {
    return fetchAdresses(id)
        .then(adresses => {
            return commit('SET_ADRESSES', adresses)
        });
}

export function SET_ADDRESS({ commit, state }, address) {
    return commit('SET_ADDRESS', address)
}

export function GET_USER_REQUESTS({ commit, dispatch }, id) {
    commit('FETCHING_REQUESTS', true)
    return fetchRequests(id)
        .then(requests => {
            return commit('SET_REQUESTS', requests)
        });
}

export function SET_REQUEST({ commit, state }, request) {
    return commit('SET_REQUEST', request)
}

export function START_REQUEST({ commit, state }, id) {
    return addRequest(id)
        .then(res => {
            console.log(res)
        });
}