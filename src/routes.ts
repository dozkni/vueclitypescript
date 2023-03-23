import {createRouter, createWebHistory} from "vue-router";

import homePage from '@/pages/homePage.vue'
import aboutPage from '@/pages/aboutPage.vue'
import notFoundPage from '@/pages/notFoundPage.vue'

const routes = [
    {
      path: "/",
      name: "home",
      component: homePage,
    },
    {
      path: "/about",
      name: "about",
      component: aboutPage,
    },
    {
      path: "/:CatchAll(.*)",
      name: "404",
      component: notFoundPage,
    },
  ]

const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
})

export default router;