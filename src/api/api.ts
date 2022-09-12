import axios from 'axios';
import { toggleSpinner } from '../store/reducers/todo-reducer';
import { toast } from 'react-toastify';
import { loginUser } from './user-api';

let store;

export const injectStore = _store => {
    store = _store;
};

const axiosInstance = axios.create({
    baseURL: `http://localhost:3002/`
});

axiosInstance.interceptors.request.use(function (config) {
    // Do something before request is sent
    store.dispatch(toggleSpinner(true));
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
axiosInstance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    store.dispatch(toggleSpinner(false));
    return response;
}, function (error) {
    console.log(error);
    store.dispatch(toggleSpinner(false));
    toast(error.response.data.length ? error.response.data : 'Unexpected error', { type: 'error' });
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});

export default axiosInstance;
