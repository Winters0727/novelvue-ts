import {  } from 'vuex'

import { createAccount, getAccount, updateAccount, deleteAccount, loginAccount, logoutAccount } from '@/api/account';

interface LoginInfo {
    username : {
        type: string,
        required: true
    },
    password: {
        type: string,
        required: true
    }
}

interface RegisterInfo extends LoginInfo {
    password1: {
        type: string,
        required: true
    },
    password2: {
        type: string,
        required: true
    },
    email? : {
        type: string
    },
    nickname: {
        type : string,
        required : true
    },
    profile_image : {
        type : string,
        default : ''
    }
}

interface UserInfo {
    username : {
        type: string,
        required: true  
    },
    nickname : {
        type: string,
        required: true
    },
    email : {
        type: string,
    },
    profile_image : {
        type: string
    }
}

export default {
  namespaced: true,
  state: {
    token : localStorage.getItem('dj-token'),
    userData : {},
  },
  getters : {
    // isLogin : (state) => {
    //     return (!!state.token || !!localStorage.getItem('dj-token'))
    //   }
  },
  mutations: {
      updateUserData(state: any, payload: UserInfo) {
          state.userData = payload;
      }
  },
  actions: {
      async login(context: any, payload: LoginInfo) {
        //   const data = await (await loginAccount(payload)).data.json();
        const result = await loginAccount(payload);
        const data = result.data;
        console.log(data);
        return data
        // localStorage.setItem('dj-token', data.token);
        // return data
      },

      async logout(context: any) {
          const data = await (await logoutAccount()).data.json();
          context.commit('account/updateUserData', {});
          localStorage.removeItem('dj-token');
          return data;
      },

      async signup(context: any, payload: RegisterInfo) {
          const data = await (await createAccount(payload)).data.json();
          context.commit('account/updateUserData', data.userData);
          const { username, password } = payload;
          context.dispatch('login', {
              username,
              password
          });
          return data; 
      },

      async getInfo(context: any) {
          const data = await (await getAccount()).data.json();
          return data;
      },

      async updateInfo(context: any, payload: RegisterInfo) {
        const data = await (await updateAccount(payload)).data.json();
        context.commit('account/updateUserData', data.userData);
      },

      async deleteUser(context: any) {
          const result = await (await deleteAccount()).data.json();
          return result
      }

  }
}