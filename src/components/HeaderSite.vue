<template>
  <header>
    <div class="navbar">
      <div class="container">
        <div class="navbar-content">
          <router-link to="/" class="navbar-logo"> {{ title }} </router-link>
          <ul class="navbar-list">
            <li class="navbar-item" v-for="link in links" :key="link.alias">
              <router-link :to="link.url" class="navbar-link"> {{ link.title }} </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import {links, app} from '@/_config';

export default {
  data() {
    return {
      title: app.title,
      links: links,
    }
  },
}
</script>