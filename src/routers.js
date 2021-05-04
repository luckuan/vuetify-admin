import Vue from 'vue'
import VueRouter from 'vue-router'


import Home from '@/views/Home.vue'
import WelcomeTable from '@/views/welcome/Table.vue'
import WelcomeIndex from '@/views/welcome/Index.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/home' },
  {
    path: '/home',
    name: '/home',
    component: Home,
　　 children: [ 
{ 
　path: '/', 
   component: WelcomeIndex 
  　　  },
{ 
  　path: '/tables', 
     component: WelcomeTable 
    　　}
  　　]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router