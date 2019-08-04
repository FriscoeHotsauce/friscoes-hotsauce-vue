import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Development from './views/Development.vue';
import Articles from './views/Articles.vue';
import UberconfBad from './views/articles/UberconfBad.vue';
import UberconfGood from './views/articles/UberconfGood.vue';
import FireEmblemThreeHouses from './views/articles/FireEmblemThreeHouses.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/dev',
      name: 'dev',
      component: Development
    },
    {
      path: '/articles',
      name: 'articles',
      component: Articles
    },
    {
      path: '/articles/uber-conf-bad',
      name: 'uber-conf-bad',
      component: UberconfBad
    },
    {
      path: '/articles/uber-conf-good',
      name: 'uber-conf-good',
      component: UberconfGood
    },
    {
      path:'/articles/fire-emblem-three-houses',
      name: 'fire-emblem-three-houses',
      component: FireEmblemThreeHouses
    }
  ]
});
