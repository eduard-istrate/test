import Vue from 'vue'
import Router from 'vue-router'
import Titles from './views/Titles.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Titles',
      component: Titles
    },
    {
      path: '/images',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Images.vue')
    },
    {
        path: '/example',
        component: () => import('./views/VuexExample.vue')
    }
  ]
})
