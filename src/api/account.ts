import { AxiosResponse } from 'axios'
import API from './api.js';

export const createAccount = (payload: Object): Promise<AxiosResponse> => API.post('', payload, {
    headers : {
        'Content-Type' : 'application/json',
    }
});

export const getAccount = (_id: String): Promise<AxiosResponse> => API.get(`${_id}`, {
    headers : {
        'Content-Type' : 'application/json',
        'Authorization' : localStorage.getItem('refreshToken')
    }
})