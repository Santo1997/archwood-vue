<script setup>
import Hero from "../layouts/home/Hero.vue";
import Trending from "../layouts/home/Trending.vue";
import Ergonomic from "../layouts/home/Ergonomic.vue";
import Seating from "../layouts/home/Seating.vue";
import Ergochair from "../layouts/home/Ergochair.vue";
import Reimagine from "../layouts/home/Reimagine.vue";
import Testominals from "../layouts/home/Testominals.vue";
import Clients from "../layouts/home/Clients.vue";
import Blogs from "../layouts/home/Blogs.vue";
</script>

<template>
  <Hero />
  <Trending />
  <Ergonomic />
  <Seating />
  <Ergochair
    subTitle="Autonomous x merryfair"
    title="Ergochair Pro+"
    extra="Feel the Freedom."
    description="When you stop moving, your body forgets how. So twist around. Lean back. Stretch to the side. There's no edge to fall off here, and no frame to box you in." />
  <Reimagine />
  <Testominals />
  <Clients />
  <Ergochair
    subTitle="TW X FFL"
    title="SmartDesk V2"
    description="Rise to the occasion with the SmartDesk V2 - where innovation meets elevation for your perfect workstyle destination!" />

  <Blogs />
</template>
