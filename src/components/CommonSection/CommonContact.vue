<template>
  <section class="contact-two">
    <div class="container">
      <div class="row">
        <div
          class="col-md-6 col-xl-12 justify-content-center align-items-center"
        >
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
              <p>
                Feel free to reach out if you have any questions about this
                project
              </p>
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
                <input type="text" name="phone" placeholder="Phone" />
              </div>
              <!-- /.form-one__control form-one__control--full -->
              <!-- Add the message field -->
              <div class="form-one__control form-one__control--full">
                <textarea name="message" placeholder="Your Message"></textarea>
              </div>
              <!-- /.form-one__control form-one__control--full -->

              <!-- Add the privacy policy checkbox -->
              <div class="form-one__control form-one__control--full">
                <label class="privacy-policy-checkbox">
                  <input type="checkbox" name="privacy_policy" />
                  I agree to the <a href="#">privacy policy</a>
                </label>
              </div>
              <!-- /.form-one__control form-one__control--full -->

              <div class="form-one__control form-one__control--full">
                <button type="submit" class="alefox-btn">
                  <span class="alefox-btn__item"></span>
                  <span class="alefox-btn__item"></span>
                  <span class="alefox-btn__item"></span>
                  <span class="alefox-btn__item"></span>
                  Send Message
                </button>
              </div>
              <!-- /.form-one__control -->
            </div>
            <!-- /.form-one__group -->
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "CommonContact",
};
</script>
