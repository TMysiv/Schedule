import axios from 'axios';

const baseURL = 'http://localhost:5100/trains';

export const axiosService = axios.create({
    baseURL
});


