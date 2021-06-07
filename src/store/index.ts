import account from './account'
import book from './book'
import chapter from './chapter'
import review from './review'

import { createStore } from 'vuex';


export default createStore({
  state: {
    token : localStorage.getItem('dj-token')
  },
  getters : {
    
  },
  mutations: {

  },
  actions: {

  },
  modules: {
    account,
    book,
    chapter,
    review
  },
});
