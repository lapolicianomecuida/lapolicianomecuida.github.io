import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Exigimos from '../views/Exigimos.vue';
import Autocuidado from '../views/Autocuidado.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/exigimos',
    name: 'Exigimos',
    component: Exigimos,
  },
  {
    path: '/autocuidado',
    name: 'Autocuidado',
    component: Autocuidado,
  },
  {
    path: '/estado/:id',
    component: () => import('../views/Estado.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to) {
    console.log(to);
    if (to.hash) {
      const element = document.getElementById(to.hash.replace(/#/, ''));
      if (element && element.scrollIntoView) {
        return element.scrollIntoView({ block: 'start', behavior: 'smooth' });
      }
    }
    return { x: 0, y: 0 };
  },
});

export default router;
