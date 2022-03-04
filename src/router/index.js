import { createRouter, createWebHistory } from 'vue-router'
import Default from '../layouts/Default.vue'
import Welcome from '../views/Welcome.vue'

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: Welcome
  },
  {
    path: '/default',
    name: 'defaultLayout',
    redirect: 'dashboard',
    component: Default,
    children: []
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
