<template>
  <div class="wrapper">
    <HeaderSite />
    <div class="wrapper-content">
      <div class="container">
        <router-view />
      </div>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <FooterSite />
  </div>
</template>

<script lang="ts">
import HelloWorld from './components/HelloWorld.vue';
import HeaderSite from '@/components/HeaderSite.vue';
import FooterSite from '@/components/FooterSite.vue';

interface IPerson {
  id: number,
  title: string,
  isMale: boolean
}

export default {
  data() {
    return {
      wizard: {
        id: 9,
        title: 'wizard',
        isMale: true,
      } as IPerson
    }
  },

  components: {
    HelloWorld,
    HeaderSite,
    FooterSite,
  },

  computed: {
    getName():string {
      return this.wizard.title;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
