<script setup>
import {reactive, computed} from "vue";

const state = reactive({
  blogs: [1, 2, 3, 4, 5, 6],
  isLoading: true,
  currentPage: 1,
  itemsPerPage: 3,
});

const paginatedBlogs = computed(() => {
  const startIndex = (state.currentPage - 1) * state.itemsPerPage;
  const endIndex = startIndex + state.itemsPerPage;
  return state.blogs.slice(startIndex, endIndex);
});

const totalPages = computed(() => {
  return Math.ceil(state.blogs.length / state.itemsPerPage);
});

const nextPage = () => {
  if (state.currentPage < totalPages.value) {
    state.currentPage++;
  }
};

const prevPage = () => {
  if (state.currentPage > 1) {
    state.currentPage--;
  }
};
</script>

<template>
  <section class="py-24 px-80">
    <div v-for="(blog, index) in paginatedBlogs" :key="index" class="py-10 flex gap-10 justify-center items-center" :class="index % 2 === 0 && 'flex-row-reverse'">
      <div>
        <img src="/public/article1.webp" alt="" />
      </div>
      <div class="px-5">
        <p class="text-sm uppercase mb-3">Dec 27, 2024</p>
        <h1 class="text-3xl font-bold flex flex-col gap-6 mb-6">
          <span>Ergonomic Chairs vs. Gaming Chairs: Why Invest in Ergonomics for Your Health and Productivity</span>
          <span>Gaming vs. Ergonomic Chairs: Comfort Isn't Enough</span>
        </h1>
        <p class="text-base font-bold">Don't get lured by gamer bling - invest in your spine with ergonomics!</p>
        <ul class="flex flex-col gap-6 text-base list-outside list-disc ms-20 my-6">
          <li><strong class="text-lg">Gaming chairs:</strong> Cool looks, limited support = potential pain & fatigue.</li>
          <li><strong class="text-lg">Ergonomic chairs:</strong> Adjustable, supportive = improved posture, boosted productivity.</li>
          <li><strong class="text-lg">Think long-term:</strong> It's an investment in your health & work efficiency.</li>
          <li><strong class="text-lg">Real people, real results:</strong> Hear how ergonomic chairs changed lives.</li>
          <li><strong class="text-lg">Choose comfort, choose health, choose ergonomics!</strong></li>
        </ul>

        <p class="text-base"><strong class="text-lg">Dive deeper:</strong> Explore our recommended ergonomic chairs & share your story!</p>
        <button class="btn btn-outline border-0 text-base text-white bg-black font-bold mt-6">Continue Reading</button>
      </div>
    </div>

    <div class="flex justify-center mt-10">
      <div class="join items-center gap-5">
        <button @click="prevPage" :disabled="state.currentPage === 1" class="join-item btn">«</button>

        <span class="text-lg font-bold" :class="state.currentPage === 1 && 'text-blue-500'">{{ state.currentPage - 1 ? state.currentPage - 1 : state.currentPage }}</span>
        <span class="text-lg font-bold" :class="state.currentPage > 1 && 'text-blue-500'">{{ state.currentPage == 1 ? 2 : state.currentPage }}</span>

        <button @click="nextPage" :disabled="state.currentPage === totalPages" class="join-item btn">»</button>
      </div>
    </div>
  </section>
</template>
