import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Development from "./views/Development.vue";
import Articles from "./views/Articles.vue";
import UberconfBad from "./views/articles/UberconfBad.vue";
import UberconfGood from "./views/articles/UberconfGood.vue";
import ExampleArticle from "./views/articles/ExampleArticle.vue";
import TylersTasting from "./views/TylersTasting.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
      path: "/dev",
      name: "dev",
      component: Development
    },
    {
      path: "/articles",
      name: "articles",
      component: Articles
    },
    {
      path: "/articles/uber-conf-bad",
      name: "uber-conf-bad",
      component: UberconfBad
    },
    {
      path: "/articles/uber-conf-good",
      name: "uber-conf-good",
      component: UberconfGood
    },
    {
      path: "/articles/example-article",
      name: "example-article",
      component: ExampleArticle
    },
    {
      path: "/tasting",
      name: "tasting",
      component: TylersTasting
    }
  ]
});
