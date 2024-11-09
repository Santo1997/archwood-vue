<template>
  <footer class="footer bg-base-200 text-base-content p-10">
    <aside>
      <a class="btn btn-ghost text-4xl text-gray-500">touchwood</a>
      <p class="flex gap-2 ms-5">
        <v-icon name="co-instagram" scale="1.8" fill="#000000" />
        <v-icon name="co-facebook" scale="1.8" fill="#000000" />
      </p>
    </aside>
    <nav>
      <h6 class="footer-title">Products</h6>
      <a class="link link-hover">Articles</a>
      <a class="link link-hover">Our Story</a>
      <a class="link link-hover">Contact</a>
      <a class="link link-hover">EMI</a>
    </nav>
    <nav>
      <h6 class="footer-title">Privacy Policy</h6>
      <a class="link link-hover">Refund Policy</a>
      <a class="link link-hover">Shipping Policy</a>
      <a class="link link-hover">Terms of Service</a>
      <a class="link link-hover">Warranty Policy</a>
      <a class="link link-hover">Contact Information</a>
    </nav>
    <form>
      <h6 class="footer-title">Sign up and save</h6>
      <fieldset class="form-control w-80">
        <label class="label">
          <span class="label-text">Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</span>
        </label>
        <div class="join">
          <input type="text" placeholder="username@site.com" class="input input-bordered join-item" />
          <button class="btn btn-primary join-item">Subscribe</button>
        </div>
      </fieldset>
    </form>
  </footer>
</template>
