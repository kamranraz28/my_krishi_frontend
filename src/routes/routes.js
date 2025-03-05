import AboutUsMain from '@/components/AboutUs.vue';
import Dashboard from '@/components/Admin/Dashboard.vue';
import ContactUsMain from '@/components/ContactUs.vue';
import Home from '@/components/Home.vue';
import LogIn from '@/components/LogIn.vue';
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
    path: '/project-details/:id',
    component: ProjectDetails,
    props: true,
  },
  {
    name: 'Dashboard',
    path: '/dashboard',
    component: Dashboard,
  },
  {
    name: 'LogIn',
    path: '/log-in',
    component: LogIn,
  },
  {
    name: 'AboutUsMain',
    path: '/about-us',
    component: AboutUsMain,
  },
  {
    name: 'ContactUsMain',
    path: '/contact-us',
    component: ContactUsMain,
  },




];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
