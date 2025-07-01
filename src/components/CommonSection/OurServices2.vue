<template>
  <!-- Service Start -->
  <section class="service-three">
    <div
      class="service-three__bg"
      style="background-image: url(assets/images/shapes/service-bg-3-shape.png)"
    ></div>
    <div
      class="service-three__shape"
      style="
        background-image: url(assets/images/resources/service-2-shape-2.png);
      "
    ></div>
    <div class="container">
      <div class="sec-title text-center">
        <h6 class="sec-title__tagline bw-split-in-right">
          <span
            class="sec-title__tagline__left-leaf"
            style="background-image: url(assets/images/shapes/leaf.png)"
          ></span
          >Our Latest Projects<span
            class="sec-title__tagline__right-leaf"
            style="background-image: url(assets/images/shapes/leaf.png)"
          ></span>
        </h6>

        <h3 class="sec-title__title bw-split-in-left">
          These are our latest three projects
        </h3>
      </div>

      <div
        ref="carousel"
        class="service-three__carousel owl-carousel owl-theme"
      >
        <div class="item" v-for="project in recentProjects" :key="project.id">
          <div class="service-three__item wow fadeInUp" data-wow-delay="00ms">
            <div class="service-three__item__image">
              <img
                :src="getImageUrl(project.details.image)"
                :alt="project.details.title"
              />
            </div>
            <div class="service-three__item__content">
              <div class="service-three__item__icon">
                <span class="icon-salad"></span>
              </div>
              <h3 class="service-three__item__title">
                <a href="service-d-fresh.html">{{ project.details.title }}</a>
              </h3>
              <p class="service-three__item__text">
                {{ truncateText(project.details.description, 20) }}
              </p>
              <router-link
                :to="`/project-details/${project.id}`"
                class="service-three__item__link"
              >
                <i class="icofont-arrow-up"></i>
              </router-link>
            </div>
            <div
              class="service-three__item__shape"
              style="
                background-image: url(assets/images/shapes/service-3-shape.png);
              "
            ></div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Service End -->
</template>

<script>
import axios from "axios";
import { nextTick } from "vue";

export default {
  name: "OurServices2",

  data() {
    return {
      recentProjects: [],
      owlInitialized: false,
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

          // Sort by created_at DESC and take top 3
          const sortedProjects = allProjects.sort(
            (a, b) => new Date(b.created_at) - new Date(a.created_at)
          );

          this.recentProjects = sortedProjects.slice(0, 3);

          await nextTick();
          this.initOwlCarousel();
        }
      } catch (error) {
        console.error("Error fetching recent projects:", error);
      }
    },

    getImageUrl(image) {
      return `https://app.mykrishi.com/uploads/projects/${image}`;
    },

    truncateText(text, wordLimit) {
      if (!text) return "";
      const words = text.split(" ");
      if (words.length <= wordLimit) {
        return text;
      }
      return words.slice(0, wordLimit).join(" ") + "...";
    },

    initOwlCarousel() {
      if (this.owlInitialized) {
        // If already initialized, destroy before re-init (optional)
        $(this.$refs.carousel).trigger("destroy.owl.carousel");
        this.owlInitialized = false;
      }

      $(this.$refs.carousel).owlCarousel({
        items: 1,
        margin: 30,
        loop: false,
        smartSpeed: 700,
        nav: false,
        dots: true,
        autoplay: false,
        responsive: {
          0: { items: 1 },
          768: { items: 2 },
          992: { items: 3 },
        },
      });

      this.owlInitialized = true;
    },
  },

  mounted() {
    this.fetchProjects();
  },
};
</script>
