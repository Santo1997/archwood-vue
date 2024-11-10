<script setup lang="ts">
import ErgonomicCard from "../utilities/ErgonomicCard.vue";
</script>

<template>
  <section class="py-24 px-80">
    <h1 class="text-4xl font-bold text-center">Catalog</h1>

    <div class="mt-10 grid grid-cols-3 h-[40rem] gap-5">
      <RouterLink to="/products/seating"><ErgonomicCard title="Seating" subTitle="Seating" /></RouterLink>
      <RouterLink to="/products/desks"><ErgonomicCard title="Desk" subTitle="Desk" /></RouterLink>
      <RouterLink to="/products/diy"> <ErgonomicCard title="Diy" subTitle="DIY" /></RouterLink>
      <RouterLink to="/products/storage"> <ErgonomicCard title="Storage" subTitle="Storage" /></RouterLink>
    </div>
  </section>
</template>
