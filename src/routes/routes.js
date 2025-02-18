import Home from '@/components/Home.vue';
import ProjectDetails from '@/components/ProjectDetails.vue';
import ProjectList from '@/components/ProjectList.vue';


import { createRouter, createWebHistory } from "vue-router";

const routes = [

  {
    name: 'Home',
    path: '/',
    component: Home,
  },
  {
    name: 'ProjectList',
    path: '/project-list',
    component: ProjectList,
  },
  {
    name: 'ProjectDetails',
    path: '/project-details',
    component: ProjectDetails,
  },


];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
