
<template>
  <swiper
    :spaceBetween="0"
    :centeredSlides="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide><a href="#"><img src="/images/slider/first.jpg" alt="slider"></a></swiper-slide>
    <swiper-slide><a href="#"><img src="/images/slider/second.gif" alt="slider"></a></swiper-slide>
    <swiper-slide><a href="#"><img src="/images/slider/third.jpg" alt="slider"></a></swiper-slide>
    <swiper-slide><a href="#"><img src="/images/slider/fourth.jpg" alt="slider"></a></swiper-slide>

  </swiper>
</template>
<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/pagination';
  import 'swiper/css/navigation';


  // import required modules
  import { Autoplay, Pagination, Navigation } from 'swiper/modules';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Autoplay, Pagination, Navigation],
      };
    },
  };
</script>