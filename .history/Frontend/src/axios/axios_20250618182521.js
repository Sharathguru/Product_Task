import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://product-task-4rq6.onrender.com/api/v1/product'
});

export default instance;