<template>
  <div class="page-wrapper">
    <AboveHeader />
    <CommonHeader />

    <section class="page-header">
      <div class="page-header__shape-left"></div>
      <div class="page-header__shape-right"></div>
      <div class="page-header__bg"></div>
      <div class="container">
        <h2 class="page-header__title bw-split-in-down">Projects</h2>
        <ul class="alefox-breadcrumb list-unstyled">
          <li><router-link to="/">Home</router-link></li>
          <li><span>Projects</span></li>
        </ul>
      </div>
    </section>

    <section class="blog-one">
      <div class="container">
        <div class="row gutter-y-30">
          <div
            v-for="project in projects"
            :key="project.id"
            class="col-md-6 col-lg-4"
          >
            <div class="blog-card wow fadeInUp" data-wow-duration="1500ms">
              <div class="blog-card__image">
                <img
                  :src="getImageUrl(project.details.image)"
                  :alt="project.details.title"
                />
                <img
                  :src="getImageUrl(project.details.image)"
                  :alt="project.details.title"
                />
                <router-link
                  :to="`/project-details/${project.id}`"
                  class="blog-card__image__link"
                >
                  <span class="sr-only">{{ project.details.title }}</span>
                </router-link>
              </div>
              <div class="blog-card__content">
                <ul class="list-unstyled blog-card__meta">
                  <li>
                    <i class="icofont-location-pin"></i
                    >{{ project.details.location }}
                  </li>
                  <li>
                    <i class="fa-solid fa-bangladeshi-taka-sign"></i>BDT
                    {{ project.details.unit_price }}/Unit
                  </li>
                </ul>
                <h3 class="blog-card__title">
                  <router-link :to="`/project-details/${project.id}`">{{
                    project.details.title
                  }}</router-link>
                </h3>
                <p class="blog-card__text">
                  Period: {{ project.details.duration }} <br />
                  Return: {{ project.details.return_amount }}%
                </p>
                <router-link
                  :to="`/project-details/${project.id}`"
                  class="blog-card__link"
                >
                  <i class="icofont-arrow-right"></i> Description
                </router-link>
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
import axios from "axios";

export default {
  name: "ProjectList",
  components: {
    AboveHeader,
    CommonHeader,
    Footer,
  },
  data() {
    return {
      projects: [],
    };
  },
  methods: {
    async fetchProjects() {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/projects");
        if (response.data.status === "success") {
          this.projects = response.data.project;
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    },
    getImageUrl(image) {
      return `http://127.0.0.1:8000/uploads/projects/${image}`;
    },
  },
  mounted() {
    this.fetchProjects();
  },
};
</script>
