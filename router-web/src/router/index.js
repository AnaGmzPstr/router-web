import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import path from 'path'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/countryDetails/:id',
      name: 'countryDetails',
      component: () => import('../views/CountryDetailsView.vue'),
      children: [
        //TODO: mirar la vaina esta
        {
          path: '/countryVisit/:index',
          name: 'countryVisit',
          component: () => import('../views/CountryVisitView.vue'),
        }
      ]
    }

  ],
})

export default router
