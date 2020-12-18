import Home from '@/views/Home'

export default
[
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
    component: () => import(/* webpackChunkName: 'dashboard' */ '@/views/dashboard/Dashboard.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/quiz',
    name: 'Questions',
    component: () => import(/* webpackChunkName: 'questions' */ '../views/Questions.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/live-quiz',
    name: 'Live-quiz',
    component: () => import(/* webpackChunkName: 'live-quiz' */ '../views/LiveQuiz.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import(/* webpackChunkName: 'settings' */ '@/views/dashboard/Settings.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/withdraw',
    name: 'Withdraw',
    component: () => import(/* webpackChunkName: 'withdraw' */ '@/views/dashboard/Withdraw.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import(/* webpackChunkName: 'admin' */ '@/views/admin/Admin.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/admin-withdraw',
    name: 'AdmainWithdraw',
    component: () => import(/* webpackChunkName: 'admin-withdraw' */ '@/views/admin/WithdrawalRequest.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/admin-user-info/:id',
    name: 'admin-user-info',
    component: () => import(/* webpackChunkName: 'admin-user-info' */ '@/views/admin/User.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/404',
    alias: '*',
    name: 'Not-found',
    component: () => import(/* webpackChunkName: 'admin-user-info' */ '@/views/NotFound.vue')
  }
]
