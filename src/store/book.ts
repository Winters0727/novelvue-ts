import { createBook, getBook, getAllBook, updateBook, deleteBook } from '@/api/book';

import { Book, BookState } from '@/types/book';

export default {
  namespaced: true,
  state: {
    bookList : [],
    bookData : {},
  },
  getters : {

  },
  mutations: {
    updateBookList(state: BookState, payload: any) {
      state.bookList = payload;
    },
    updateBookData(state: BookState, payload: Book) {
      state.bookData = payload;
    }
  },
  actions: {
    async getBookList(context: any) {
      const data = await getAllBook();
      context.commit('updateBookList', data.data);
      return data.data;
    },
    async getBookInfo(context: any, payload: string) {
      const data = await getBook(payload);
      return data.data;
    },
  }
}
