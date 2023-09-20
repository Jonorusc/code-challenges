import jwt_decode from 'jwt-decode'
const Authmiddleware = (to, from, next) => {
  const token = localStorage.getItem('token')

  if (
    to.path === '/' &&
    (!token || jwt_decode(token).exp <= Math.floor(new Date() / 1000))
  ) {
    localStorage.removeItem('token')
    next('/login')
  } else {
    next()
  }
}

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
    beforeEnter: Authmiddleware
  },
  {
    path: '/login',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import('pages/login.vue')
      },
      {
        path: '',
        name: 'loginDefault',
        component: () => import('pages/login.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
