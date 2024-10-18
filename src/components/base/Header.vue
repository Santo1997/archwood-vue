<template>
  <header>
    <div class="navbar absolute top-0 z-10 w-full">
      <div class="navbar-start justify-center">
        <a class="btn btn-ghost text-4xl text-white">touchwood</a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1 text-lg font-bold">
          <li>
            <details>
              <summary class="text-white">Products</summary>
              <ul class="p-2">
                <li class="text-white"><a>Seating</a></li>
                <li class="text-white"><a>Desks</a></li>
                <li class="text-white"><a>DIY</a></li>
                <li class="text-white"><a>Storage</a></li>
              </ul>
            </details>
          </li>
          <li class="text-white"><a>Articles</a></li>
          <li class="text-white"><a>Our Story</a></li>
          <li class="text-white"><a>Contact</a></li>
        </ul>
      </div>
      <div class="navbar-end justify-center gap-5">
        <v-icon name="bi-search" scale="1.8" fill="#ffffff" />
        <v-icon name="bi-bag" scale="1.8" fill="#ffffff" />
      </div>
    </div>
  </header>
</template>
