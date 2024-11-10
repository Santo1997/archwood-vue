<script setup>
import {ref} from "vue";
const isHovered = ref(false);

const props = defineProps({
  subTitle: String,
  title: String,
});
</script>

<template>
  <div
    style="background-image: url('./imgbg.jpg')"
    class="flex place-items-center justify-center relative bg-no-repeat bg-cover bg-center h-full w-full cursor-pointer"
    @mouseover="isHovered = true"
    @mouseleave="isHovered = false">
    <p class="text-5xl font-bold text-white uppercase">{{ title }}</p>
    <p class="text-xl font-bold text-white absolute bottom-5 left-5" :class="{'animate-border': isHovered}">
      {{ subTitle }}
    </p>
  </div>
</template>

<style scoped>
@keyframes borderExpand {
  0% {
    width: 0;
    border-bottom: 2px solid transparent;
  }
  100% {
    width: 15%;
    border-bottom: 2px solid white;
  }
}

.animate-border {
  display: inline-block;
  text-align: left;
  animation: borderExpand 0.5s forwards;
}
</style>
