import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import About from '@/views/About/About.vue';
import ProjectPage from '@/views/ProjectPage/ProjectPage.vue';
import OtherLinksPage from '@/views/OtherLinks/OtherLinksPage.vue';

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
  {
    path: '/other-links',
    name: 'Links',
    component: OtherLinksPage,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
