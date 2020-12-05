import Vue from 'vue';
import Router from 'vue-router';

import Menu from './layouts/Menu.vue';
import MainMenu from './layouts/MainMenu.vue';
import Dashboard from './views/Dashboard.vue';
import Login from './views/Login.vue';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: 'auth',
      name: 'auth',
      component: Menu,
      children: [
        {
          path: 'dashboard',
          name: 'dashboard',
          component: Dashboard,
        },
        {
          path: 'settings',
          name: 'settings',
          component: () => import(/* webpackChunkName: "about" */ './views/Settings.vue'),
        },
      ],
    },
    {
      path: '/',
      name: 'mainMenu',
      component: MainMenu,
      children: [
        {
          path: 'home',
          name: 'home',
          component: Home,
        },
        {
          path: 'login',
          name: 'login',
          component: Login,
        },
        {
          path: 'register',
          name: 'register',
          component: () => import(/* webpackChunkName: "about" */ './views/Register.vue'),
        },
      ],
    },
  ],
});