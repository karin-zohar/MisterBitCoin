import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import ContactIndex from '../views/ContactIndex.vue'
import ContactDetails from '../views/ContactDetails.vue'

const routerOptions = {
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/contact',
      name: 'contacts',
      component: ContactIndex,
    },
    {
      path: '/contact/:id',
      name: 'details',
      component: ContactDetails,
    },
  ]
}
const router = createRouter(routerOptions)

export default router
