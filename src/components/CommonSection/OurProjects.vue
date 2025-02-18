<template>
  <section class="project-two">
    <div class="container">
      <div class="sec-title text-center">
        <h6 class="sec-title__tagline bw-split-in-right">
          <span
            class="sec-title__tagline__left-leaf"
            style="background-image: url(/assets/images/shapes/leaf.png)"
          ></span
          >Our Projects<span
            class="sec-title__tagline__right-leaf"
            style="background-image: url(/assets/images/shapes/leaf.png)"
          ></span>
        </h6>
        <!-- /.sec-title__tagline -->

        <h3 class="sec-title__title bw-split-in-left">Explore This Projects</h3>
        <!-- /.sec-title__title -->
      </div>
      <!-- /.sec-title -->
      <div
        class="project-two__carousel alefox-owl__carousel alefox-owl__carousel--with-shadow alefox-owl__carousel--basic-nav owl-carousel owl-theme"
        data-owl-options='{
				"items": 1,
				"margin": 30,
				"loop": false,
				"smartSpeed": 700,
				"nav": false,
				"navText": ["<span class=\"icofont-bubble-left\"></span>","<span class=\"icofont-bubble-righ\"></span>"],
				"dots": true,
				"autoplay": false,
				"responsive": {
					"0": {
						"items": 1
					},
					"768": {
						"items": 2
					},
					"1024": {
						"items": 3
					},
					"1400": {
						"items": 4
					}
				}
			}'
      >
        <div class="item">
          <div class="project-two__item">
            <img src="/assets/images/project/project-2-2.jpg" alt="alefox" />
            <div class="project-two__item__content">
              <p class="project-two__item__cats">Gardening</p>
              <h5 class="project-two__item__title">
                <a href="project-details.html">Lawn Care & Mowing</a>
              </h5>
              <a href="project-details.html" class="project-two__item__rm">
                <i class="icofont-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
        <!-- /.item -->
        <div class="item">
          <div class="project-two__item">
            <img src="/assets/images/project/project-2-3.jpg" alt="alefox" />
            <div class="project-two__item__content">
              <p class="project-two__item__cats">Gardening</p>
              <h5 class="project-two__item__title">
                <a href="project-details.html">Garden Design</a>
              </h5>
              <a href="project-details.html" class="project-two__item__rm">
                <i class="icofont-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
        <!-- /.item -->
        <div class="item">
          <div class="project-two__item">
            <img src="/assets/images/project/project-2-4.jpg" alt="alefox" />
            <div class="project-two__item__content">
              <p class="project-two__item__cats">Gardening</p>
              <h5 class="project-two__item__title">
                <a href="project-details.html">General Landscaping</a>
              </h5>
              <a href="project-details.html" class="project-two__item__rm">
                <i class="icofont-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
        <!-- /.item -->
        <div class="item">
          <div class="project-two__item">
            <img src="/assets/images/project/project-2-5.jpg" alt="alefox" />
            <div class="project-two__item__content">
              <p class="project-two__item__cats">Gardening</p>
              <h5 class="project-two__item__title">
                <a href="project-details.html">Tree Felling</a>
              </h5>
              <a href="project-details.html" class="project-two__item__rm">
                <i class="icofont-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
        <!-- /.item -->
        <div class="item">
          <div class="project-two__item">
            <img src="/assets/images/project/project-2-1.jpg" alt="alefox" />
            <div class="project-two__item__content">
              <p class="project-two__item__cats">Gardening</p>
              <h5 class="project-two__item__title">
                <a href="project-details.html">Garden Maintenance</a>
              </h5>
              <a href="project-details.html" class="project-two__item__rm">
                <i class="icofont-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
        <!-- /.item -->
      </div>
    </div>
    <!-- /.container -->
  </section>
  <!-- /.project-two -->
</template>

<script>
export default {
  name: "OurProjects",
};
</script>
