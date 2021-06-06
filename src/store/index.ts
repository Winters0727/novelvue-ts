import account from './account.js'

import { createStore } from 'vuex';


export default createStore({
  state: {
    token : localStorage.getItem('dj-token')
  },
  getters : {
    isLogin : (state) => {
      return !!state.token || !!localStorage.getItem('dj-token')
    }
  },
  mutations: {

  },
  actions: {

  },
  modules: {
    account
  },
});
