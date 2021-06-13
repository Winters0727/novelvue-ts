<template>
  <div class="container">
    <img id="loading-image" v-if="isLoading" src="@/assets/loading.gif" />
    <div v-else class="novel-card-list" >
      <book-card 
        v-for="book in bookList" 
        :key="book.id" 
        :book="book" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapState, mapMutations, mapActions } from 'vuex';
import store from '@/store';

import BookCard from '@/components/Book/BookCard.vue';

export default defineComponent({
    name: "BookList",

    components : {
      BookCard
    },

    data() {
      return {
        bookList: [],
        isLoading: false,
      }
    },

    computed : {
      ...mapState(['book/bookData']),
    },
    
    methods : {
      ...mapMutations(['book/updateBookData']),

      ...mapActions(['book/getBookList']),
    },

    async created() {
      this.isLoading = true;
      this.bookList = await store.dispatch('book/getBookList');
      this.isLoading = false;
    }
})

// import { getBook } from '@/api/book';
// import { defineComponent, ref } from 'vue';
// import { useStore } from 'vuex';

// export default defineComponent({
//     name: "",

//     props: {

//     },

//     setup() {
//       const store = useStore();
//       const isLoading = ref(false);
//       const bookList = ref(null);

//       const getBookList = async () => {
//         isLoading.value = true;
//         try {
//           await store.dispatch('account/login', { username:"winters", password:"winters001!" });
//           const data = await store.dispatch('book/getBookList');
//           bookList.value = data.data;
//           isLoading.value = false;
//         }
//         catch(err) {
//           console.log(err);
//         }
//       }

//       getBookList();

//       return {
//         bookList: store.state.book.bookList,
//         isLoading
//       }
//     }
// })
</script>

<style scoped>
.container {
  margin: auto;
  text-align: center;
  align-content: center;
}

.novel-card-list {
  text-align: center;
}

#loading-image {
  text-align: center;
  align-self: center;
}
</style>