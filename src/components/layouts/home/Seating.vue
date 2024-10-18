<script setup>
import {ref} from "vue";

const isHovered = ref(false);
</script>

<template>
  <section class="pb-24 px-80 grid grid-cols-2 h-[35rem]">
    <div class="flex place-items-center justify-center relative">
      <img src="https://www.touchwood.store/cdn/shop/products/ronin-477383.jpg" class="absolute h-44 top-0 left-5 -z-10" />
      <img src="https://www.touchwood.store/cdn/shop/products/ronin-477383.jpg" class="absolute h-36 top-14 right-14 -z-10" />
      <img src="https://www.touchwood.store/cdn/shop/products/ronin-477383.jpg" class="absolute h-44 bottom-0 left-14 -z-10" />
      <img src="https://www.touchwood.store/cdn/shop/products/ronin-477383.jpg" class="absolute h-40 bottom-4 right-14 -z-10" />
      <img src="https://www.touchwood.store/cdn/shop/products/ronin-477383.jpg" class="h-72 shadow-2xl" />
    </div>

    <div class="px-5 pt-14">
      <p class="text-lg uppercase mb-1">Picked for you</p>
      <h1 class="text-3xl font-bold mb-5">Seating Solutions</h1>
      <p class="text-lg w-96 mb-3 leading-8">Looking for the perfect seating solution for your workspace? Look no further than our range of seating solutions.</p>

      <button class="btn btn-outline border-2 border-black text-base bg-black font-bold" @mouseover="isHovered = true" @mouseleave="isHovered = false">
        <span class="text-white"> Shop Now </span>
        <span v-if="isHovered">
          <v-icon name="md-arrowrightalt" scale="1.8" fill="#ffffff" />
        </span>
      </button>
    </div>
  </section>
</template>
