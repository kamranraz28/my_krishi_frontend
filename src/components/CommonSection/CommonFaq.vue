<template>
  <section class="faq-one faq-one--page">
    <h2 class="text-center">Frequently Asked Questions</h2>
    <p class="text-center">
      Everything you need to know about the product and billing.
    </p>
    <div class="container">
      <div class="row">
        <div class="col-xl-12 wow fadeInUp" data-wow-delay="00ms">
          <div
            class="faq-one__accordion alefox-accrodion"
            data-grp-name="alefox-accrodion"
          >
            <div class="accrodion">
              <div class="accrodion-title">
                <h4>
                  <span class="accrodion-title__number"></span>
                  Do investors receive proof of the livestock they have
                  financed?
                  <span class="accrodion-title__icon"></span
                  ><!-- /.accrodion-title__icon -->
                </h4>
              </div>
              <!-- /.accordian-title -->
              <div class="accrodion-content">
                <div class="inner">
                  <p>
                    The financier receives proof in the form of a Project
                    Financing Certificate via email, detailing asset ownership
                    and WeGro’s role as the asset manager. Additionally, for
                    every transaction made via cheque, a money receipt will be
                    issued to the payer.
                  </p>
                </div>
                <!-- /.accordian-content -->
              </div>
            </div>
            <!-- /.accordian-item -->
            <div class="accrodion">
              <div class="accrodion-title">
                <h4>
                  <span class="accrodion-title__number"></span>
                  How will the return on my investment be calculated?
                  <span class="accrodion-title__icon"></span
                  ><!-- /.accrodion-title__icon -->
                </h4>
              </div>
              <!-- /.accordian-title -->
              <div class="accrodion-content">
                <div class="inner">
                  <p>
                    The total farm profit is calculated first, and investors
                    receive 40% of the total. The estimated profit per unit
                    ranges between BDT 375 (3.75%) and BDT 425 (4.25%).
                  </p>
                </div>
                <!-- /.accordian-content -->
              </div>
            </div>
            <!-- /.accordian-item -->
            <div class="accrodion">
              <div class="accrodion-title">
                <h4>
                  <span class="accrodion-title__number"></span>
                  When will I receive the returns on my investment?
                  <span class="accrodion-title__icon"></span
                  ><!-- /.accrodion-title__icon -->
                </h4>
              </div>
              <!-- /.accordian-title -->
              <div class="accrodion-content">
                <div class="inner">
                  <p>
                    MyKrishi sells fruits within three months of the purchase
                    date, and returns are transferred to the financier’s bank
                    account 90 days from the date of payment. Additionally, a
                    settlement period of 3–5 working days after project
                    completion is allocated for fund collection and disbursement
                    to the respective financiers.
                  </p>
                </div>
                <!-- /.accordian-content -->
              </div>
            </div>
          </div>
        </div>
        <!-- /.col-lg-6 -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </section>
  <!-- /.faq-one -->
</template>

<script>
export default {
  name: "CommonFaq",
  mounted() {
    this.setupAccordion();
  },
  methods: {
    setupAccordion() {
      document.querySelectorAll(".accrodion-title").forEach((title) => {
        title.addEventListener("click", function () {
          const parent = this.parentElement;
          // Close other open accordions
          document.querySelectorAll(".accrodion.active").forEach((item) => {
            if (item !== parent) {
              item.classList.remove("active");
              item.querySelector(".accrodion-content").style.display = "none";
            }
          });

          // Toggle current accordion
          parent.classList.toggle("active");
          const content = parent.querySelector(".accrodion-content");
          if (parent.classList.contains("active")) {
            content.style.display = "block";
          } else {
            content.style.display = "none";
          }
        });
      });
    },
  },
};
</script>


<style>
.accrodion-content {
  display: none; /* Hide by default */
}
.accrodion.active .accrodion-content {
  display: block; /* Show when active */
}
</style>
