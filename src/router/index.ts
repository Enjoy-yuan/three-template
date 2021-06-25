import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Three/Car',
    name: 'Car',
    component: () => import(/* webpackChunkName: "Car" */ '@/views/Three/Car/index.vue')
  },
  {
    path: '/Three/Music',
    name: 'Music',
    component: () => import(/* webpackChunkName: "Music" */ '@/views/Three/Music/index.vue')
  },
  {
    path: '/Three/Sprite',
    name: 'Sprite',
    component: () => import(/* webpackChunkName: "Sprite" */ '@/views/Three/Sprite/index.vue')
  },
  {
    path: '/Three/Feature',
    name: 'Feature',
    component: () => import(/* webpackChunkName: "Feature" */ '@/views/Three/Feature/index.vue')
  },
  {
    path: '/Example/Test1',
    name: 'Test1',
    component: () => import(/* webpackChunkName: "Test1" */ '@/views/Example/Test1/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
