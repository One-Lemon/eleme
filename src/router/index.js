import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/eleme/index/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Index
    }
  ]
})
