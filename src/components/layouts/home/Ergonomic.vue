<script setup>
import {ref} from "vue";
import ErgonomicCard from "../../utilities/ErgonomicCard.vue";

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
        <ErgonomicCard title="Seating" subTitle="Seating" />
        <ErgonomicCard title="Desk" subTitle="Desk" />
        <ErgonomicCard title="Diy" subTitle="DIY" />
        <ErgonomicCard title="Storage" subTitle="Storage" />
      </div>
    </div>
  </section>
</template>
