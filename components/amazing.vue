
<template>
  <div class="amazing">
    <div class="childamazing">
      <div class="swiper myAmazing">
        <div class="swiper-wrapper">

          <swiper
    :slidesPerView="6.1"
    :spaceBetween="2"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide class="removeBg">
      <div>
              <img
                class="amazingImg"
                src="/images/amazing/Amazings.svg"
                alt="slide-img"
              />
              <img class="box"src="/images/amazing/box.webp" alt="slide-img" />
            </div>
            <div class="amazingText">مشاهده همه &gt; &nbsp;</div>
          </swiper-slide>

    <swiper-slide class="amazingitem border">
      <div class="image">
              <img src="/images/amazing/slide 1.webp" alt="slide-img" />
            </div>
            <div class="price">
              <h4>615,000<span>تومان</span></h4>
              <h5>2%</h5>
            </div>
            <div class="beforeDiscount">629,000</div>
    </swiper-slide>

    <swiper-slide class="amazingitem">
      <div class="image">
              <img src="/images/amazing/slide 2.webp" alt="slide-img" />
            </div>
            <div class="price">
              <h4>398,700<span>تومان</span></h4>
              <h5>15%</h5>
            </div>
            <div class="beforeDiscount">469,000</div>
    </swiper-slide>

    <swiper-slide class="amazingitem">
      <div class="image">
              <img src="/images/amazing/slide 3.webp" alt="slide-img" />
            </div>
            <div class="price">
              <h4>22,400<span>تومان</span></h4>
              <h5>20%</h5>
            </div>
            <div class="beforeDiscount">28,000</div>
    </swiper-slide>

    <swiper-slide class="amazingitem">
      <div class="image">
              <img src="/images/amazing/slide 4.webp" alt="slide-img" />
            </div>
            <div class="price">
              <h4>240,700<span>تومان</span></h4>
              <h5>17%</h5>
            </div>
            <div class="beforeDiscount">290,000</div>
    </swiper-slide>

    <swiper-slide class="amazingitem">
      <div class="image">
              <img src="/images/amazing/slide 5.webp" alt="slide-img" />
            </div>
            <div class="price">
              <h4>13,288,000<span>تومان</span></h4>
              <h5>11%</h5>
            </div>
            <div class="beforeDiscount">14,990,000</div>
    </swiper-slide>

    <swiper-slide class="amazingitem">
      <div class="image">
              <img src="/images/amazing/slide 6.webp" alt="slide-img" />
            </div>
            <div class="price">
              <h4>247,000<span>تومان</span></h4>
              <h5>38%</h5>
            </div>
            <div class="beforeDiscount">398,000</div>
    </swiper-slide>

    <swiper-slide class="amazingitem">
      <div class="image">
              <img src="/images/amazing/slide 7.webp" alt="slide-img" />
            </div>
            <div class="price">
              <h4>219,000<span>تومان</span></h4>
              <h5>30%</h5>
            </div>
            <div class="beforeDiscount">315,000</div>
    </swiper-slide>

    <swiper-slide class="amazingitem">
      <div class="image">
              <img src="/images/amazing/slide 8.webp" alt="slide-img" />
            </div>
            <div class="price">
              <h4>4,999,000<span>تومان</span></h4>
              <h5>50%</h5>
            </div>
            <div class="beforeDiscount">9,980,000</div>
    </swiper-slide>

    <swiper-slide class="amazingitem">
      <div class="image">
              <img src="/images/amazing/slide 9.webp" alt="slide-img" />
            </div>
            <div class="price">
              <h4>157,990<span>تومان</span></h4>
              <h5>39%</h5>
            </div>
            <div class="beforeDiscount">259,000</div>
    </swiper-slide>

    <swiper-slide class="amazingitem">
      <div class="image">
              <img src="/images/amazing/slide 10.webp" alt="slide-img" />
            </div>
            <div class="price">
              <h4>119,000<span>تومان</span></h4>
              <h5>37%</h5>
            </div>
            <div class="beforeDiscount">189,000</div>
    </swiper-slide>

    <swiper-slide class="amazingitem">
      <div class="image">
              <img src="/images/amazing/slide 11.webp" alt="slide-img" />
            </div>
            <div class="price">
              <h4>135,000<span>تومان</span></h4>
              <h5>14%</h5>
            </div>
            <div class="beforeDiscount">157,000</div>
    </swiper-slide>

    <swiper-slide class="amazingitem">
      <div class="image">
              <img src="/images/amazing/slide 12.webp" alt="slide-img" />
            </div>
            <div class="price">
              <h4>3,499,000<span>تومان</span></h4>
              <h5>62%</h5>
            </div>
            <div class="beforeDiscount">9,112,000</div>
    </swiper-slide>

    <swiper-slide class="amazingitem">
      <div class="more">
              <img src="/images/amazing/slide 13.png" alt="slide-img" />
            </div>
            <div class="moreText">مشاهده همه</div>
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