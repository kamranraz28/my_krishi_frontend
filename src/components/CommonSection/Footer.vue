<template>
  <footer class="main-footer background-black">
    <div
      class="main-footer__bg background-black"
      style="
        background-image: url(/assets/images/backgrounds/footer-bg-1-1.jpg);
      "
    ></div>

    <div class="main-footer__top">
      <div class="container">
        <div class="row">
          <!-- About Section -->
          <div class="col-md-6 col-xl-5">
            <div class="footer-widget footer-widget--about">
              <a href="index.html" class="footer-widget__logo">
                <img
                  src="/assets/images/logo-dark-m.jpeg"
                  width="147"
                  alt="MyKrishi Logo"
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
                  <a href="tel:+8809678777180">+8809678777180</a>
                </li>
              </ul>
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
            </div>
          </div>

          <!-- Links Section -->
          <div class="col-md-8 col-xl-3">
            <div
              class="footer-widget footer-widget--links footer-widget--links-two"
            >
              <h2 class="footer-widget__title">Links</h2>
              <ul class="list-unstyled footer-widget__links">
                <li><router-link to="/about-us">About us</router-link></li>
                <li><router-link to="/contact-us">Contact Us</router-link></li>
                <li>
                  <router-link to="/project-list">Our Projects</router-link>
                </li>
              </ul>
            </div>
          </div>

          <!-- Recent Projects Section -->
          <div class="col-md-6 col-xl-3">
            <div class="footer-widget footer-widget--blog">
              <h5 class="footer-widget__title">Recent Projects</h5>
              <ul class="list-unstyled footer-widget__post">
                <li v-for="project in recentProjects" :key="project.id">
                  <img
                    :src="getImageUrl(project.details.image)"
                    :alt="project.details.title"
                  />
                  <span class="footer-widget__post__date">
                    {{
                      new Date(project.created_at).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })
                    }}
                  </span>
                  <h6 class="footer-widget__post__title">
                    <router-link :to="`/project-details/${project.id}`">
                      {{ project.details.title }}
                    </router-link>
                  </h6>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="main-footer__bottom">
      <div class="container">
        <div class="main-footer__bottom__inner">
          <p class="main-footer__copyright">
            &copy; Copyright <span class="dynamic-year"></span> by
            <router-link :to="`https://synergyinterface.com/`">
              Synergy Interface Ltd.
            </router-link>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import axios from "axios";

export default {
  name: "Footer",
  data() {
    return {
      recentProjects: [],
    };
  },
  methods: {
    async fetchProjects() {
      try {
        const response = await axios.get(
          "https://app.mykrishi.com/api/projects"
        );

        if (response.data.status === "success") {
          const allProjects = response.data.project;

          // Sort by created_at DESC and take top 2
          const sortedProjects = allProjects.sort(
            (a, b) => new Date(b.created_at) - new Date(a.created_at)
          );

          this.recentProjects = sortedProjects.slice(0, 2);
        }
      } catch (error) {
        console.error("Error fetching recent projects:", error);
      }
    },
    getImageUrl(image) {
      return `https://app.mykrishi.com/uploads/projects/${image}`;
    },
  },
  mounted() {
    this.fetchProjects();
  },
};
</script>
