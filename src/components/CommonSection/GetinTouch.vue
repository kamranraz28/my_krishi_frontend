<template>
  <section class="contact-two">
    <div
      class="contact-two__bg"
      style="background-image: url(/assets/images/backgrounds/contact-bg-2.jpg)"
    ></div>
    <div
      class="contact-two__shape"
      style="background-image: url(/assets/images/shapes/contact-2-shape-1.png)"
    ></div>
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-xl-5">
          <form
            class="contact-two__form contact-form-validated form-one wow fadeInUp"
            data-wow-duration="1500ms"
            @submit.prevent="submitForm"
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
                  v-model="formData.address"
                  type="text"
                  placeholder="Address"
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
                  Send Request
                </button>
              </div>
            </div>
          </form>
        </div>

        <div class="col-md-6 col-xl-7 d-flex align-items-center wow fadeInUp">
          <ul class="contact-two__list">
            <li class="contact-two__item">
              <div class="contact-two__item__icon">
                <span class="icon-phone-call"></span>
              </div>
              <div class="contact-two__item__content">
                <h3 class="contact-two__item__title">Call Us Now</h3>
                <p class="contact-two__item__text">
                  <a href="tel:+8809678777180">+8809678777180</a>
                </p>
              </div>
            </li>
            <li class="contact-two__item">
              <div class="contact-two__item__icon">
                <span class="icon-email"></span>
              </div>
              <div class="contact-two__item__content">
                <h3 class="contact-two__item__title">Our E-mail</h3>
                <p class="contact-two__item__text">
                  <a href="mailto:info@mykrishi.com">info@mykrishi.com</a>
                </p>
              </div>
            </li>
            <li class="contact-two__item">
              <div class="contact-two__item__icon">
                <span class="icon-location"></span>
              </div>
              <div class="contact-two__item__content">
                <h3 class="contact-two__item__title">Our Location</h3>
                <p class="contact-two__item__text">DOHS, Mirpur, Bangladesh</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "GetinTouch",
  data() {
    return {
      formData: {
        name: "",
        email: "",
        phone: "",
        address: "",
        message: "",
        privacy_policy: false, // <- Added this
      },
    };
  },
  methods: {
    async submitForm() {
      if (!this.formData.privacy_policy) {
        alert("You must agree to the privacy policy before submitting.");
        return;
      }

      try {
        const response = await axios.post(
          this.$baseURL + "/api/contacts/store",
          this.formData
        );
        alert("Message sent successfully!");

        // Reset form
        this.formData = {
          name: "",
          email: "",
          phone: "",
          address: "",
          message: "",
          privacy_policy: false,
        };
      } catch (error) {
        console.error("There was an error:", error);
        alert("Failed to send the message.");
      }
    },
  },
};
</script>
