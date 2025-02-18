<template>
  <section class="cta-four">
    <div
      class="cta-four__bg jarallax"
      data-jarallax
      data-speed="0.3"
      data-imgPosition="50% -100%"
      style="background-image: url(assets/images/backgrounds/cta-four-bg-1.jpg)"
    ></div>
    <!-- /.cta-four__bg -->
    <div class="container wow fadeInUp">
      <h5 class="cta-four__sub-title">Timeline Added</h5>
      <h2 class="cta-four__title">
        We Food Leader <span>40%</span> Off Time<br />
        Agriculture Market
      </h2>
      <ul
        class="countdown-one__list cta-four__countdown list-unstyled"
        data-leading-zeros="true"
        data-enable-days="true"
        data-deadline-date="dynamicDate"
      ></ul>
      <!-- /.countdown-one__list list-unstyled -->
      <a href="products.html" class="alefox-btn">
        <span class="alefox-btn__item"></span>
        <span class="alefox-btn__item"></span>
        <span class="alefox-btn__item"></span>
        <span class="alefox-btn__item"></span>
        Discover More
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: "TimeLine",
};
</script>
