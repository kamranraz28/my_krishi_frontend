<template>
  <AboveHeader />
  <CommonHeader />

  <section class="page-header">
    <div class="page-header__shape-left"></div>
    <div class="page-header__shape-right"></div>
    <div class="page-header__bg"></div>
    <div class="container">
      <h2 class="page-header__title bw-split-in-down">Login</h2>
      <ul class="alefox-breadcrumb list-unstyled">
        <li><a href="index.html">Home</a></li>
        <li><span>Login</span></li>
      </ul>
    </div>
  </section>

  <section class="login-page">
    <div class="container">
      <div class="login-page__wrap">
        <h3 class="login-page__wrap__title">Login your Account(Admin Only):</h3>

        <form @submit.prevent="LoginForm" class="login-page__form">
          <div v-if="errorMessage" class="error-message">
            {{ errorMessage }}
          </div>

          <div class="login-page__form-input-box">
            <input
              v-model="formData.email"
              type="email"
              placeholder="Username or email address *"
            />
          </div>
          <div class="login-page__form-input-box">
            <input
              v-model="formData.password"
              type="password"
              placeholder="Password *"
            />
          </div>
          <div class="login-page__check-forgot">
            <div class="login-page__checked-box">
              <input type="checkbox" v-model="rememberMe" id="save-data" />
              <label for="save-data"><span></span>Remember Me?</label>
            </div>
            <div class="login-page__form-forgot-password">
              <a href="login.html">Forgot your Password?</a>
            </div>
          </div>
          <button type="submit" class="alefox-btn">
            <span class="alefox-btn__item"></span>
            <span class="alefox-btn__item"></span>
            <span class="alefox-btn__item"></span>
            <span class="alefox-btn__item"></span>
            Login
          </button>
        </form>
      </div>
    </div>
  </section>

  <Footer />
</template>

<script>
import AboveHeader from "@/components/CommonSection/AboveHeader.vue";
import CommonHeader from "@/components/CommonSection/CommonHeader.vue";
import Footer from "@/components/CommonSection/Footer.vue";
import axios from "axios";

export default {
  name: "LogIn",
  components: {
    AboveHeader,
    CommonHeader,
    Footer,
  },
  data() {
    return {
      formData: {
        email: "",
        password: "",
      },
      rememberMe: false,
      errorMessage: "",
    };
  },
  methods: {
    async LoginForm() {
      try {
        const response = await axios.post(
          "http://localhost:8000/api/login",
          this.formData
        );

        if (response.status === 200 && response.data.token) {
          this.errorMessage = "";

          // Store token based on 'rememberMe' checkbox state
          if (this.rememberMe) {
            localStorage.setItem("authToken", response.data.token); // Persistent login
          } else {
            sessionStorage.setItem("authToken", response.data.token); // Temporary login
          }

          // Log the stored token to check if it's set correctly
          console.log(
            "Token stored:",
            sessionStorage.getItem("authToken") ||
              localStorage.getItem("authToken")
          );

          // Redirect to the dashboard
          this.$router.push("/dashboard");
        }
      } catch (error) {
        console.error("Login error:", error.response?.data);
        this.errorMessage =
          error.response?.data?.message || "Invalid credentials.";
      }
    },
  },
};
</script>

<style>
.error-message {
  color: red;
  margin-bottom: 10px;
  font-size: 14px;
}
</style>
