import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Filmes from '../views/filmes/Filmes.vue'
import Cadastrar from '../views/filmes/Cadastra.vue'
import Editar from '../views/filmes/Edita.vue'
import Reservas from '../views/filmes/Reservas.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
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
      path: '/reservas',
      name: 'reservas',
      component: Reservas
    },
    {
      path: '/disponiveis',
      name: 'disponiveis',
      component: Filmes
    },
    {
      path: '/cadastrar',
      name: 'cadastrar',
      component: Cadastrar
    },
    {
      path: '/editar',
      name: 'editar',
      component: Editar
    },
  ]
})

export default router
