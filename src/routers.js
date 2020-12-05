import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/Home'
import WelcomeTable from '@/components/welcome/Table'

Vue.use(Router);

export default new Router({
  router: [
    {
      path: '/',
      component: Home,
      children: [ 
      { 
          path: '/', 
          component: WelcomeTable 
      }
      ]
    }
  ]
})