import Home from '@/views/Home'

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
    component: () => import(/* webpackChunkName: 'login' */ '@/views/auth/Login.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import(/* webpackChunkName: 'signUp' */ '@/views/auth/Signup.vue')
  },
  {
    path: '/verify',
    name: 'Verify',
    component: () => import(/* webpackChunkName: 'verify' */ '@/views/auth/Verify.vue')
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: () => import(/* webpackChunkName: 'forgot-password' */ '@/views/auth/ForgotPassword.vue')
  },
  {
    path: '/reset-password',
    name: 'ResetPassword',
    component: () => import(/* webpackChunkName: 'reset-password' */ '@/views/auth/ResetPassword.vue')
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: () => import(/* webpackChunkName: 'privacy' */ '../views/Privacy.vue')
  },
  {
    path: '/terms',
    name: 'Terms',
    component: () => import(/* webpackChunkName: 'terms' */ '../views/Terms.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import(/* webpackChunkName: 'dashboard' */ '@/views/dashboard/Dashboard.vue')
  },
  {
    path: '/quiz',
    name: 'Questions',
    component: () => import(/* webpackChunkName: 'questions' */ '../views/Questions.vue')
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import(/* webpackChunkName: 'settings' */ '@/views/dashboard/Settings.vue')
  },
  {
    path: '/withdraw',
    name: 'Withdraw',
    component: () => import(/* webpackChunkName: 'withdraw' */ '@/views/dashboard/Withdraw.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import(/* webpackChunkName: 'admin' */ '@/views/admin/Admin.vue')
  },
  {
    path: '/admin-withdraw',
    name: 'AdmainWithdraw',
    component: () => import(/* webpackChunkName: 'admin-withdraw' */ '@/views/admin/WithdrawalRequest.vue')
  },
  {
    path: '/admin-user-info/:id',
    name: 'admin-user-info',
    component: () => import(/* webpackChunkName: 'admin-user-info' */ '@/views/admin/User.vue')
  }
]
