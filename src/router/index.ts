import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import About from '@/views/About/About.vue';
import ProjectPage from '@/views/ProjectPage/ProjectPage.vue';

Vue.use(VueRouter);

export const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: About,
    // component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/project',
    name: 'Project',
    component: ProjectPage,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
