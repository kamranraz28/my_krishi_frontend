<template>
  <header
    ref="header"
    class="main-header sticky-header sticky-header--normal"
    :class="{
      'fixed-header': isSticky,
      'hidden-header': !isSticky && lastScrollY > 100,
    }"
  >
    <div class="container-fluid">
      <div class="main-header__inner">
        <!-- Logo -->
        <div class="main-header__logo">
          <router-link to="/">
            <img
              src="/assets/images/mk-logo-dark.png"
              alt="Alefox HTML"
              width="180"
            />
          </router-link>
        </div>

        <!-- Desktop Nav -->
        <nav class="main-header__nav main-menu">
          <ul class="main-menu__list">
            <li><router-link to="/">Home</router-link></li>
            <li class="dropdown">
              <a href="#">Projects</a>
              <ul>
                <li>
                  <router-link to="/project-list">All Project</router-link>
                </li>
                <li>
                  <router-link to="/invest-process">How to Invest</router-link>
                </li>
                <li>
                  <router-link to="/partner-with-us"
                    >Partner with Us</router-link
                  >
                </li>
                <li>
                  <router-link to="/global-agro-village"
                    >Global Agro Village</router-link
                  >
                </li>
              </ul>
            </li>
            <li class="dropdown">
              <a href="#">About Us</a>
              <ul>
                <li><router-link to="/about-us">Who We Are</router-link></li>
                <li>
                  <router-link to="/mission-and-vision"
                    >Mission & Vision</router-link
                  >
                </li>
                <li><router-link to="/our-work">How We Work</router-link></li>
                <li><router-link to="/our-team">Our Team</router-link></li>
                <li>
                  <router-link to="/global-agro-venture"
                    >Global Agro Venture</router-link
                  >
                </li>
                <li><router-link to="/career">Career</router-link></li>
              </ul>
            </li>
            <li><router-link to="/contact-us">Contact Us</router-link></li>
            <li><router-link to="/blogs">Blogs</router-link></li>
            <li><router-link to="/faq">FAQ</router-link></li>
          </ul>
        </nav>

        <!-- Mobile Menu Button -->
        <div class="main-header__right">
          <div
            class="mobile-nav__btn mobile-nav__toggler"
            @click="toggleMobileNav"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div class="main-header__right__border"></div>
          <div class="main-header__call">
            <div class="main-header__call__icon">
              <span class="icon-phone-call-two"></span>
            </div>
            <div class="main-header__call__title">Requesting a Call:</div>
            <a class="main-header__call__text" href="tel:+8809678777180">
              +8809678777180
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Nav Menu -->
    <!-- Mobile Nav Menu -->
    <div class="mobile-menu" v-if="isMobileNavOpen">
      <ul class="mobile-menu__list">
        <li><router-link to="/" @click="toggleMobileNav">Home</router-link></li>

        <li>
          <router-link to="/project-list" @click="toggleMobileNav"
            >All Project</router-link
          >
        </li>
        <li>
          <router-link to="/invest-process" @click="toggleMobileNav"
            >How to Invest</router-link
          >
        </li>
        <li>
          <router-link to="/partner-with-us" @click="toggleMobileNav"
            >Partner with Us</router-link
          >
        </li>
        <li>
          <router-link to="/global-agro-village" @click="toggleMobileNav"
            >Global Agro Village</router-link
          >
        </li>

        <li>
          <router-link to="/about-us" @click="toggleMobileNav"
            >Who We Are</router-link
          >
        </li>
        <li>
          <router-link to="/mission-and-vision" @click="toggleMobileNav"
            >Mission & Vision</router-link
          >
        </li>
        <li>
          <router-link to="/our-work" @click="toggleMobileNav"
            >How We Work</router-link
          >
        </li>
        <li>
          <router-link to="/our-team" @click="toggleMobileNav"
            >Our Team</router-link
          >
        </li>
        <li>
          <router-link to="/global-agro-venture" @click="toggleMobileNav"
            >Global Agro Venture</router-link
          >
        </li>
        <li>
          <router-link to="/career" @click="toggleMobileNav"
            >Career</router-link
          >
        </li>

        <li>
          <router-link to="/contact-us" @click="toggleMobileNav"
            >Contact Us</router-link
          >
        </li>
        <li>
          <router-link to="/blogs" @click="toggleMobileNav">Blogs</router-link>
        </li>
        <li>
          <router-link to="/faq" @click="toggleMobileNav">FAQ</router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: "CommonHeader",
  data() {
    return {
      isSticky: false,
      lastScrollY: 0,
      isMobileNavOpen: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const currentScrollY = window.scrollY;
      if (currentScrollY < this.lastScrollY && currentScrollY > 100) {
        this.isSticky = true;
      } else {
        this.isSticky = false;
      }
      this.lastScrollY = currentScrollY;
    },
    toggleMobileNav() {
      this.isMobileNavOpen = !this.isMobileNavOpen;
    },
  },
};
</script>

<style scoped>
.fixed-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  transform: translateY(0);
  transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
  opacity: 1;
}

.hidden-header {
  transform: translateY(-100%);
  opacity: 0;
  transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
}

/* Optional smooth initial animation */
@keyframes slideDown {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.mobile-menu {
  background-color: #fff;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  z-index: 999;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.mobile-menu__list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.mobile-menu__list li {
  margin-bottom: 15px;
}

.mobile-menu__list a {
  color: #000;
  text-decoration: none;
  font-weight: 500;
}
</style>
