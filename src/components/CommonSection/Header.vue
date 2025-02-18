<template>
  <div class="topbar-two">
    <div class="container">
      <div class="topbar-two__inner">Welcome to MyKrishi !</div>
    </div>
  </div>

  <header ref="header" class="main-header main-header--three sticky-header">
    <div class="main-header__inner">
      <div class="main-header__logo">
        <a href="index.html">
          <img
            src="/assets/images/logo-light.png"
            alt="Alefox HTML"
            width="147"
          />
        </a>
      </div>

      <nav class="main-header__nav main-menu">
        <ul class="main-menu__list">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/project-list">Projects</router-link></li>
          <li class="dropdown">
            <a href="#">Pages</a>
            <ul>
              <li>
                <a href="project.html">Our Project</a>
                <ul>
                  <li><a href="project.html">Project Page</a></li>
                  <li><a href="project-carousel.html">Project Carousel</a></li>
                  <li><a href="project-details.html">Project Details</a></li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      <div class="main-header__right">
        <div class="mobile-nav__btn mobile-nav__toggler">
          <span></span><span></span><span></span>
        </div>
        <a href="#" class="search-toggler main-header__search">
          <i class="icon-magnifying-glass" aria-hidden="true"></i>
          <span class="sr-only">Search</span>
        </a>
        <a href="cart.html" class="main-header__cart">
          <i class="icon-shopping-cart" aria-hidden="true"></i>
          <span class="main-header__cart__count">02</span>
          <span class="sr-only">Search</span>
        </a>
      </div>
    </div>
  </header>

  <!-- main-slider-end -->
</template>


<script>
export default {
  name: "Header",
};
</script>

<!-- <script>
export default {
  name: "Header",
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  data() {
    return {
      isMobileNavOpen: false,
    };
  },
  methods: {
    handleScroll() {
      const header = this.$refs.header;
      if (window.scrollY > 100) {
        header.classList.add("fixed-header");
      } else {
        header.classList.remove("fixed-header");
      }
    },
    toggleMobileNav() {
      this.isMobileNavOpen = !this.isMobileNavOpen;
    },
  },
};
</script> -->

<!--
<style scoped>
.fixed-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #202221;
  z-index: 1000;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation: slideDown 0.3s ease-in-out;
}

@keyframes slideDown {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
}
</style> -->
