import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);

import WelComeTable from '@/components/welcome/Table';

export default new Router({
  router: [
    { path: '/welcom/table', name:'WelComeTable', component: WelComeTable },
  ]
})