<template>
  <header class="relative">
    <div class="navbar absolute top-0 z-10 w-full bg-gray-900 bg-opacity-60">
      <div class="navbar-start justify-center">
        <RouterLink to="/" class="btn btn-ghost text-4xl text-white">touchwood</RouterLink>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1 text-lg font-bold">
          <li>
            <details>
              <summary class="text-white"><RouterLink to="/products">Products</RouterLink></summary>
              <ul class="p-2">
                <li class="text-black"><RouterLink to="/products/seating">Seating</RouterLink></li>
                <li class="text-black"><RouterLink to="/products/desks">Desks</RouterLink></li>
                <li class="text-black"><RouterLink to="/products/diy">DIY</RouterLink></li>
                <li class="text-black"><RouterLink to="/products/storage">Storage</RouterLink></li>
              </ul>
            </details>
          </li>
          <li class="text-white"><RouterLink to="/articles">Articles</RouterLink></li>
          <li class="text-white"><RouterLink to="/">Our Story</RouterLink></li>
          <li class="text-white"><RouterLink to="/">Contact</RouterLink></li>
        </ul>
      </div> 
      <div class="navbar-end justify-center gap-5">
        <v-icon name="bi-search" scale="1.8" fill="#ffffff" />
        <v-icon name="bi-bag" scale="1.8" fill="#ffffff" />
      </div>
    </div>
  </header>
</template>
 