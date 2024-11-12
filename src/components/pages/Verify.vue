<template>
  <section>
    <div class="hero bg-base-200 min-h-screen">
      <div class="hero-content flex-col">
        <div class="card bg-base-100 p-10 max-w-sm shrink-0 shadow-2xl">
          <div class="text-center lg:text-left">
            <h1 class="text-5xl font-bold">Verify now!</h1>
            <p class="py-6">Enter your 6 digit code</p>
          </div>
          <form class="card-body p-0">
            <div class="form-control">
              <label class="label">
                <span class="label-text">6 Digit Code</span>
              </label>
              <input type="email" placeholder="6 Digit Code" class="input input-bordered" required />
            </div>

            <div class="form-control mt-6">
              <button class="btn btn-info text-white">Verify</button>
            </div>
          </form>

          <RouterLink to="/profile" class="mt-5 p-2 border border-gray-400 w-fit">Test Verify</RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>
