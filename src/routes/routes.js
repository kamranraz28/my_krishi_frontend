import AboutUsMain from '@/components/AboutUs.vue';
import Dashboard from '@/components/Admin/Dashboard.vue';
import Blogs from '@/components/Blogs.vue';
import Career from '@/components/Career.vue';
import ContactUsMain from '@/components/ContactUs.vue';
import FAQ from '@/components/FAQ.vue';
import GlobalAgroVenture from '@/components/GlobalAgroVenture.vue';
import GlobalAgroVillage from '@/components/GlobalAgroVillage.vue';
import Home from '@/components/Home.vue';
import InvestProcess from '@/components/InvestProcess.vue';
import LogIn from '@/components/LogIn.vue';
import Mission from '@/components/Mission.vue';
import OurTeam from '@/components/OurTeam.vue';
import OurWork from '@/components/OurWork.vue';
import PartnerWithUs from '@/components/PartnerWithUs.vue';
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
  {
    name: 'Mission',
    path: '/mission-and-vision',
    component: Mission,
  },
  {
    name: 'OurWork',
    path: '/our-work',
    component: OurWork,
  },
  {
    name: 'OurTeam',
    path: '/our-team',
    component: OurTeam,
  },
  {
    name: 'GlobalAgroVenture',
    path: '/global-agro-venture',
    component: GlobalAgroVenture,
  },
  {
    name: 'Career',
    path: '/career',
    component: Career,
  },
  {
    name: 'InvestProcess',
    path: '/invest-process',
    component: InvestProcess,
  },
  {
    name: 'PartnerWithUs',
    path: '/partner-with-us',
    component: PartnerWithUs,
  },
  {
    name: 'GlobalAgroVillage',
    path: '/global-agro-village',
    component: GlobalAgroVillage,
  },
  {
    name: 'Blogs',
    path: '/blogs',
    component: Blogs,
  },
  {
    name: 'FAQ',
    path: '/faq',
    component: FAQ,
  },




];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
