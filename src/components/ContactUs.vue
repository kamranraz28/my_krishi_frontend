<template>
  <AboveHeader />
  <CommonHeader />
  <section class="page-header">
    <div class="page-header__shape-left"></div>
    <div class="page-header__shape-right"></div>
    <div class="page-header__bg"></div>
    <!-- /.page-header__bg -->
    <div class="container">
      <h2 class="page-header__title bw-split-in-down">Contact Us</h2>
      <ul class="alefox-breadcrumb list-unstyled">
        <li><router-link to="/">Home</router-link></li>
        <li><span>Contact</span></li>
      </ul>
      <!-- /.thm-breadcrumb list-unstyled -->
    </div>
    <!-- /.container -->
  </section>
  <section class="contact-info contact-info--contact-page">
    <div class="container">
      <div class="row gutter-y-30">
        <div class="col-lg-4 col-md-6">
          <div class="contact-info__item">
            <div class="contact-info__item__icon">
              <span class="icon-phone-call"></span>
            </div>
            <div class="contact-info__item__content">
              <h3 class="contact-info__item__title">Call This Now</h3>
              <p class="contact-info__item__text">
                <a href="tel:+8801609758377">+88 01609758377</a>
              </p>
            </div>
          </div>
          <!-- item -->
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="contact-info__item">
            <div class="contact-info__item__icon">
              <span class="icon-email"></span>
            </div>
            <div class="contact-info__item__content">
              <h3 class="contact-info__item__title">Mail Us</h3>
              <p class="contact-info__item__text">
                <a href="mailto:your@gmail.com">your@gmail.com</a>
              </p>
            </div>
          </div>
          <!-- item -->
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="contact-info__item">
            <div class="contact-info__item__icon">
              <span class="icon-location"></span>
            </div>
            <div class="contact-info__item__content">
              <h3 class="contact-info__item__title">Our Location</h3>
              <p class="contact-info__item__text">Mirpur, Dhaka</p>
            </div>
          </div>
          <!-- item -->
        </div>
      </div>
    </div>
  </section>
  <CommonContact />
  <Footer />
</template>

<script>
import AboveHeader from "@/components/CommonSection/AboveHeader.vue";
import CommonContact from "@/components/CommonSection/CommonContact.vue";
import CommonHeader from "@/components/CommonSection/CommonHeader.vue";
import Footer from "@/components/CommonSection/Footer.vue";
export default {
  name: "ContactUsMain",
  components: {
    AboveHeader,
    CommonHeader,
    CommonContact,
    Footer,
  },
};
</script>
