import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/general_pages/Home.vue';
import Library from '../views/general_pages/Library.vue';
import About from '../views/general_pages/About.vue';
import Login from '../views/general_pages/Login.vue';
import Register from '../views/general_pages/Register.vue';
import CreateItem from '../views/general_pages/CreateItem.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/library',
    name: 'Library',
    component: Library
  },
  {
    path: '/library/create',
    name: 'library-create',
    component: CreateItem
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
