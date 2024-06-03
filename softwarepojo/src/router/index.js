import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/main.vue'
import registry from '../views/registry.vue'
import user from '../views/user.vue'

const routes = [
  {
    path:'/registry',
    name: 'registry',
    component: registry
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/',
    redirect: '/login'
    
  },
  {
    path: '/login',
    name: 'login',
    component:Login
    
  },
  {
    path: '/user',
    name: 'user',
    component:user
    
  },
  {
    path: '/userLogin',
    name: 'userLogin',
    component:()=>import('../views/userLogin.vue')
  },{
    path:'/counter',
    name:'counter',
    component:()=>import('../views/counter.vue')
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

