<script setup>
import {ref, reactive, computed, onMounted} from "vue";
import axios from "axios";
import ProductCard from "../utilities/ProductCard.vue";

const selectedTab = ref("Seating");
const value = ref(50);
const tabs = [
  {name: "Seating", label: "Seating"},
  {name: "Desks", label: "Desks"},
  {name: "DIY", label: "DIY"},
  {name: "Storage", label: "Storage"},
];

const state = reactive({
  jobs: [],
  isLoading: true,
});

const filteredJobs = computed(() => {
  return state.jobs.filter((job) => job.category === selectedTab.value);
});

onMounted(async () => {
  try {
    const response = await axios.get("./img.json");
    state.jobs = response.data;
    state.isLoading = false;
  } catch (error) {
    console.error("Error fetching jobs: ", error);
    state.isLoading = false;
  }
});
</script>

<template>
  <section class="py-24 px-80">
    <div>
      <div class="text-center">
        <h1 class="text-4xl font-bold">{{ selectedTab }}</h1>
        <p class="text-lg mt-5 w-2/3 mx-auto">Looking for the perfect solution for your workspace? Explore our range of products.</p>
      </div>

      <div class="md:flex mt-20">
        <ul class="flex-column space-y-4 me-10 w-72">
          <li v-for="tab in tabs" :key="tab.name" class="hover:ms-3 transition-all duration-500 ease-in-out">
            <a href="#" @click.prevent="selectedTab = tab.name" :class="['flex items-center px-4 rounded-lg w-full text-lg', selectedTab === tab.name ? 'font-bold' : ' ']">
              {{ tab.label }}
            </a>
          </li>

          <li>
            <p class="flex items-center p-2 w-full text-lg mt-10 mb-2 border">
              <v-icon name="md-displaysettings" scale="1.5" fill="#000000" />
              <span class="ml-2 text-lg">Filters</span>
            </p>

            <form class="w-full">
              <div>
                <p class="mb-1 text-lg">Availability</p>
                <div class="form-control">
                  <label class="label justify-start gap-2 cursor-pointer">
                    <input type="radio" name="radio-10" class="radio scale-75 checked:bg-blue-500" />
                    <span class="label-text">In stock</span>
                  </label>
                </div>
                <div class="form-control">
                  <label class="label justify-start gap-2 cursor-pointer">
                    <input type="radio" name="radio-10" class="radio scale-75 checked:bg-blue-500" />
                    <span class="label-text">Out of stock</span>
                  </label>
                </div>
              </div>

              <p class="mb-1 text-lg">Price</p>
              <div class="px-2">
                <div>
                  <div class="flex justify-between text-xs">
                    <span>Tk 0.00</span>
                    <span>Tk {{ value }}.00</span>
                  </div>
                  <input id="default-range" type="range" v-model="value" min="0" max="50000" step="100" class="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
                </div>
              </div>
            </form>
          </li>
        </ul>

        <div class="w-full h-full px-10 py-0">
          <div v-if="state.isLoading" class="text-center">Loading...</div>
          <div v-else class="grid grid-cols-3 gap-2">
            <ProductCard v-for="job in filteredJobs" :key="job.id" :job="job" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
