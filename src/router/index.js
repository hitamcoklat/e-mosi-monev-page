import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/monev/input-pbf/:username/:longlat',
    props: true,
    name: 'InputMonevPBF',
    component: () => import('../views/InputMonevPBF.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
