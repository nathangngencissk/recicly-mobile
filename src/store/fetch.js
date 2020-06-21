import axios from 'axios';

const baseURL = 'https://t67vqv0hkk.execute-api.us-east-1.amazonaws.com/Prod';

export function _fetch(path, data = {}) {
    return axios
        .get(`${baseURL}/${path}`, data)
        .then(res => res.data)
        .catch(err => console.log(err));
}

export function _post(path, data) {
    return axios
        .post(`${baseURL}/${path}`, data)
        .then(res => res.data)
        .catch(err => console.log(err));
}

export function _put(path, data) {
    return axios
        .put(`${baseURL}/${path}`, data)
        .then(res => res.data)
        .catch(err => console.log(err));
}

export function _delete(path, data) {
    return axios
        .delete(`${baseURL}/${path}`, data)
        .then(res => res.data)
        .catch(err => console.log(err));
}

export function fetchUsers() {
    return _fetch('user/get-all'); // get, add, update, delete
}

export function login(userData) {
    return _post('user/authenticate', userData)
}

export function fetchPosts(type) {
    return _fetch(`${type}`);
}

export function fetchAdresses(id) {
    return _fetch(`user/adresses?id=${id}`);
}

export function fetchRequests(id) {
    return _fetch(`user/requests?id=${id}`);
}

export function addRequest(id) {
    return _post('user/start-request', { id: id });
}
