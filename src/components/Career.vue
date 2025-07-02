<template>
  <div class="page-wrapper">
    <AboveHeader />
    <CommonHeader />
    <section class="page-header">
      <div class="page-header__shape-left"></div>
      <div class="page-header__shape-right"></div>
      <div class="page-header__bg"></div>
      <div class="container">
        <h2 class="page-header__title bw-split-in-down">Career</h2>
        <ul class="alefox-breadcrumb list-unstyled">
          <li><router-link to="/">Home</router-link></li>
          <li><span>Career</span></li>
        </ul>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import AboveHeader from "@/components/CommonSection/AboveHeader.vue";
import CommonHeader from "@/components/CommonSection/CommonHeader.vue";
import Footer from "@/components/CommonSection/Footer.vue";

export default {
  name: "Career",
  components: {
    AboveHeader,
    CommonHeader,
    Footer,
  },
};
</script>
