import { useCookie } from '@vue-composable/cookie';

import { createStore } from 'vuex';

let { cookie } = useCookie('devcom-token');

export default createStore({
  state: {
    token : cookie.value,
    refreshToken : localStorage.getItem('devcom-refreshToken')
  },
  getters : {
    isLogin : (state) => {
      return !!state.token || !!state.refreshToken
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
