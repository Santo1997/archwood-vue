<script setup>
import {ref} from "vue";

const isHovered = ref(false);
</script>

<template>
  <section>
    <div class="hero h-[70vh] relative">
      <video autoplay muted loop playsinline class="absolute inset-0 w-full h-full object-cover">
        <source src="https://cdn.shopify.com/videos/c/o/v/8521d40d020d456591b58d8c5ba59079.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div class="hero-overlay bg-opacity-60 absolute inset-0 bg-black"></div>
      <div class="hero-content text-neutral-content text-center relative z-10">
        <div>
          <h1 class="mb-5 text-7xl text-white font-bold">Invest in yourself.</h1>
          <p class="mb-5 text-2xl text-white">Improve your workspace wellbeing</p>
          <button class="btn btn-outline border-2 border-white text-base font-bold hover:bg-white hover:border-white" @mouseover="isHovered = true" @mouseleave="isHovered = false">
            <span :class="isHovered ? 'text-black' : 'text-white'"> Shop Now </span>
            <span v-if="isHovered">
              <v-icon name="md-arrowrightalt" scale="1.8" fill="#000000" />
            </span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
