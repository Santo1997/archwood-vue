<script setup>
import {ref} from "vue";

const isHovered = ref(false);
const props = defineProps({
  job: Object,
});
</script>

<template>
  <div class="card card-compact relative" @mouseover="isHovered = true" @mouseleave="isHovered = false">
    <figure>
      <div v-if="props.job?.old_price" class="badge bg-black text-white text-xs p-4 uppercase absolute top-0 right-0 z-20">Save Tk {{ props.job.old_price - props.job.price }}</div>
      <img v-if="isHovered" :src="props.job?.sec_img" class="h-96 w-full zoom-in" />
      <img v-else :src="props.job?.img" class="h-96 w-full" />
    </figure>
    <div class="card-body gap-0">
      <h2 class="card-title">{{ props.job?.name }}</h2>
      <p class="flex gap-3">
        <del v-if="props.job?.old_price">Tk {{ props.job?.old_price }}</del>
        <span>Tk {{ props.job?.price }}</span>
      </p>
    </div>
  </div>
</template>

<style scoped>
.zoom-in {
  animation: zoomIn 0.9s ease forwards;
}

@keyframes zoomIn {
  0% {
    transform: scale(0.9);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
