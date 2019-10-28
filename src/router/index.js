import Vue from 'vue'
import VueRouter from 'vue-router'
import config from '../store/config.js'
import Lighter from '../components/Lighter.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/red'
  },
  {
    path: '/red',
    name: 'red',
    props: config['red'],
    component: Lighter,
  },
  {
    path: '/yellow',
    name: 'yellow',
    props: config['yellow'],
    component: Lighter,
  },
  {
    path: '/yellow',
    name: 'yellowToRed',
    props: config['yellowToRed'],
    component: Lighter,
  },
  {
    path: '/green',
    name: 'green',
    props: config['green'],
    component: Lighter,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
});

export default router
