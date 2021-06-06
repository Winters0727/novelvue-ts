<template>
  <nav id="nav">
    <router-link to="/">Home</router-link>
  </nav>
    <router-view/>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue';

interface RouterLink {
  name: {
    type: String,
    required: true,
  },
  link : {
    type: String,
    required: true,
  }
}

export default defineComponent({
    name: "Main",

    setup() {
      const isLogin: Boolean = !!localStorage.getItem('token');
 
      const loginLinks: any = reactive([

      ]);
      const logoutLinks: any = reactive([

      ]);

      const links: RouterLink[] = isLogin ? loginLinks.value : logoutLinks.value;

        return {
          isLogin,
          links
        }
    }
})
</script>

<style>

</style>