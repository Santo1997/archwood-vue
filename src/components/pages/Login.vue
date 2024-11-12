<template>
  <section>
    <div class="hero bg-base-200 min-h-screen">
      <div class="hero-content flex-col">
        <div class="card bg-base-100 p-10 max-w-lg shrink-0 shadow-2xl">
          <div class="text-center lg:text-left">
            <h1 class="text-5xl font-bold">Login now!</h1>
            <p class="py-6">Enter your email and we'll send you a login code</p>
          </div>
          <form class="card-body p-0">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input type="email" placeholder="email" class="input input-bordered" required />
            </div>

            <div class="form-control mt-6">
              <button class="btn btn-info text-white">Login</button>
            </div>
          </form>

          <RouterLink to="/verify" class="mt-5 p-2 border border-gray-400 w-fit">Test Login</RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>
