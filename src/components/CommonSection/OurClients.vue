<template>
  <div class="client-carousel client-carousel--two @@extraClassName">
    <div class="container">
      <div
        class="client-carousel__one alefox-owl__carousel owl-theme owl-carousel"
        data-owl-options='{
            "items": 5,
            "margin": 65,
            "smartSpeed": 700,
            "loop":true,
            "autoplay": 6000,
            "nav":false,
            "dots":false,
            "navText": ["<span class=\"fa fa-angle-left\"></span>","<span class=\"fa fa-angle-right\"></span>"],
            "responsive":{
                "0":{
                    "items":1,
                    "margin": 0
                },
                "360":{
                    "items":2,
                    "margin": 0
                },
                "575":{
                    "items":3,
                    "margin": 30
                },
                "768":{
                    "items":3,
                    "margin": 40
                },
                "992":{
                    "items": 4,
                    "margin": 40
                },
                "1200":{
                    "items": 5
                }
            }
            }'
      >
        <div class="client-carousel__one__item">
          <img src="/assets/images/brand/brand-1-1.png" alt="alefox" />
        </div>
        <!-- /.owl-slide-item-->
        <div class="client-carousel__one__item">
          <img src="/assets/images/brand/brand-1-1.png" alt="alefox" />
        </div>
        <!-- /.owl-slide-item-->
        <div class="client-carousel__one__item">
          <img src="/assets/images/brand/brand-1-1.png" alt="alefox" />
        </div>
        <!-- /.owl-slide-item-->
        <div class="client-carousel__one__item">
          <img src="/assets/images/brand/brand-1-1.png" alt="alefox" />
        </div>
        <!-- /.owl-slide-item-->
        <div class="client-carousel__one__item">
          <img src="/assets/images/brand/brand-1-1.png" alt="alefox" />
        </div>
        <!-- /.owl-slide-item-->
        <div class="client-carousel__one__item">
          <img src="/assets/images/brand/brand-1-1.png" alt="alefox" />
        </div>
        <!-- /.owl-slide-item-->
        <div class="client-carousel__one__item">
          <img src="/assets/images/brand/brand-1-1.png" alt="alefox" />
        </div>
        <!-- /.owl-slide-item-->
        <div class="client-carousel__one__item">
          <img src="/assets/images/brand/brand-1-1.png" alt="alefox" />
        </div>
        <!-- /.owl-slide-item-->
        <div class="client-carousel__one__item">
          <img src="/assets/images/brand/brand-1-1.png" alt="alefox" />
        </div>
        <!-- /.owl-slide-item-->
        <div class="client-carousel__one__item">
          <img src="/assets/images/brand/brand-1-1.png" alt="alefox" />
        </div>
        <!-- /.owl-slide-item-->
      </div>
      <!-- /.thm-owl__slider -->
    </div>
    <!-- /.container -->
  </div>
  <!-- /.client-carousel -->
</template>

<script>
export default {
  name: "OurClients",
};
</script>
