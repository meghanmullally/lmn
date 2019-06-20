import Vue from "vue";
import Router from "vue-router";
import home from "./views/home.vue";
import photo from "./views/photo.vue";
import prices from "./views/prices.vue";
import things from "./views/things.vue";
// import weather from "./views/weather.vue";
import contact from "./views/contact.vue";


Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/home",
      name: "home",
      component: home
    },
    
    {
      path: "/prices",
      name: "prices",
      component: prices
    },
    {
      path: "/photo",
      name: "photo",
      component: photo
    },
    {
      path: "/things",
      name: "things",
      component: things
    },
    // {
    //   path: "/weather",
    //   name: "weather",
    //   component: weather
    // },
    {
      path: "/contact",
      name: "contact",
      component: contact
    }

  ]
});