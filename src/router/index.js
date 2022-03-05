import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
import Default from '../layouts/Default.vue'
import Welcome from '../views/Welcome.vue'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: Welcome
  },
  {
    path: '/app',
    name: 'layout',
    redirect: 'dashboard',
    component: Default,
    children: [
      {
        path: '/home',
        name: 'home',
        component: Home
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth && !store.getters.getUser.token) next({ name: 'home' })
  else if (store.getters.getUser.token && to.meta.isGuest) next({ name: 'home' })
  else next()
})

export default router
