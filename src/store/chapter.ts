import { createChapter, getChapter, getAllChapter, updateChapter, deleteChapter } from '@/api/chapter';

import { createStore } from 'vuex';

import { ChapterQuery } from '@/types/chapter'

export default {
  namespaced: true,
  state: {
    chapterList : [],
    chapterData : {},
  },
  getters : {

  },
  mutations: {

  },
  actions: {
    async getChapterList(context: any, payload: ChapterQuery) {
      const data = await getAllChapter(payload);
      return data.data;
    }
  }
};
