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

export function FETCHING_REQUESTS(state) {
    state.fetchingRequests = true;
}

export function SET_REQUESTS(state, requests) {
    state.fetchingRequests = false;
    state.userRequests = requests;
}

export function SET_REQUEST(state, request) {
    state.selectedRequest = request;
}

export function FETCHING_PRODUCTS(state) {
    state.fetchingProducts = true;
}

export function SET_PRODUCTS(state, products) {
    state.fetchingProducts = false;
    state.products = products;
}

export function FETCHING_ORDERS(state) {
    state.fetchingOrders = true;
}

export function SET_ORDERS(state, orders) {
    state.fetchingOrders = false;
    state.userOrders = orders;
}