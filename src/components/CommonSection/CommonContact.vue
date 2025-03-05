<template>
  <section class="contact-two">
    <div class="container">
      <div class="row">
        <div
          class="col-md-6 col-xl-12 justify-content-center align-items-center"
        >
          <form
            @submit.prevent="submitForm"
            class="contact-two__form contact-form-validated form-one wow fadeInUp"
            data-wow-duration="1500ms"
          >
            <div class="sec-title text-center">
              <h6 class="sec-title__tagline bw-split-in-right">
                <span
                  class="sec-title__tagline__left-leaf"
                  style="background-image: url(/assets/images/shapes/leaf.png)"
                ></span>
                Contact Us
                <span
                  class="sec-title__tagline__right-leaf"
                  style="background-image: url(/assets/images/shapes/leaf.png)"
                ></span>
              </h6>
              <h3 class="sec-title__title bw-split-in-left">Get in Touch</h3>
              <p>
                Feel free to reach out if you have any questions about this
                project.
              </p>
            </div>

            <div class="form-one__group">
              <div class="form-one__control form-one__control--full">
                <input
                  v-model="formData.name"
                  type="text"
                  placeholder="Name"
                  required
                />
              </div>
              <div class="form-one__control form-one__control--full">
                <input
                  v-model="formData.email"
                  type="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div class="form-one__control form-one__control--full">
                <input
                  v-model="formData.phone"
                  type="text"
                  placeholder="Phone"
                />
              </div>
              <div class="form-one__control form-one__control--full">
                <textarea
                  v-model="formData.message"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>

              <div class="form-one__control form-one__control--full">
                <label class="privacy-policy-checkbox">
                  <input v-model="formData.privacy_policy" type="checkbox" />
                  I agree to the <a href="#">privacy policy</a>
                </label>
              </div>

              <div class="form-one__control form-one__control--full">
                <button type="submit" class="alefox-btn">
                  <span class="alefox-btn__item"></span>
                  <span class="alefox-btn__item"></span>
                  <span class="alefox-btn__item"></span>
                  <span class="alefox-btn__item"></span>
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "CommonContact",
  data() {
    return {
      formData: {
        name: "",
        email: "",
        phone: "",
        message: "",
        privacy_policy: false,
        project_id: "",
      },
    };
  },
  mounted() {
    this.formData.project_id = this.$route.params.id;
  },
  methods: {
    async submitForm() {
      try {
        // Send POST request to your API
        const response = await axios.post(
          "http://127.0.0.1:8000/api/messages/store",
          this.formData
        );

        // Handle success (you can show a success message here)
        alert("Message sent successfully!");
      } catch (error) {
        // Handle error (you can show an error message here)
        console.error("There was an error:", error);
        alert("Failed to send the message.");
      }
    },
  },
};
</script>

<style scoped>
/* Your custom styles here */
</style>
