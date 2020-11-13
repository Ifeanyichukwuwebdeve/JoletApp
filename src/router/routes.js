import Home from '@/views/Home'
import Login from '@/views/auth/Login.vue'
import Sign from '@/views/auth/Signup.vue'
import Dashboard from '@/views/dashboard/Dashboard.vue'
import Settings from '@/views/dashboard/Settings.vue'
import Withdraw from '@/views/dashboard/Withdraw.vue'

export default [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/faq',
    name: 'Faq',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Faq.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Sign
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: () => import('../views/Privacy.vue')
  },
  {
    path: '/terms',
    name: 'Terms',
    component: () => import('../views/Terms.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/quiz',
    name: 'Questions',
    component: () => import('../views/Questions.vue')
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  },
  {
    path: '/withdraw',
    name: 'Withdraw',
    component: Withdraw
  }
]
