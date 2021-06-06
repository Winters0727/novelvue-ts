import axios from 'axios';

export default axios.create({
    baseURL: process.env.VUE_APP_BACKEND_URL,
    withCredentials: true,
    headers: {
        'Content-type': 'application/json',
    }
});