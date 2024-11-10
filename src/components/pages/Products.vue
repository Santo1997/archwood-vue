<script setup lang="ts">
import ErgonomicCard from "../utilities/ErgonomicCard.vue";
</script>

<template>
  <section class="py-24 px-80">
    <h1 class="text-4xl font-bold text-center">Catalog</h1>

    <div class="mt-10 grid grid-cols-3 h-[40rem] gap-5">
      <ErgonomicCard title="Seating" subTitle="Seating" />
      <ErgonomicCard title="Desk" subTitle="Desk" />
      <ErgonomicCard title="Diy" subTitle="DIY" />
      <ErgonomicCard title="Storage" subTitle="Storage" />
    </div>
  </section>
</template>
