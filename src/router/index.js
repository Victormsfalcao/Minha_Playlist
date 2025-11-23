import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import BringMeTheHorizon from '../views/BringMeTheHorizon.vue'
import Deftones from '../views/Deftones.vue'
import Gorillaz from '../views/Gorillaz.vue'
import LinkinPark from '../views/LinkinPark.vue'
import MotionlessInWhite from '../views/MotionlessInWhite.vue'
import SleepToken from '../views/SleepToken.vue'
import TylerTheCreator from '../views/TylerTheCreator.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/bring-me-the-horizon',
    name: 'BringMeTheHorizon',
    component: BringMeTheHorizon
  },
  {
    path: '/deftones',
    name: 'Deftones',
    component: Deftones
  },
  {
    path: '/gorillaz',
    name: 'Gorillaz',
    component: Gorillaz
  },
  {
    path: '/linkin-park',
    name: 'LinkinPark',
    component: LinkinPark
  },
  {
    path: '/motionless-in-white',
    name: 'MotionlessInWhite',
    component: MotionlessInWhite
  },
  {
    path: '/sleep-token',
    name: 'SleepToken',
    component: SleepToken
  },
  {
    path: '/tyler-the-creator',
    name: 'TylerTheCreator',
    component: TylerTheCreator
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

