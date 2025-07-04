
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
        {
       path: '/registrar',
       name: 'registrar',
       component: () => import('../modules/registro/views/RegistrarView.vue'),
    },
    {
       path: '/contador',
       name: 'contador',
      component: () => import('../modules/contador/components/ContadorComponent.vue'),
    },
    {
       path: '/tareas',
       name: 'tareas',
      component: () => import('../modules/listaDeTareas/components/ListaDeTareas.vue'),
    },
     {
       path: '/agenda',
       name: 'agenda',
      component: () => import('../modules/agenda/views/AgendaView.vue'),
    },
    {
       path: '/dialog',
       name: 'dialog',
      component: () => import('../modules/common/DialogView.vue'),
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    //},
  ],
})

export default router
