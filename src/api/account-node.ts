import { AxiosResponse } from 'axios'

import API from './api'

export const createAccount = (payload: Object): Promise<AxiosResponse> => API.post('author/', payload);

export const loginAccount = (payload: Object): Promise<AxiosResponse> => API.post('author/login/', payload, {
    headers : {
        'Authorization' : localStorage.getItem('refreshToken')
    }
});

export const getAccount = (_id: String): Promise<AxiosResponse> => API.get(`author/${_id}`, {
    headers : {
        'Authorization' : localStorage.getItem('refreshToken')
    }
});

export const logoutAccount = (): Promise<AxiosResponse> => API.get('author/logout/', {
    headers: {
        'Authorization' : localStorage.getItem('refreshToken')
    }
})

export const updateAccount = (_id: String, payload: Object): Promise<AxiosResponse> => API.put(`author/${_id}`, payload, {
    headers : {
        'Authorization' : localStorage.getItem('refreshToken')
    }
});

export const deleteAccount = (_id: String): Promise<AxiosResponse> => API.delete(`author/${_id}`, {
    headers : {
        'Authorization' : localStorage.getItem('refreshToken')
    }
});