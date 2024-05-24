import { createRouter, createWebHistory } from 'vue-router'
import homepage from '../views/homepage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: homepage
    },
    {
      path: '/games',
      name: 'games',
      component: () => import('../views/games.vue')
    },
    {
      path: '/videos',
      name: 'videos',
      component: () => import('../views/videos.vue')
    },
    {
      path: '/artwork',
      name: 'artwork',
      component: () => import('../views/artwork.vue')
    },
    {
      path: '/music',
      name: 'music',
      component: () => import('../views/music.vue')
    }
  ]
})

export default router
