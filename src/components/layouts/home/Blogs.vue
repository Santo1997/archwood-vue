<script setup lang="ts">
import BlogCard from "../../utilities/BlogCard.vue";
</script>

<template>
  <section class="py-24 px-80">
    <div class="relative">
      <h1 class="text-4xl font-bold text-center">Blogs Curated For You!</h1>
      <p class="absolute top-1/2 right-0 text-lg -translate-y-1/2">View all</p>
    </div>

    <div class="mt-8 w-fit mx-auto grid grid-cols-3 gap-10">
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </div>
  </section>
  <div class="divider"></div>

  <section class="py-24 px-80 w-fit grid grid-cols-3 gap-10">
    <div class="card card-compact shadow-xl">
      <figure>
        <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
      </figure>
      <div class="card-body">
        <h1 class="card-title w-fit mx-auto">Built to Last</h1>
      </div>
    </div>
    <div class="card card-compact shadow-xl">
      <figure>
        <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
      </figure>
      <div class="card-body">
        <h1 class="card-title w-fit mx-auto">Built to Last</h1>
      </div>
    </div>
    <div class="card card-compact shadow-xl">
      <figure>
        <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
      </figure>
      <div class="card-body">
        <h1 class="card-title w-fit mx-auto">Built to Last</h1>
      </div>
    </div>
  </section>
</template>
