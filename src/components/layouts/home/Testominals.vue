<script setup>
// Import Swiper Vue.js components
import {Swiper, SwiperSlide} from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import additional CSS styles
// import "./style.css";

// Import required Swiper modules
import {Autoplay, Pagination, Navigation} from "swiper/modules";

// Swiper options configuration
const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    clickable: true,
  },
  navigation: true,
  loop: true,
};
</script>

<template>
  <section class="py-24 px-10 bg-[#414141]">
    <h1 class="text-3xl text-white font-bold text-center mb-10">Customer Testominals</h1>

    <swiper
      :slidesPerView="3"
      :spaceBetween="30"
      :pagination="{
        clickable: true,
      }"
      :modules="modules"
      class="mySwiper">
      <swiper-slide>
        <div class="flex flex-col items-center justify-center  h-72 p-14 bg-white">
          <div class="rating">
            <input type="radio" name="rating-1" class="mask mask-star" />
            <input type="radio" name="rating-1" class="mask mask-star" />
            <input type="radio" name="rating-1" class="mask mask-star" />
            <input type="radio" name="rating-1" class="mask mask-star" />
            <input type="radio" name="rating-1" class="mask mask-star" />
          </div>
          <h1 class="text-2xl my-5">Highly recommended not only because they got good items, but their sales service is top notch.</h1>
          <h2 class="text-xl font-bold">Rose Sagol</h2>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="flex flex-col items-center justify-center  h-72 p-14 bg-white">
          <div class="rating">
            <input type="radio" name="rating-1" class="mask mask-star" />
            <input type="radio" name="rating-1" class="mask mask-star" />
            <input type="radio" name="rating-1" class="mask mask-star" />
            <input type="radio" name="rating-1" class="mask mask-star" />
            <input type="radio" name="rating-1" class="mask mask-star" />
          </div>
          <h1 class="text-2xl my-5">Highly recommended not only because they got good items, but their sales service is top notch.</h1>
          <h2 class="text-xl font-bold">Rose Sagol</h2>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="flex flex-col items-center justify-center  h-72 p-14 bg-white">
          <div class="rating">
            <input type="radio" name="rating-1" class="mask mask-star" />
            <input type="radio" name="rating-1" class="mask mask-star" />
            <input type="radio" name="rating-1" class="mask mask-star" />
            <input type="radio" name="rating-1" class="mask mask-star" />
            <input type="radio" name="rating-1" class="mask mask-star" />
          </div>
          <h1 class="text-2xl my-5">Highly recommended not only because they got good items, but their sales service is top notch.</h1>
          <h2 class="text-xl font-bold">Rose Sagol</h2>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="flex flex-col items-center justify-center  h-72 p-14 bg-white">
          <div class="rating">
            <input type="radio" name="rating-1" class="mask mask-star" />
            <input type="radio" name="rating-1" class="mask mask-star" />
            <input type="radio" name="rating-1" class="mask mask-star" />
            <input type="radio" name="rating-1" class="mask mask-star" />
            <input type="radio" name="rating-1" class="mask mask-star" />
          </div>
          <h1 class="text-2xl my-5">Highly recommended not only because they got good items, but their sales service is top notch.</h1>
          <h2 class="text-xl font-bold">Rose Sagol</h2>
        </div>
      </swiper-slide>
    </swiper>
  </section>
</template>
