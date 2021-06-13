<template>
  <div>
    <div class="book-info">
    
    </div>
    <ul class="chapter-list">
      <li class="chapter-list-item" v-for="chapter in chapterList" :key="chapter.id">
        <chapter-item :chapter="chapter" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapState, mapMutations, mapActions } from 'vuex';
import store from '@/store';

import ChapterItem from '@/components/Chapter/ChapterItem.vue'

export default defineComponent({
    name: "",

    props: ['bookId'],

    components : { ChapterItem },

    data() {
      return {
        chapterList: [],
      }
    },

    methods: {
      ...mapActions(['book/getBookInfo', 'chapter/getChapterList']),

    },

    async created() {
      // const bookData = await store.dispatch('book/getBookInfo', this.$props.bookId);
      this.chapterList = await store.dispatch('chapter/getChapterList', {
        book : this.$props.bookId
      })
      console.log(this.chapterList);
    }
})
</script>

<style scoped>

.chapter-list {
  border: 5px mediumspringgreen solid;
  background: mintcream;
  text-align: center;
}

.chapter-list > .chapter-list-item {
  margin: 10px 0 10px 0;
  list-style: square;
  bottom: 3px green solid;
}

</style>