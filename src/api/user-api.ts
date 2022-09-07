import api from './api';

export const loginUser = (userInfo) => {
    return api.post('/login', userInfo).then(response => {
        return response.data;
    });
};
