import {  } from 'vuex'

import { createAccount, getAccount, updateAccount, deleteAccount, loginAccount, logoutAccount } from '@/api/account';

import { LoginInfo, RegisterInfo, UserInfo } from '@/types/account'

export default {
  namespaced: true,
  state: {
    token : localStorage.getItem('dj-token'),
    userData : {},
  },
  getters : {
    isLogin : (state: any) => {
        return (!!state.token || !!localStorage.getItem('dj-token'))
      }
  },
  mutations: {
      updateUserData(state: any, payload: UserInfo) {
          state.userData = payload;
      }
  },
  actions: {
      async login(context: any, payload: LoginInfo) {
        const result = await loginAccount(payload);
        const data = result.data;
        console.log(data);
        localStorage.setItem('dj-token', data.key);
        return data
      },

      async logout(context: any) {
          const result = await logoutAccount();
          const data = result.data;
          context.commit('account/updateUserData', {});
          localStorage.removeItem('dj-token');
          return data;
      },

      async signup(context: any, payload: RegisterInfo) {
          const result = await createAccount(payload);
          const data = result.data;
          context.commit('account/updateUserData', data.userData);
          const { username, password } = payload;
          context.dispatch('login', {
              username,
              password
          });
          return data; 
      },

      async getInfo(context: any) {
          const result = await getAccount();
          const data = result.data;
          return data;
      },

      async updateInfo(context: any, payload: RegisterInfo) {
        const result = await updateAccount(payload);
        const data = result.data;
        context.commit('account/updateUserData', data.userData);
      },

      async deleteUser(context: any) {
          const result = await deleteAccount();
          const data = result.data;
          return data;
      }

  }
}