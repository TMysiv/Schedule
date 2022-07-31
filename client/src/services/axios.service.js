import axios from 'axios';

const baseURL = 'api/trains';

export const axiosService = axios.create({
    baseURL
});


