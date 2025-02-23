<template>
  <section class="about-three">
    <div
      class="about-three__shape"
      style="background-image: url(assets/images/resources/about-3-shape-1.png)"
    ></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="about-three__image wow fadeInLeft" data-wow-delay="200ms">
            <img src="/assets/images/resources/about-3-1.jpg" alt="alefox" />
            <!-- <div class="about-three__image__two">
              <img src="/assets/images/shapes/about-3-brand.png" alt="alefox" />
            </div> -->
          </div>
          <!-- /.about-three__image -->
        </div>
        <!-- /.col-lg-6 -->
        <div class="col-lg-6 wow fadeInRight" data-wow-delay="300ms">
          <div class="about-three__content">
            <div class="sec-title text-left">
              <h6 class="sec-title__tagline bw-split-in-right">
                <span
                  class="sec-title__tagline__left-leaf"
                  style="background-image: url(assets/images/shapes/leaf.png)"
                ></span
                >Our About Us<span
                  class="sec-title__tagline__right-leaf"
                  style="background-image: url(assets/images/shapes/leaf.png)"
                ></span>
              </h6>
              <!-- /.sec-title__tagline -->

              <h3 class="sec-title__title bw-split-in-left">
                Empowering Farmers, Connecting Markets, Transforming
                Agriculture.
              </h3>
              <!-- /.sec-title__title -->
            </div>
            <!-- /.sec-title -->
            <div class="about-three__content__quote">
              <i class="icon-farmer-two"></i>
              At My Krishi, we are dedicated to transforming agriculture by
              connecting farmers with the resources, technology, and knowledge
              they need to thrive. We provide innovative solutions that focus on
              four core pillars:
            </div>
            <div class="about-three__content__border"></div>
            <ul class="about-three__content__list">
              <li>
                <span class="icon-check-mark"></span>We bridge the gap between
                farmers and investors, offering low-cost funding and better ROI
                for all.
              </li>
              <li>
                <span class="icon-check-mark"></span>We connect farmers with top
                agri input suppliers, improving farming efficiency and crop
                yields.
              </li>
              <li>
                <span class="icon-check-mark"></span>We connect farmers directly
                to end markets, ensuring better prices and returns.
              </li>
              <li>
                <span class="icon-check-mark"></span>We provide farmers with
                up-to-date market data and modern agricultural knowledge for
                informed decision-making.
              </li>
            </ul>
            <router-link to="/about-us" class="alefox-btn">
              <span class="alefox-btn__item"></span>
              <span class="alefox-btn__item"></span>
              <span class="alefox-btn__item"></span>
              <span class="alefox-btn__item"></span>
              About More
            </router-link>
          </div>
          <!-- /.why-choose-two__content -->
        </div>
        <!-- /.col-lg-6 -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </section>
  <!-- /.about-three -->
</template>


<script>
export default {
  name: "AboutUs",
};
</script>
