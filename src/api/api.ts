import axios from 'axios';
import { toggleSpinner } from '../store/reducers/todo-reducer';


let store;

export const injectStore = _store => {
    store = _store
}

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
    store.dispatch(toggleSpinner(false));
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});

export default axiosInstance;
