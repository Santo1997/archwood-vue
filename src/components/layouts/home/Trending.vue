<script setup>
import {onMounted, reactive} from "vue";
import ProductCard from "../../utilities/ProductCard.vue";
import axios from "axios";

const state = reactive({
  jobs: [],
  limit: 4,
  isLoading: true,
});

onMounted(async () => {
  try {
    const response = await axios.get("./img.json");
    state.jobs = response.data;
    state.isLoading = false;
  } catch (error) {
    console.error("Error fetching jobs: ", error);
  }
});
</script>

<template>
  <section class="py-24 px-80">
    <div class="text-center">
      <p class="text-lg uppercase">Trending Now</p>
      <h1 class="text-3xl font-bold"><span class="border-b-2 border-black">Seating</span> Desks</h1>
    </div>

    <div class="mt-8 grid grid-cols-4 gap-2">
      <ProductCard v-for="job in state.jobs?.slice(0, state.limit)" :key="job.id" :job="job" />
    </div>
  </section>
</template>
