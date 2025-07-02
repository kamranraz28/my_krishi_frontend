<template>
  <AboveHeader />
  <CommonHeader />
  <section class="page-header">
    <div class="page-header__shape-left"></div>
    <div class="page-header__shape-right"></div>
    <div class="page-header__bg"></div>
    <!-- /.page-header__bg -->
    <div class="container">
      <h2 class="page-header__title bw-split-in-down">About Us</h2>
      <ul class="alefox-breadcrumb list-unstyled">
        <li><router-link to="/">Home</router-link></li>
        <li><span>About</span></li>
      </ul>
      <!-- /.thm-breadcrumb list-unstyled -->
    </div>
    <!-- /.container -->
  </section>
  <AboutUs />
  <OurNumbers />

  <Footer />
</template>

<script>
import AboutUs from "@/components/CommonSection/AboutUs.vue";
import AboveHeader from "@/components/CommonSection/AboveHeader.vue";
import CommonHeader from "@/components/CommonSection/CommonHeader.vue";
import Footer from "@/components/CommonSection/Footer.vue";
import OurNumbers from "@/components/CommonSection/OurNumbers.vue";
export default {
  name: "AboutUsMain",
  components: {
    AboveHeader,
    CommonHeader,
    Footer,
    AboutUs,
    OurNumbers,
  },
};
</script>
