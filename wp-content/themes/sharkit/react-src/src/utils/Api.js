import axios from 'axios';

const api = axios.create({
    baseURL: 'https://sharkit.rudolf.dev/',
});

export default api;