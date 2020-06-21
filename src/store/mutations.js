export function SET_POSTS(state, { posts }) {
    state.loadingPosts = false;
    state.posts = posts;
}

export function FETCHING_LISTS(state) {
    state.loadingPosts = true;
}

export function LOGGING_IN(state, status) {
    state.logging_in = status;
}

export function LOGIN_SUCCESFULL(state, userObj) {
    state.userObj = userObj;
    state.logging_in = false;
    state.wrong_login = false;
}

export function LOGIN_FAILED(state) {
    state.logging_in = false;
    state.wrong_login = true;
}

export function SET_ADRESSES(state, adresses) {
    state.adresses = adresses;
    state.fetchingAddresses = false;
}

export function SET_ADDRESS(state, address) {
    state.selectedAddress = address;
}

export function FETCHING_ADDRESSES(state) {
    state.fetchingAddresses = true;
}