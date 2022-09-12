import api from './api';

export const loginUser = (userInfo) => {
    return api.post('/login', userInfo).then(response => {
        return response.data;
    });
};

export const signUp = (userData) => {
    return api.post('/add-user', userData).then(response => {
        return response.data;
    });
};
