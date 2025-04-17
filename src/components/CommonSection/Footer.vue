<template>
  <footer class="main-footer background-black">
    <div
      class="main-footer__bg background-black"
      style="
        background-image: url(/assets/images/backgrounds/footer-bg-1-1.jpg);
      "
    ></div>
    <!-- /.main-footer__bg -->
    <div class="main-footer__top">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-xl-5">
            <div class="footer-widget footer-widget--about">
              <a href="index.html" class="footer-widget__logo">
                <img
                  src="/assets/images/my-krishi-3.png"
                  width="147"
                  alt="Alefox HTML Template"
                />
              </a>
              <ul class="list-unstyled footer-widget__info">
                <li>
                  <span class="footer-widget__info__icon"
                    ><i class="icofont-clock-time"></i
                  ></span>
                  Open Hours of Government: <br />
                  Sun - Thu: 10.00 am. - 6.00 pm.
                </li>
                <li>
                  <span class="footer-widget__info__icon"
                    ><i class="icofont-location-pin"></i
                  ></span>
                  DOHS, Mirpur, Bangladesh
                </li>
                <li>
                  <span class="footer-widget__info__icon"
                    ><i class="icofont-phone"></i
                  ></span>
                  <a href="tel:+8801609758377">+88 01609758377</a>
                </li>
              </ul>
              <!-- /.list-unstyled -->
              <div class="footer-widget__social">
                <a href="https://facebook.com/">
                  <i class="fab fa-facebook-f" aria-hidden="true"></i>
                  <span class="sr-only">Facebook</span>
                </a>
                <a href="https://pinterest.com/">
                  <i class="fab fa-pinterest-p" aria-hidden="true"></i>
                  <span class="sr-only">Pinterest</span>
                </a>
                <a href="https://twitter.com/">
                  <i class="fab fa-twitter" aria-hidden="true"></i>
                  <span class="sr-only">Twitter</span>
                </a>
                <a href="https://instagram.com/">
                  <i class="fab fa-instagram" aria-hidden="true"></i>
                  <span class="sr-only">Instagram</span>
                </a>
              </div>
              <!-- /.footer-widget__social -->
            </div>
            <!-- /.footer-widget -->
          </div>
          <!-- /.col-md-6 -->

          <!-- /.col-md-6 -->
          <div class="col-md-8 col-xl-3">
            <div
              class="footer-widget footer-widget--links footer-widget--links-two"
            >
              <h2 class="footer-widget__title">Links</h2>
              <!-- /.footer-widget__title -->
              <ul class="list-unstyled footer-widget__links">
                <!-- <li><router-link to="/log-in">Login</router-link></li> -->
                <li><router-link to="/about-us">About us</router-link></li>
                <li><router-link to="/contact-us">Contact Us</router-link></li>
                <li>
                  <router-link to="/project-list">Our Projects</router-link>
                </li>
              </ul>
              <!-- /.list-unstyled footer-widget__links -->
            </div>
            <!-- /.footer-widget -->
          </div>
          <!-- /.col-md-6 -->
          <div class="col-md-6 col-xl-3">
            <div class="footer-widget footer-widget--blog">
              <h5 class="footer-widget__title">Recent Posts</h5>
              <!-- /.footer-widget__title -->
              <ul class="list-unstyled footer-widget__post">
                <li>
                  <img src="/assets/images/blog/w-1.jpg" alt="alefox" />
                  <span class="footer-widget__post__date">23 jun 2023</span>
                  <h6 class="footer-widget__post__title">
                    <a href="blog-details-right.html"
                      >Organic Food for Healty life</a
                    >
                  </h6>
                </li>
                <li>
                  <img src="/assets/images/blog/w-2.jpg" alt="alefox" />
                  <span class="footer-widget__post__date">23 jun 2023</span>
                  <h6 class="footer-widget__post__title">
                    <a href="blog-details-right.html"
                      >Success of Score for Farmer</a
                    >
                  </h6>
                </li>
              </ul>
            </div>
            <!-- /.footer-widget -->
          </div>
          <!-- /.col-md-6 -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container -->
    </div>
    <!-- /.main-footer__top -->
    <div class="main-footer__bottom">
      <div class="container">
        <div class="main-footer__bottom__inner">
          <p class="main-footer__copyright">
            &copy; Copyright <span class="dynamic-year"></span> by Synergy
            Interface Ltd
          </p>
        </div>
      </div>
    </div>
    <!-- /.main-footer__bottom -->
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>
