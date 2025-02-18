<template>
  <AboveHeader />
  <CommonHeader />
  <section class="project-details">
    <div class="container">
      <div class="project-details__image">
        <img src="/assets/images/project/project-details.jpg" alt="alefox" />
      </div>
      <div class="row">
        <div class="col-lg-8">
          <div class="project-details__content">
            <h3 class="project-details__title">Garden Maintenance</h3>
            <p class="project-details__text">
              Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit
            </p>
            <p class="project-details__text">
              Nor again is there anyone who loves or pursues or desires to
              obtain pain of itself, because it is pain, but because
              occasionally circumstances occur in which toil and pain can
              procure him some great pleasure. To take a trivial example, which
              of us ever undertakes laborious physical exercise
            </p>
            <h4 class="project-details__title-two">Project Aims</h4>
            <p class="project-details__text">
              Here's how we protect you and our team members while providing the
              deepest, most thorough residential house cleaning in the industry
              But who has any right to find fault with a man who chooses to
              enjoy a lorem pleasure that has no annoying consequences, or one
              who avoids a pain that produces
            </p>
            <p class="project-details__text">
              Nor again is there anyone who loves or pursues or desires to
              obtain pain of itself, because it is pain, but because
              occasionally circumstances occur in which toil and pain can
              procure him some great pleasure. Lorem Ipsum has been the ndustry
              stan when an unknown printer took a firm.
            </p>

            <div class="project-details__bottom">
              <h3 class="project-details__bottom__title">
                To landscape your outside area is to modify the look in a<br />
                variety of different ways
              </h3>
              <p class="project-details__bottom__text">
                Perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <ul class="project-details__info">
            <li><span>BDT/Unit:</span>5,000</li>
            <li><span>Period:</span>12 Months</li>
            <li><span>Location</span>Mymensingh</li>
            <li><span>Possible Return:</span>10-15%</li>
            <li><span>Last Date of Booking:</span>March, 2025</li>
          </ul>
          <div class="project-details__help">
            <div
              class="project-details__help__bg"
              style="background-image: url(/assets/images/project/help-bg.jpg)"
            ></div>
            <h4 class="project-details__help__title">
              See More of Our Projects which are in Progress
            </h4>
            <router-link to="/project-list" class="alefox-btn">
              <span class="alefox-btn__item"></span>
              <span class="alefox-btn__item"></span>
              <span class="alefox-btn__item"></span>
              <span class="alefox-btn__item"></span>
              Visit Now
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
  <CommonFaq />
  <CommonContact />
  <Footer />
</template>

<script>
import AboveHeader from "@/components/CommonSection/AboveHeader.vue";
import CommonContact from "@/components/CommonSection/CommonContact.vue";
import CommonFaq from "@/components/CommonSection/CommonFaq.vue";
import CommonHeader from "@/components/CommonSection/CommonHeader.vue";
import Footer from "@/components/CommonSection/Footer.vue";
export default {
  name: "ProjectDetails",
  components: {
    AboveHeader,
    CommonHeader,
    CommonFaq,
    CommonContact,
    Footer,
  },
};
</script>
