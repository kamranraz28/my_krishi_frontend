<template>
  <AboveHeader />
  <CommonHeader />
  <section class="project-details">
    <div class="container">
      <!-- Project Image -->
      <div class="project-details__image">
        <img
          :src="getImageUrl(project.details.image)"
          :alt="project.details.title"
        />
      </div>
      <div class="row">
        <div class="col-lg-8">
          <div class="project-details__content">
            <h3 class="project-details__title">{{ project.details.title }}</h3>
            <p class="project-details__text">
              {{ project.details.description }}
            </p>

            <h4 class="project-details__title-two">Project Aims</h4>
            <p class="project-details__text">
              Here's how we protect you and our team members while providing the
              deepest, most thorough residential house cleaning in the industry.
            </p>

            <div class="project-details__bottom">
              <h3 class="project-details__bottom__title">
                To landscape your outside area is to modify the look in a<br />
                variety of different ways
              </h3>
              <p class="project-details__bottom__text">
                Perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium...
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <ul class="project-details__info">
            <li><span>BDT/Unit:</span>{{ project.details.unit_price }}</li>
            <li><span>Period:</span>{{ project.details.duration }}</li>
            <li><span>Location</span>{{ project.details.location }}</li>
            <li>
              <span>Possible Return:</span>{{ project.details.return_amount }}%
            </li>
            <li><span>Last Date of Booking:</span>March, 2025</li>
          </ul>
          <div class="project-details__help">
            <div
              class="project-details__help__bg"
              style="
                background-image: url('/assets/images/project/help-bg.jpg');
              "
            ></div>
            <h4 class="project-details__help__title">
              See More of Our Projects which are in Progress
            </h4>
            <router-link to="/project-list" class="alefox-btn">
              <span class="alefox-btn__item"></span>
              <span class="alefox-btn__item"></span>
              <span class="alefox-btn__item"></span>
              <span class="alefox-btn__item"></span>
              Visit Now
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
  <CommonFaq />
  <CommonContact />
  <Footer />
</template>

<script>
import AboveHeader from "@/components/CommonSection/AboveHeader.vue";
import CommonContact from "@/components/CommonSection/CommonContact.vue";
import CommonFaq from "@/components/CommonSection/CommonFaq.vue";
import CommonHeader from "@/components/CommonSection/CommonHeader.vue";
import Footer from "@/components/CommonSection/Footer.vue";
import axios from "axios";

export default {
  name: "ProjectDetails",
  components: {
    AboveHeader,
    CommonHeader,
    CommonFaq,
    CommonContact,
    Footer,
  },
  data() {
    return {
      project: {}, // To hold project data
    };
  },
  created() {
    this.fetchProjectDetails();
  },
  methods: {
    fetchProjectDetails() {
      const projectId = this.$route.params.id; // Get project ID from the URL
      axios
        .get(`http://127.0.0.1:8000/api/projects/${projectId}`)
        .then((response) => {
          if (response.data.status === "success") {
            this.project = response.data.project; // Set the project data
          }
        })
        .catch((error) => {
          console.error(
            "There was an error fetching the project details:",
            error
          );
        });
    },
    getImageUrl(image) {
      return `http://127.0.0.1:8000/uploads/projects/${image}`;
    },
  },
};
</script>

