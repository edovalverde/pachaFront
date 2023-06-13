import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/crear',
      name: 'crear',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CreateView.vue')
    },
    {
      path: '/editar/:id',
      name: 'editar',
      component: () => import('../views/EditView.vue')
    },
    {
      path: '/detalles/:id',
      name: 'detalles',
      component: () => import('../views/DetailsView.vue'),
      props: ( route ) => {
        const id = Number( route.params.id );
        return isNaN( id ) ? { id: 1 } : { id }
      }
    }
  ]
})

export default router
