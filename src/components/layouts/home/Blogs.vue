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
</template>
