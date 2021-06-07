<template>
  <div>
    <div v-if="isLoading">요</div>
    <div v-else style="display:inline" v-for="book in bookList" :key="book.id">
      <img :src="book.cover" />
      <p>{{ book.title }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
    name: "",

    props: {

    },

    setup() {
      const store = useStore();
      const isLoading = ref(false);

      let bookList;

      isLoading.value = true;
      store.dispatch('account/login', {
        username:"winters",
        password:"winters001!"
      }).then(() => {
        store.dispatch('book/getBookList').then(res => {
        bookList = res;
        isLoading.value = false;
        })
      })
      return {
        bookList,
        isLoading:isLoading.value
      }
    }
})
</script>

<style>

</style>