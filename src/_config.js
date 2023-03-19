const app = {
  title: "app",
}

const links = [
  {
    title: "Home",
    alias: "home",
    url: "/",
  },
  {
    title: "About",
    alias: "about",
    url: "/about",
  }
];

const API_URL = process.env.VUE_APP_API_URL

export {links, app, API_URL};