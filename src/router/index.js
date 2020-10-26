import Vue from 'vue'
import VueRouter from 'vue-router'
import Characters from '../views/Characters.vue'
import Location from '../views/Locations.vue'
import Episode from '../views/Episodes.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Characters',
    component: Characters
  },
  {
    path: '/locations',
    name: 'Locations',
    component: Location
  },
  {
    path: '/episodes',
    name: 'Episodes',
    component: Episode
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
