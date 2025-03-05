<template>
  <div :key="$route.fullPath">
    <AboveHeader />
    <CommonHeader />
    <section class="main-slider-three">
      <div
        class="main-slider-three__carousel alefox-owl__carousel owl-carousel"
        data-owl-options='{
          "loop": true,
          "animateOut": "fadeOut",
          "animateIn": "fadeIn",
          "items": 1,
          "autoplay": true,
          "autoplayTimeout": 7000,
          "smartSpeed": 1000,
          "nav": false,
          "navText": ["<span class=\"icon-left-arrow\"></span>","<span class=\"icon-right-arrow\"></span>"],
          "dots": true,
          "margin": 0
        }'
      >
        <div class="item">
          <div class="main-slider-three__item">
            <div
              class="main-slider-three__bg"
              style="
                background-image: url(assets/images/backgrounds/slider-3-1.jpg);
              "
            >
              <div class="main-slider-three__bg__color"></div>
            </div>
            <div class="container">
              <div class="main-slider-three__content text-center">
                <h5 class="main-slider-three__sub-title">
                  Agriculture, Simplified
                </h5>
                <h2 class="main-slider-three__title">
                  Investing in Agriculture<br />
                  Nurturing Communit<span>y</span>
                </h2>
                <div class="main-slider-three__text">
                  <p class="main-slider-three__text__one">
                    We are an agri-tech platform dedicated to transforming the
                    lives of 10 million farmers by 2035.<br />
                    Through innovation, finance, and technology, we aim to
                    empower
                    <br />
                    farmers by providing data-driven solutions at every step.
                  </p>
                </div>
                <!-- slider-text -->
                <div class="main-slider-three__btn">
                  <router-link to="/about-us" class="alefox-btn">
                    <span class="alefox-btn__item"></span>
                    <span class="alefox-btn__item"></span>
                    <span class="alefox-btn__item"></span>
                    <span class="alefox-btn__item"></span>
                    About Us </router-link
                  ><!-- slider-btn -->
                  <div class="main-slider-three__btn__two">
                    <router-link to="/contact-us" class="alefox-btn">
                      <span class="alefox-btn__item"></span>
                      <span class="alefox-btn__item"></span>
                      <span class="alefox-btn__item"></span>
                      <span class="alefox-btn__item"></span>
                      Contact Now </router-link
                    ><!-- slider-btn -->
                  </div>
                </div>
                <!-- slider-btn -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <OurServices />
    <AboutUs />
    <OurNumbers />
    <OurServices2 />
    <Speciality />
    <Timeline />
    <OurProjects />
    <Testimonial />
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
import LatestNews from "@/components/CommonSection/LatestNews.vue";
import MoreAbout from "@/components/CommonSection/MoreAbout.vue";
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
    OurServices,
    AboutUs,
    OurNumbers,
    OurServices2,
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
  mounted() {
    this.$nextTick(() => {
      $(".main-slider-three__carousel").owlCarousel({
        loop: true,
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        items: 1,
        autoplay: true,
        autoplayTimeout: 7000,
        smartSpeed: 1000,
        nav: false,
        dots: true,
        margin: 0,
      });
    });
  },
  watch: {
    $route(to, from) {
      if (to.name === "Home") {
        this.$nextTick(() => {
          $(".main-slider-three__carousel").trigger("destroy.owl.carousel");
          $(".main-slider-three__carousel").owlCarousel({
            loop: true,
            animateOut: "fadeOut",
            animateIn: "fadeIn",
            items: 1,
            autoplay: true,
            autoplayTimeout: 7000,
            smartSpeed: 1000,
            nav: false,
            dots: true,
            margin: 0,
          });
        });
      }
    },
  },
};
</script>

<style scoped>
.main-slider-three__content {
  margin-top: -150px; /* Adjust this value as needed */
}
</style>
