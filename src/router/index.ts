import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/page/Login.vue')
  },
  {
    path: '/',
    name: 'home',
    component: () => import('@/page/Layout.vue'),
    redirect: '/chat',
    children: [
      {
        path: '/chat',
        name: 'Chat',
        component: () => import('@/page/Chat/index.vue')
      },
      {
        path: '/todo',
        name: 'Todo',
        component: () => import('@/page/TodoList/index.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next: any) => {
  // const token = localStorage.getItem('token')
  // if(!token && to.path !== '/login') {
  //   next('/login')
  // } else {
  //   next()
  // }
  next()
})


export default router