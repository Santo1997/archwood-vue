<script setup>
import {ref} from "vue";

const isSeatingHovered = ref(false);
const isDeskHovered = ref(false);
const isDiyHovered = ref(false);
const isStorageHovered = ref(false);
</script>

<template>
  <section class="pb-24 px-80">
    <div class="text-center">
      <h1 class="text-4xl font-bold">Explore Our Ergonomic Solutions</h1>

      <div class="mt-10 grid grid-cols-2 h-[35rem]">
        <div
          style="background-image: url('./imgbg.jpg')"
          class="flex place-items-center justify-center relative bg-no-repeat bg-cover bg-center"
          @mouseover="isSeatingHovered = true"
          @mouseleave="isSeatingHovered = false">
          <p class="text-5xl font-bold text-white uppercase">Seating</p>
          <p class="text-xl font-bold text-white absolute bottom-5 left-5" :class="isSeatingHovered ? 'animate-border' : ''">Seating</p>
        </div>

        <div
          style="background-image: url('./imgbg.jpg')"
          class="flex place-items-center justify-center relative bg-no-repeat bg-cover bg-center"
          @mouseover="isDeskHovered = true"
          @mouseleave="isDeskHovered = false">
          <p class="text-5xl font-bold text-white uppercase">Desk</p>
          <p class="text-xl font-bold text-white absolute bottom-5 left-5" :class="isDeskHovered ? 'animate-border' : ''">Desk</p>
        </div>

        <div
          style="background-image: url('./imgbg.jpg')"
          class="flex place-items-center justify-center relative bg-no-repeat bg-cover bg-center"
          @mouseover="isDiyHovered = true"
          @mouseleave="isDiyHovered = false">
          <p class="text-5xl font-bold text-white uppercase">Diy</p>
          <p class="text-xl font-bold text-white absolute bottom-5 left-5" :class="isDiyHovered ? 'animate-border' : ''">DIY</p>
        </div>

        <div
          style="background-image: url('./imgbg.jpg')"
          class="flex place-items-center justify-center relative bg-no-repeat bg-cover bg-center"
          @mouseover="isStorageHovered = true"
          @mouseleave="isStorageHovered = false">
          <p class="text-5xl font-bold text-white uppercase">Storage</p>
          <p class="text-xl font-bold text-white absolute bottom-5 left-5" :class="isStorageHovered ? 'animate-border' : ''">Storage</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes borderExpand {
  0% {
    width: 0;
    border-bottom: 2px solid transparent;
  }
  100% {
    width: 12%;
    border-bottom: 2px solid white;
  }
}

.animate-border {
  display: inline-block;
  text-align: left;
  animation: borderExpand 0.5s forwards;
}
</style>
