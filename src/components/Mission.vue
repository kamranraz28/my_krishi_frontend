<template>
  <div class="page-wrapper">
    <AboveHeader />
    <CommonHeader />
    <section class="page-header">
      <div class="page-header__shape-left"></div>
      <div class="page-header__shape-right"></div>
      <div class="page-header__bg"></div>
      <div class="container">
        <h2 class="page-header__title bw-split-in-down">Mission & Vision</h2>
        <ul class="alefox-breadcrumb list-unstyled">
          <li><router-link to="/">Home</router-link></li>
          <li><span>Mission & Vision</span></li>
        </ul>
      </div>
    </section>
    <section class="cta-five">
      <div class="container">
        <div class="cta-five__wrapper">
          <div class="row">
            <!-- Left side - Text content for Our Mission -->
            <div
              class="col-lg-6 d-flex align-items-center wow fadeInLeft"
              data-wow-delay="100ms"
            >
              <div class="cta-five__content">
                <div class="sec-title text-left">
                  <h6 class="sec-title__tagline bw-split-in-right">
                    <span
                      class="sec-title__tagline__left-leaf"
                      style="
                        background-image: url(/assets/images/shapes/leaf.png);
                      "
                    ></span>
                    Our Mission
                    <span
                      class="sec-title__tagline__right-leaf"
                      style="
                        background-image: url(/assets/images/shapes/leaf.png);
                      "
                    ></span>
                  </h6>
                  <!-- /.sec-title__tagline -->

                  <h3 class="sec-title__title bw-split-in-left">
                    Empowering Farmers with the Right Resources
                  </h3>
                  <!-- /.sec-title__title -->
                </div>
                <!-- /.sec-title -->

                <p>
                  At My Krishi, our mission is to empower farmers with the right
                  resources, technology, and support to drive sustainable
                  farming practices. We are dedicated to bridging the gap
                  between rural communities and modern agricultural solutions by
                  providing financial access, quality inputs, market
                  connections, and data-driven insights.
                </p>
              </div>
            </div>

            <!-- Right side - Image for Our Mission -->
            <div
              class="col-lg-6 text-end wow fadeInRight"
              data-wow-delay="200ms"
            >
              <div class="cta-five__image">
                <img
                  src="/assets/images/resources/cta-5-1.jpg"
                  alt="Our Mission"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-five">
      <div class="container">
        <div class="cta-five__wrapper">
          <div class="row">
            <!-- Left side - Image for Our Vision -->
            <div
              class="col-lg-6 text-start wow fadeInLeft"
              data-wow-delay="100ms"
            >
              <div class="cta-five__image">
                <img
                  src="/assets/images/resources/cta-5-1.jpg"
                  alt="Our Vision"
                />
              </div>
            </div>

            <!-- Right side - Text content for Our Vision -->
            <div
              class="col-lg-6 d-flex align-items-center wow fadeInRight"
              data-wow-delay="200ms"
            >
              <div class="cta-five__content">
                <div class="sec-title text-left">
                  <h6 class="sec-title__tagline bw-split-in-right">
                    <span
                      class="sec-title__tagline__left-leaf"
                      style="
                        background-image: url(/assets/images/shapes/leaf.png);
                      "
                    ></span>
                    Our Vision
                    <span
                      class="sec-title__tagline__right-leaf"
                      style="
                        background-image: url(/assets/images/shapes/leaf.png);
                      "
                    ></span>
                  </h6>
                  <!-- /.sec-title__tagline -->

                  <h3 class="sec-title__title bw-split-in-left">
                    Building a Sustainable Future for Agriculture
                  </h3>
                  <!-- /.sec-title__title -->
                </div>
                <!-- /.sec-title -->

                <p>
                  Our vision is to create a sustainable and innovative future
                  for agriculture, where technology, data, and community support
                  come together to enhance farming practices. By connecting
                  farmers with markets, investors, and the resources they need,
                  we aim to create a thriving agricultural ecosystem that
                  benefits all stakeholders, from the farmers to the consumers.
                </p>
              </div>
            </div>
          </div>
        </div>
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
  name: "Mission",
  components: {
    AboveHeader,
    CommonHeader,
    Footer,
  },
};
</script>
