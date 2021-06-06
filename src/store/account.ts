import { createStore } from 'vuex';

import { createAccount, getAccount, updateAccount, deleteAccount, loginAccount, logoutAccount } from '@/api/account';

interface LoginInfo {
    username : {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}

interface RegisterInfo extends LoginInfo {
    password1: {
        type: String,
        required: true
    },
    password2: {
        type: String,
        required: true
    },
    email? : {
        type: String
    },
    nickname: {
        type : String,
        required : true
    },
    profile_image : {
        type : String,
        default : ''
    }
}

interface UserInfo {
    username : {
        type: String,
        required: true  
    },
    nickname : {
        type: String,
        required: true
    },
    email : {
        type: String,
    },
    profile_image : {
        type: String
    }
}

export default createStore({
  state: {
    token : localStorage.getItem('dj-token'),
    userData : {

    },
  },
  getters : {
    
  },
  mutations: {
      updateUserData(state, payload: UserInfo) {
          state.userData = payload;
      }
  },
  actions: {
      async login(_, payload: LoginInfo) {
          const data = await (await loginAccount(payload)).data.json();
          localStorage.setItem('dj-token', data.token);
          return data
      },

      async logout(context) {
          const data = await (await logoutAccount()).data.json();
          context.commit('updateUserData', {});
          localStorage.removeItem('dj-token');
          return data;
      },

      async signup(context, payload: RegisterInfo) {
          const data = await (await createAccount(payload)).data.json();
          context.commit('updateUserData', data.userData);
          const { username, password } = payload;
          context.dispatch('login', {
              username,
              password
          });
          return data; 
      },

      async getInfo(_) {
          const data = await (await getAccount()).data.json();
          return data;
      },

      async updateInfo(context, payload: RegisterInfo) {
        const data = await (await createAccount(payload)).data.json();
        context.commit('updateUserData', data.userData);
      }

  },
  modules: {
    
  },
});
