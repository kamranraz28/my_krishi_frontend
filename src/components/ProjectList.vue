<template>
  <div class="page-wrapper">
    <!-- /.topbar-one -->
    <AboveHeader />
    <CommonHeader />

    <section class="page-header">
      <div class="page-header__shape-left"></div>
      <div class="page-header__shape-right"></div>
      <div class="page-header__bg"></div>
      <!-- /.page-header__bg -->
      <div class="container">
        <h2 class="page-header__title bw-split-in-down">Projects</h2>
        <ul class="alefox-breadcrumb list-unstyled">
          <li><router-link to="/">Home</router-link></li>
          <li><span>Projects</span></li>
        </ul>
        <!-- /.thm-breadcrumb list-unstyled -->
      </div>
      <!-- /.container -->
    </section>
    <!-- /.page-header -->

    <section class="blog-one">
      <div class="container">
        <div class="row gutter-y-30">
          <div class="col-md-6 col-lg-4">
            <div
              class="blog-card wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="00ms"
            >
              <div class="blog-card__image">
                <img
                  src="/assets/images/blog/blog-1-1.jpg"
                  alt="This Leader in Organic Agriculture Growth"
                />
                <img
                  src="/assets/images/blog/blog-1-1.jpg"
                  alt="This Leader in Organic Agriculture Growth"
                />
                <router-link
                  to="/project-details"
                  class="blog-card__image__link"
                  ><span class="sr-only"
                    >This Leader in Organic Agriculture Growth</span
                  >
                  <!-- /.sr-only --></router-link
                >
              </div>
              <!-- /.blog-card__image -->
              <div class="blog-card__content">
                <ul class="list-unstyled blog-card__meta">
                  <li><i class="icofont-location-pin"></i>Mymensingh</li>
                  <li>
                    <i class="fa-solid fa-bangladeshi-taka-sign"></i>BDT
                    5,000/Unit
                  </li>
                </ul>
                <!-- /.list-unstyled blog-card__meta -->
                <h3 class="blog-card__title">
                  <router-link to="/project-details"
                    >Mixed Vegetables</router-link
                  >
                </h3>
                <!-- /.blog-card__title -->
                <p class="blog-card__text">
                  Period: 12 Months <br />
                  Return: 20-25%
                </p>

                <!-- /.blog-card__text -->
                <router-link to="/project-details" class="blog-card__link">
                  <i class="icofont-arrow-right"></i>
                  Description </router-link
                ><!-- /.blog-card__link -->
              </div>
              <!-- /.blog-card__content -->
            </div>
            <!-- /.blog-card -->
          </div>
          <!-- /.col-md-6 col-lg-4 -->
          <div class="col-md-6 col-lg-4">
            <div
              class="blog-card wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="100ms"
            >
              <div class="blog-card__image">
                <img
                  src="/assets/images/blog/blog-1-2.jpg"
                  alt="How to Findout Healthy Food For Body"
                />
                <img
                  src="/assets/images/blog/blog-1-2.jpg"
                  alt="How to Findout Healthy Food For Body"
                />
                <router-link
                  to="/project-details"
                  class="blog-card__image__link"
                  ><span class="sr-only"
                    >This Leader in Organic Agriculture Growth</span
                  >
                  <!-- /.sr-only --></router-link
                >
              </div>
              <!-- /.blog-card__image -->
              <div class="blog-card__content">
                <ul class="list-unstyled blog-card__meta">
                  <li><i class="icofont-location-pin"></i>Mymensingh</li>
                  <li>
                    <i class="fa-solid fa-bangladeshi-taka-sign"></i>BDT
                    5,000/Unit
                  </li>
                </ul>
                <!-- /.list-unstyled blog-card__meta -->
                <h3 class="blog-card__title">
                  <router-link to="/project-details">Corn Farming</router-link>
                </h3>
                <!-- /.blog-card__title -->
                <p class="blog-card__text">
                  Period: 12 Months <br />
                  Return: 20-25%
                </p>

                <!-- /.blog-card__text -->
                <router-link to="/project-details" class="blog-card__link">
                  <i class="icofont-arrow-right"></i>
                  Description </router-link
                ><!-- /.blog-card__link -->
              </div>
              <!-- /.blog-card__content -->
            </div>
            <!-- /.blog-card -->
          </div>
          <!-- /.col-md-6 col-lg-4 -->
          <div class="col-md-6 col-lg-4">
            <div
              class="blog-card wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="200ms"
            >
              <div class="blog-card__image">
                <img
                  src="/assets/images/blog/blog-1-3.jpg"
                  alt="We Are Ripening Fruits Healthy Blog"
                />
                <img
                  src="/assets/images/blog/blog-1-3.jpg"
                  alt="We Are Ripening Fruits Healthy Blog"
                />
                <router-link
                  to="/project-details"
                  class="blog-card__image__link"
                  ><span class="sr-only"
                    >This Leader in Organic Agriculture Growth</span
                  >
                  <!-- /.sr-only --></router-link
                >
              </div>
              <!-- /.blog-card__image -->
              <div class="blog-card__content">
                <ul class="list-unstyled blog-card__meta">
                  <li><i class="icofont-location-pin"></i>Mymensingh</li>
                  <li>
                    <i class="fa-solid fa-bangladeshi-taka-sign"></i>BDT
                    5,000/Unit
                  </li>
                </ul>
                <!-- /.list-unstyled blog-card__meta -->
                <h3 class="blog-card__title">
                  <router-link to="/project-details">Onion Harvest</router-link>
                </h3>
                <!-- /.blog-card__title -->
                <p class="blog-card__text">
                  Period: 12 Months <br />
                  Return: 20-25%
                </p>

                <!-- /.blog-card__text -->
                <router-link to="/project-details" class="blog-card__link">
                  <i class="icofont-arrow-right"></i>
                  Description </router-link
                ><!-- /.blog-card__link -->
              </div>
              <!-- /.blog-card__content -->
            </div>
            <!-- /.blog-card -->
          </div>
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container -->
    </section>
    <!-- /.blog-one blog-one--page -->
    <Footer />
  </div>
  <!-- /.page-wrapper -->
</template>

<script>
import AboveHeader from "@/components/CommonSection/AboveHeader.vue";
import CommonHeader from "@/components/CommonSection/CommonHeader.vue";
import Footer from "@/components/CommonSection/Footer.vue";
export default {
  name: "ProjectList",
  components: {
    AboveHeader,
    CommonHeader,
    Footer,
  },
};
</script>
