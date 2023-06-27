import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import AboutView from '../views/AboutView.vue'
import ContactIndex from '../views/ContactIndex.vue'
import ContactDetails from '../views/ContactDetails.vue'
import Statistics from '../views/Statistics.vue'
import PriceHistoryChart from '../components/PriceHistoryChart.vue'
import AvgBlockSizeChart from '../components/AvgBlockSizeChart.vue'

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
      component: AboutView,
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
    {
      path: '/statistics',
      name: 'statistics',
      component: Statistics,
      children: [
        {
            path: 'price-history',
            component: PriceHistoryChart,
        },
        {
            path: 'avg-block-size',
            component: AvgBlockSizeChart,
        }
    ]
    },
  ]
}
const router = createRouter(routerOptions)

export default router
