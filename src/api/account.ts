import { AxiosResponse } from 'axios'

import API from './api'

export const createAccount = (payload: unknown): Promise<AxiosResponse> => API.post('author/', payload);

export const loginAccount = (payload: unknown): Promise<AxiosResponse> => API.post('author/login/', payload, {
    headers : {
        'Authorization' : localStorage.getItem('dj-token')
    }
});

export const getAccount = (): Promise<AxiosResponse> => API.get(`author/user/`, {
    headers : {
        'Authorization' : localStorage.getItem('dj-token')
    }
});

export const logoutAccount = (): Promise<AxiosResponse> => API.get('author/logout/', {
    headers: {
        'Authorization' : localStorage.getItem('dj-token')
    }
})

export const updateAccount = (payload: unknown): Promise<AxiosResponse> => API.put(`author/user/`, payload, {
    headers : {
        'Authorization' : localStorage.getItem('dj-token')
    }
});

export const deleteAccount = (): Promise<AxiosResponse> => API.delete(`author/user/`, {
    headers : {
        'Authorization' : localStorage.getItem('token')
    }
});