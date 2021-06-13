<template>
  <Login :show="showLoginModal" @close="closeLoginModal" />
  <nav v-if="isLogin" class="navbar">
    <router-link
      v-for="link in loginLinkList"
      :key="link.label"
      :to="link.to"
     >
       <button class="link-btn">
         {{ link.label }}
       </button>
     </router-link>
     <button class="link-btn">
       로그아웃
     </button>
  </nav>
  <nav v-else class="navbar">
    <router-link
      v-for="link in logoutLinkList"
      :key="link.label"
      :to="link.to"
     >
       <button class="link-btn">
         {{ link.label }}
       </button>
     </router-link>
     <button class="link-btn" @click="openLoginModal">
       로그인
     </button>
  </nav>
    <router-view class="view" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';

import Login from '@/components/Account/Login.vue'

export default defineComponent({
    name: "Main",

    components : {
      Login
    },

    computed : {
      ...mapGetters(['account/isLogin'])
    },

    methods : {
      openLoginModal() {
        this.showLoginModal = true;
      },
      
      closeLoginModal() {
          this.showLoginModal = false;
      }
    },

    data() {
      return {
        isLogin : null,
        showLoginModal : false,
        loginLinkList : [
          {
            to : {name : 'Main'},
            label : '메인'
          },
          {
            to : {name : 'BookList'},
            label : '소설'
          },
          {
            to : {name : 'MyInfo'},
            label : '내정보'
          },
        ],
        logoutLinkList : [
          {
            to : {name : 'Main'},
            label : '메인'
          },
          {
            to : {name : 'BookList'},
            label : '소설'
          },
        ],        
      }
    },
})
</script>

<style scoped>
* {
    font-family: 'Jua', sans-serif;
    font-size: 1em;
}

a {
  color: navy;
}

a:hover {
  color: blue;
}

a.router-link-active > .link-btn {
  color: blue;
  background-color: cornflowerblue;
}

.navbar {
  background-color: lightskyblue;
  display: flex;
  border: 10px outset darkslateblue;
  justify-content: flex-end;
}

div.container {
  background-color: lightskyblue;
  margin-top: 10px;
}

.link-btn {
  margin: 0 5px;
  text-align: center;
  font-size: 1.5em;
  border: 5px outset darkslateblue;
  border-radius: 10px;
  background-color: lightskyblue;
}

.link-btn:hover {
  color: blue;
  cursor: pointer;
}

</style>