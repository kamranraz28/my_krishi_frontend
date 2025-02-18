<template>
  <header
    ref="header"
    class="main-header sticky-header sticky-header--normal"
    :class="{ 'fixed-header': isSticky }"
  >
    <div class="container-fluid">
      <div class="main-header__inner">
        <div class="main-header__logo">
          <router-link to="/">
            <img
              src="/assets/images/logo-dark.png"
              alt="Alefox HTML"
              width="147"
            />
          </router-link>
        </div>

        <nav class="main-header__nav main-menu">
          <ul class="main-menu__list">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/project-list">Projects</router-link></li>
            <li class="dropdown">
              <a href="#">Pages</a>
              <ul>
                <li>
                  <a href="team.html">Our Team</a>
                  <ul>
                    <li><a href="team.html">Team Page</a></li>
                    <li><a href="team-carousel.html">Team Carousel</a></li>
                    <li><a href="team-details.html">Team Details</a></li>
                  </ul>
                </li>
                <li><a href="reviews.html">Testimonials</a></li>
              </ul>
            </li>
          </ul>
        </nav>

        <div class="main-header__right">
          <div
            class="mobile-nav__btn mobile-nav__toggler"
            @click="toggleMobileNav"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          <a href="#" class="search-toggler main-header__search">
            <i class="icon-magnifying-glass" aria-hidden="true"></i>
            <span class="sr-only">Search</span>
          </a>

          <a href="cart.html" class="main-header__cart">
            <i class="icon-shopping-cart" aria-hidden="true"></i>
            <span class="main-header__cart__count">02</span>
          </a>

          <div class="main-header__right__border"></div>
          <div class="main-header__call">
            <div class="main-header__call__icon">
              <span class="icon-phone-call-two"></span>
            </div>
            <div class="main-header__call__title">Requesting a Call:</div>
            <a class="main-header__call__text" href="tel:88012365499"
              >+88 0123 654 99</a
            >
          </div>
        </div>
      </div>
    </div>
  </header>
</template>


<script>
export default {
  name: "CommonHeader",
};
</script>

<!-- <script>
export default {
  name: "CommonHeader",
  data() {
    return {
      isSticky: false,
      lastScrollY: 0,
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
  transition: transform 0.9s ease-in-out;
}

.hidden-header {
  transform: translateY(-100%);
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

