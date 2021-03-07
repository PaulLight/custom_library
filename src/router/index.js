import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/general_pages/Home.vue';
import Library from '../views/general_pages/Library.vue';
import About from '../views/general_pages/About.vue';
import Register from '../views/general_pages/Register.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/library',
    name: 'Library',
    component: Library,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
