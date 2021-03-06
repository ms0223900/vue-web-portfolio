import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import About from '@/views/About/About.vue';
import ProjectPage from '@/views/ProjectPage/ProjectPage.vue';
import OtherLinksPage from '@/views/OtherLinks/OtherLinksPage.vue';
import NewVersionHomePage from '@/views/Home/NewVersionHomePage.vue';

Vue.use(VueRouter);

export const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'NewVersionHomePage',
    component: NewVersionHomePage,
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
  {
    path: '/new-homepage',
    name: 'NewHomePage',
    component: NewVersionHomePage,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
