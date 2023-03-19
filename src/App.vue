<template>
  <div class="wrapper">
    <HeaderSite />
    <div class="wrapper-content">
      <div class="container">
        <router-view />
      </div>
    </div>
    <FooterSite />
  </div>
</template>

<script>

import HeaderSite from '@/components/HeaderSite.vue'
import FooterSite from '@/components/FooterSite.vue'

export default {
  components: {HeaderSite, FooterSite},
};
</script>

<style lang="scss">
</style>