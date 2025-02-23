<template>
  <div>
    <AboveHeader />
    <CommonHeader />
    <HomeBanner />
    <OurServices />
    <AboutUs />
    <OurNumbers />
    <OurServices2 />
    <Speciality />
    <Timeline />
    <OurProjects />

    <OurProducts />
    <GetinTouch />
    <LatestNews />
    <MoreAbout />
    <Footer />
  </div>
</template>

<script>
import AboutUs from "@/components/CommonSection/AboutUs.vue";
import AboveHeader from "@/components/CommonSection/AboveHeader.vue";
import CommonHeader from "@/components/CommonSection/CommonHeader.vue";
import Footer from "@/components/CommonSection/Footer.vue";
import GetinTouch from "@/components/CommonSection/GetinTouch.vue";
import HomeBanner from "@/components/CommonSection/HomeBanner.vue";
import LatestNews from "@/components/CommonSection/LatestNews.vue";
import MoreAbout from "@/components/CommonSection/MoreAbout.vue";
import OurClients from "@/components/CommonSection/OurClients.vue";
import OurNumbers from "@/components/CommonSection/OurNumbers.vue";
import OurProducts from "@/components/CommonSection/OurProducts.vue";
import OurProjects from "@/components/CommonSection/OurProjects.vue";
import OurServices from "@/components/CommonSection/OurServices.vue";
import OurServices2 from "@/components/CommonSection/OurServices2.vue";
import Speciality from "@/components/CommonSection/Speciality.vue";
import Testimonial from "@/components/CommonSection/Testimonial.vue";
import Timeline from "@/components/CommonSection/Timeline.vue";

export default {
  name: "Home",
  components: {
    AboveHeader,
    CommonHeader,
    HomeBanner,
    OurServices,
    AboutUs,
    OurNumbers,
    OurServices2,
    OurClients,
    Speciality,
    Timeline,
    OurProjects,
    Testimonial,
    OurProducts,
    GetinTouch,
    LatestNews,
    MoreAbout,
    Footer,
  },
};
</script>i
