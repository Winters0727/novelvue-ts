import { createBook, getBook, getAllBook, updateBook, deleteBook } from '@/api/book';

interface Book {
  title: {
    type: string,
    required: true
  },
  cover: {
    type: string
  }
}

export default {
  namespaced: true,
  state: {
    bookList : [],
    bookData : {

    },
  },
  getters : {

  },
  mutations: {
    updateBookList(state: any, payload: any) {
      state.bookList = payload;
    },
    updateBookData(state: any, payload: Book) {
      state.bookData = payload;
    }
  },
  actions: {
    async getBookList(context: any) {
      const data = await getAllBook();
      context.commit('updateBookList', data.data);
      return data.data;
    }
  }
}
