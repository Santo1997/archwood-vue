<script setup>
const props = defineProps({
  subTitle: String,
  title: String,
  extra: String,
  description: String,
});
</script>

<template>
  <section>
    <div class="hero place-items-start h-[55vh] relative">
      <iframe
        class="absolute inset-0 w-full h-full object-cover"
        src="https://www.youtube-nocookie.com/embed/u75o1-86m-s?si=e5rN_UB-O-ODFQMU&controls=0&start=2&autoplay=1"
        title="YouTube video player"
        frameborder="0"
        referrerpolicy="strict-origin-when-cross-origin"
        allow="autoplay"
        allowfullscreen>
      </iframe>
      <div class="hero-overlay bg-opacity-60"></div>
      <div class="hero-content text-neutral-content text-center relative z-10">
        <div class="max-w-sm text-left bg-white m-10 p-10">
          <p class="mb-2 text-xl uppercase">{{ subTitle }}</p>
          <h1 class="mb-5 text-4xl font-bold">{{ title }}</h1>
          <p class="mb-5 text-2xl font-bold">{{ extra }}</p>
          <p class="text-lg">
            {{ description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
