import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import PrivacyPolicy from '../views/PrivacyPolicy.vue'

const router = createRouter({
  history: createWebHistory('/welcome'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/politica-privacidad',
      name: 'politica-privacidad',
      component: PrivacyPolicy
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    return { top: 0 }
  }
})

export default router
