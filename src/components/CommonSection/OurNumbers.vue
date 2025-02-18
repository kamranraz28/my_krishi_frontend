<template>
  <section class="funfact-one">
    <div class="container">
      <ul class="list-unstyled funfact-one__list">
        <li>
          <div class="funfact-one__list__icon">
            <span class="icon-agronomy"></span>
          </div>
          <div class="funfact-one__list__content">
            <h5 class="funfact-one__list__number count-box">
              <span class="count-text" ref="count1">0</span> +
            </h5>
            <p class="funfact-one__list__text">Projects</p>
          </div>
        </li>
        <li>
          <div class="funfact-one__list__icon">
            <span class="icon-management"></span>
          </div>
          <div class="funfact-one__list__content">
            <h5 class="funfact-one__list__number count-box">
              <span class="count-text" ref="count2">0</span>+
            </h5>
            <p class="funfact-one__list__text">Investors</p>
          </div>
        </li>
        <li>
          <div class="funfact-one__list__icon">
            <span class="icon-sustainability"></span>
          </div>
          <div class="funfact-one__list__content">
            <h5 class="funfact-one__list__number count-box">
              <span class="count-text" ref="count3">0</span> M+
            </h5>
            <p class="funfact-one__list__text">Total Value</p>
          </div>
        </li>
        <li>
          <div class="funfact-one__list__icon">
            <span class="icon-save-energy"></span>
          </div>
          <div class="funfact-one__list__content">
            <h5 class="funfact-one__list__number count-box">
              <span class="count-text" ref="count4">0</span> +
            </h5>
            <p class="funfact-one__list__text">Visitors/Day</p>
          </div>
        </li>
      </ul>
    </div>
    <!-- /.container -->
  </section>
  <!-- /.funfact-one -->
</template>

<script>
export default {
  name: "OurNumbers",
  mounted() {
    this.startCounting();
  },
  methods: {
    startCounting() {
      const counts = [
        { ref: this.$refs.count1, stop: 100 },
        { ref: this.$refs.count2, stop: 900 },
        { ref: this.$refs.count3, stop: 50 },
        { ref: this.$refs.count4, stop: 800 },
      ];

      counts.forEach(({ ref, stop }) => {
        let start = 0;
        const speed = 2500; // Duration for the counting animation
        const interval = setInterval(() => {
          if (start < stop) {
            start++;
            ref.textContent = start;
          } else {
            clearInterval(interval);
          }
        }, speed / stop); // Dividing the speed by the stop number for smoother transition
      });
    },
  },
};
</script>
