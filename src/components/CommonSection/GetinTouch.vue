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
            action="https://bracketweb.com/alefox-html/inc/sendemail.php"
          >
            <div class="sec-title text-center">
              <h6 class="sec-title__tagline bw-split-in-right">
                <span
                  class="sec-title__tagline__left-leaf"
                  style="background-image: url(/assets/images/shapes/leaf.png)"
                ></span
                >Contact Us<span
                  class="sec-title__tagline__right-leaf"
                  style="background-image: url(/assets/images/shapes/leaf.png)"
                ></span>
              </h6>
              <!-- /.sec-title__tagline -->

              <h3 class="sec-title__title bw-split-in-left">Get in Touch</h3>
              <!-- /.sec-title__title -->
            </div>
            <!-- /.sec-title -->
            <div class="form-one__group">
              <div class="form-one__control form-one__control--full">
                <input type="text" name="name" placeholder="Name" />
              </div>
              <!-- /.form-one__control form-one__control--full -->
              <div class="form-one__control form-one__control--full">
                <input type="email" name="email" placeholder="Email" />
              </div>
              <!-- /.form-one__control form-one__control--full -->
              <div class="form-one__control form-one__control--full">
                <input type="text" name="address" placeholder="Address" />
              </div>
              <!-- /.form-one__control form-one__control--full -->
              <div class="form-one__control form-one__control--full">
                <input type="text" name="phone" placeholder="Phone" />
              </div>
              <!-- /.form-one__control form-one__control--full -->
              <div class="form-one__control form-one__control--full">
                <div class="form-one__control__select">
                  <label class="sr-only" for="service-select"
                    >Choose Service</label
                  >
                  <!-- /#service-select.sr-only -->
                  <select class="selectpicker" id="service-select">
                    <option value="Select service">Choose Service</option>
                    <option value="Select service 01">Select Service 01</option>
                    <option value="Select service 02">Select Service 02</option>
                  </select>
                </div>
                <!-- /.main-menu__service -->
              </div>
              <!-- /.form-one__control form-one__control--full -->
              <div class="form-one__control form-one__control--full">
                <button type="submit" class="alefox-btn">
                  <span class="alefox-btn__item"></span>
                  <span class="alefox-btn__item"></span>
                  <span class="alefox-btn__item"></span>
                  <span class="alefox-btn__item"></span>
                  Send Request
                </button>
              </div>
              <!-- /.form-one__control -->
            </div>
            <!-- /.form-one__group -->
          </form>
        </div>
        <div class="col-md-6 col-xl-7 d-flex align-items-center wow fadeInUp">
          <ul class="contact-two__list">
            <li class="contact-two__item">
              <div class="contact-two__item__icon">
                <span class="icon-phone-call"></span>
              </div>
              <div class="contact-two__item__content">
                <h3 class="contact-two__item__title">Call This Now</h3>
                <p class="contact-two__item__text">
                  <a href="tel:+044461556695">+044461556695</a>
                </p>
              </div>
            </li>
            <!-- item -->
            <li class="contact-two__item">
              <div class="contact-two__item__icon">
                <span class="icon-email"></span>
              </div>
              <div class="contact-two__item__content">
                <h3 class="contact-two__item__title">Your Message</h3>
                <p class="contact-two__item__text">
                  <a href="mailto:your@gmail.com">your@gmail.com</a>
                </p>
              </div>
            </li>
            <!-- item -->
            <li class="contact-two__item">
              <div class="contact-two__item__icon">
                <span class="icon-location"></span>
              </div>
              <div class="contact-two__item__content">
                <h3 class="contact-two__item__title">Your Location</h3>
                <p class="contact-two__item__text">13/A, Miranda City</p>
              </div>
            </li>
            <!-- item -->
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
export default {
  name: "GetinTouch",
};
</script>
