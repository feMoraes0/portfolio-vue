import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/ui/pages/Home.vue';
import PageNotFound from '@/ui/pages/PageNotFound.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '*',
    name: 'PageNotFound',
    component: PageNotFound,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
