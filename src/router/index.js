import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Dashboard from '../views/Dashboard/Dashboard.vue'
import LeaveSeries from '../views/Leave.vue'
// import report from '../views/report.vue'
import working from '../views/working.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/main',
    name: 'main',
    component : () => import ('../views/MainSusankya.vue')
  },
  {
    path: '/dashboard',
    name: 'dashBoard',
    component : Dashboard
  },
  {
    path: '/leave',
    name: 'leaveseries',
    component : LeaveSeries
  },
  // {
  //   path: '/report',
  //   name: 'r',
  //   component : report
  // },
  {
    path: '/working',
    name: 'working',
    component : working
  },
]

const router = new VueRouter({
  routes
})

export default router
