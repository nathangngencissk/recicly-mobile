import axios from 'axios';

const baseURL = 'https://jsonplaceholder.typicode.com';

export function _fetch(path) {
    return axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then(res => (this.items = res.data))
        .catch(err => console.log(err));
}

export function fetchPosts(type) {
    return _fetch(`${type}`);
}
