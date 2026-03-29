import axios from 'axios';

const api = axios.create({
    baseURL: 'https://your-backend-url.com/api', // Replace with your actual backend URL
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});

export default api;