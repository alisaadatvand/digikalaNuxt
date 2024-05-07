<template>
  <div class="popularbrands">
    <div class="tit">
      <p>
        <i class="fa-solid fa-stars" style="color: #f6c231"></i> محبوب ترین
        برندها
      </p>
    </div>
    <div class="childpopularbrands">
      <div class="swiper popularBrands">
        <div class="swiper-wrapper">
          <swiper
    :slidesPerView="6.1"
    :spaceBetween="2"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide class="swiper-slide-brand border">
      <div class="image">
              <img src="/images/popular brands/brand 1.png" />
            </div>
          </swiper-slide>

    <swiper-slide class="swiper-slide-brand">
      
            <div class="image">
              <img src="/images/popular brands/brand 2.png" />
            </div>
    </swiper-slide>

    <swiper-slide class="swiper-slide-brand">
      
            <div class="image">
              <img src="/images/popular brands/brand 3.png" />
            </div>
    </swiper-slide>

    <swiper-slide class="swiper-slide-brand">
      
            <div class="image">
              <img src="/images/popular brands/brand 5.png" />
            </div>
    </swiper-slide>

    <swiper-slide class="swiper-slide-brand">
      
            <div class="image">
              <img src="/images/popular brands/brand 6.png" />
            </div>
    </swiper-slide>

    <swiper-slide class="swiper-slide-brand">
      
            <div class="image">
              <img src="/images/popular brands/brand 7.jpg" />
            </div>
    </swiper-slide>

    <swiper-slide class="swiper-slide-brand">
      
            <div class="image">
              <img src="/images/popular brands/brand 8.jpg" />
            </div>
    </swiper-slide>

    <swiper-slide class="swiper-slide-brand">
      
            <div class="image">
              <img src="/images/popular brands/brand 9.jpg" />
            </div>
    </swiper-slide>

    <swiper-slide class="swiper-slide-brand">
      
            <div class="image">
              <img src="/images/popular brands/brand 10.jpg" />
            </div>
    </swiper-slide>

    <swiper-slide class="swiper-slide-brand">
      
            <div class="image">
              <img src="/images/popular brands/brand 12.png" />
            </div>
    </swiper-slide>

    <swiper-slide class="swiper-slide-brand">
      
            <div class="image">
              <img src="/images/popular brands/brand 13.png" />
            </div>
    </swiper-slide>

    <swiper-slide class="swiper-slide-brand">
      
            <div class="image">
              <img src="/images/popular brands/brand 14.jpg" />
            </div>
    </swiper-slide>

    <swiper-slide class="swiper-slide-brand">
      
            <div class="image">
              <img src="/images/popular brands/brand 17.png" />
            </div>
    </swiper-slide>

    <swiper-slide class="swiper-slide-brand">
      
            <div class="image">
              <img src="/images/popular brands/brand 18.png" />
            </div>
    </swiper-slide>

    <swiper-slide class="swiper-slide-brand border2">
      <div class="image">
              <img src="/images/popular brands/brand 19.jpg" />
            </div>
    </swiper-slide>

  </swiper>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/pagination';


  // import required modules
  import { Pagination } from 'swiper/modules';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Pagination],
      };
    },
  };
</script>