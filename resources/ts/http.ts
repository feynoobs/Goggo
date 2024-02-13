import axios from 'axios';

const http = axios.create({
    baseURL: 'http://192.168.33.10',
    withCredentials: true,
})

export default http
