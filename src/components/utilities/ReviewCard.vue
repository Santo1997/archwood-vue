<template>
  <article class="p-10 w-80 bg-[#f5f5f5]">
    <div>
      <div class="flex justify-center text-base">
        <span class="rating">
          <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
          <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
          <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
          <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
          <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
        </span>
        <span>02/05/2023</span>
      </div>

      <h1 class="text-3xl font-bold mt-5">Perfect Ergo Chair</h1>
      <p class="text-base">Perfect Ergonomic Chair Loved it</p>
      <p>Wasi B.</p>
    </div>
    <div class="divider"></div>
    <div class="p-5">
      <p class="flex flex-col gap-2 border-s border-black">
        <span>Store Owner</span>
        <span>Dear Sir, We are glad that you liked it.</span>
      </p>
      <div class="flex mt-2">
        <p>Was this review helpful?</p>
        <p class="flex items-center gap-1">
          <v-icon name="bi-hand-thumbs-up" scale="1.2" fill="#000000" /> <span>0</span> <v-icon name="bi-hand-thumbs-down" scale="1.2" fill="#000000" /> <span>0</span>
        </p>
      </div>
    </div>
  </article>
</template>
