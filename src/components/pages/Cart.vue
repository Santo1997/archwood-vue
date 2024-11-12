<template>
  <section class="py-28 px-80">
    <div class="text-center mb-16">
      <h1 class="text-4xl font-bold mb-2">Cart</h1>
      <p class="text-lg text-gray-600 border-b-2 border-gray-300 hover:border-black transition-all duration-700 ease-in-out w-fit mx-auto">Continue shopping</p>
    </div>

    <div class="overflow-x-auto">
      <table class="table w-3/4 mx-auto">
        <!-- head -->
        <thead>
          <tr class="text-sm text-center">
            <th></th>
            <th class="w-96"></th>
            <th>QUANTITY</th>
            <th>TOTAL</th>
          </tr>
        </thead>
        <tbody>
          <!-- row 1 -->
          <tr class="text-sm text-center">
            <td>
              <div class="avatar">
                <div class="w-32 rounded">
                  <img src="https://www.touchwood.store/cdn/shop/files/roly-822557.jpg" />
                </div>
              </div>
            </td>

            <td class="text-left">
              <p class="mb-2">Rolly</p>
              <p><strong>Color:</strong> Black</p>
            </td>

            <td>
              <div class="w-fit mx-auto border">
                <button class="btn btn-sm text-gray-600 border-0 bg-white text-lg">-</button>
                <span class="btn btn-sm text-gray-600 border-0 bg-white text-base w-14 overflow-hidden">1000</span>
                <button class="btn btn-sm text-gray-600 border-0 bg-white text-lg">+</button>
              </div>
            </td>
            <td>Tk 1000.00</td>
          </tr>
          <!-- row 2- -->
          <tr class="text-sm text-center">
            <td>
              <div class="avatar">
                <div class="w-32 rounded">
                  <img src="https://www.touchwood.store/cdn/shop/products/ronin-987497.jpg" />
                </div>
              </div>
            </td>

            <td class="text-left">
              <p class="mb-2">Rolly</p>
              <p><strong>Color:</strong> Black</p>
            </td>

            <td>
              <div class="w-fit mx-auto border">
                <button class="btn btn-sm text-gray-600 border-0 bg-white text-lg">-</button>
                <span class="btn btn-sm text-gray-600 border-0 bg-white text-base w-14 overflow-hidden">1000</span>
                <button class="btn btn-sm text-gray-600 border-0 bg-white text-lg">+</button>
              </div>
            </td>
            <td>Tk 1000.00</td>
          </tr>
          <!-- row 3- -->
          <tr class="text-sm text-center">
            <td>
              <div class="avatar">
                <div class="w-32 rounded">
                  <img src="https://www.touchwood.store/cdn/shop/products/ronin-477383.jpg" />
                </div>
              </div>
            </td>

            <td class="text-left">
              <p class="mb-2">Rolly</p>
              <p><strong>Color:</strong> Black</p>
            </td>

            <td>
              <div class="w-fit mx-auto border">
                <button class="btn btn-sm text-gray-600 border-0 bg-white text-lg">-</button>
                <span class="btn btn-sm text-gray-600 border-0 bg-white text-base w-14 overflow-hidden">1000</span>
                <button class="btn btn-sm text-gray-600 border-0 bg-white text-lg">+</button>
              </div>
            </td>
            <td>Tk 1000.00</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="3" class="text-right text-lg font-bold pe-44">SUBTOTAL</td>
            <td class="text-lg text-right">Tk 3000.00</td>
          </tr>
          <tr>
            <td colspan="4" class="text-right text-xs">Shipping, taxes, and discount codes calculated at checkout.</td>
          </tr>
          <tr>
            <td colspan="4" class="text-right">
              <button class="btn bg-black text-lg text-white hover:bg-black hover:text-white font-bold w-96">Check out</button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  </section>
</template>
