<script setup>
import {ref, reactive, onMounted} from "vue";
import axios from "axios";
import ReviewCard from "../utilities/ReviewCard.vue";
import ProductCard from "../utilities/ProductCard.vue";

const state = reactive({
  jobs: [],
  isLoading: true,
});

const activeTab = ref(0);
const tabs = [
  {thumbnail: "https://www.touchwood.store/cdn/shop/products/ronin-477383.jpg", img: "https://www.touchwood.store/cdn/shop/products/ronin-477383.jpg"},
  {thumbnail: "https://www.touchwood.store/cdn/shop/products/zen-315336.jpg", img: "https://www.touchwood.store/cdn/shop/products/zen-315336.jpg"},
  {thumbnail: "https://www.touchwood.store/cdn/shop/products/ronin-741448.jpg", img: "https://www.touchwood.store/cdn/shop/products/ronin-741448.jpg"},
  {thumbnail: "https://www.touchwood.store/cdn/shop/products/ronin-946622.jpg", img: "https://www.touchwood.store/cdn/shop/products/ronin-946622.jpg"},
  {thumbnail: "https://www.touchwood.store/cdn/shop/products/ronin-477383.jpg", img: "https://www.touchwood.store/cdn/shop/products/ronin-477383.jpg"},
];
onMounted(async () => {
  try {
    const response = await axios.get("./img.json");
    state.jobs = response.data;
    state.isLoading = false;
  } catch (error) {
    console.error("Error fetching jobs: ", error);
    state.isLoading = false;
  }
});
</script>

<template>
  <section class="py-24 px-80">
    <div class="grid grid-cols-2">
      <div class="md:flex">
        <ul class="flex flex-col space-y-1 md:mr-4 mb-4 md:mb-0">
          <li v-for="(tab, index) in tabs" :key="index">
            <a
              href="#"
              class="inline-flex items-center overflow-hidden rounded-lg w-full"
              :class="{
                'border-2 border-indigo-500': activeTab === index,
                'border-2 border-transparent hover:border-indigo-500': activeTab !== index,
              }"
              @click.prevent="activeTab = index"
              :aria-current="activeTab === index ? 'page' : undefined">
              <img :src="tab.thumbnail" class="w-24 h-28" />
            </a>
          </li>
        </ul>
        <div class="w-full">
          <img :src="tabs[activeTab].img" class="h-full w-full" />
        </div>
      </div>

      <div class="flex flex-col gap-3">
        <h1 class="text-4xl font-bold">Ronin</h1>
        <h2 class="text-lg font-bold"><del>Tk 55000.00</del> Tk 50000.00</h2>
        <p class="text-sm">Shipping calculated at checkout.</p>

        <div class="flex items-center gap-2">
          <div class="rating">
            <input type="radio" name="rating-1" class="mask mask-star scale-75" />
            <input type="radio" name="rating-1" class="mask mask-star scale-75" />
            <input type="radio" name="rating-1" class="mask mask-star scale-75" />
            <input type="radio" name="rating-1" class="mask mask-star scale-75" />
            <input type="radio" name="rating-1" class="mask mask-star scale-75" />
          </div>

          <p>0 Reviews</p>
        </div>

        <div class="flex flex-col gap-4">
          <h3 class="text-base font-bold uppercase">color</h3>

          <p>
            <button class="btn btn-md border-2 text-black bg-white border-gray-400 focus:border-black me-1">Black</button>
            <button class="btn btn-md border-2 text-black bg-white border-gray-400 focus:border-black">Grey</button>
          </p>

          <p class="flex items-center gap-1">
            <v-icon name="io-earth" scale="1" fill="#000000" />
            <span> Free shipping inside Dhaka </span>
          </p>
          <p class="flex items-center gap-1">
            <v-icon name="io-earth" scale="1" fill="#000000" />
            <span> Low stock - 2 items left </span>
          </p>

          <div>
            <button class="btn border-2 text-base font-bold border-black bg-white hover:bg-white text-black hover:border-black w-full">Add to Cart</button>
            <button class="btn w-full text-base font-bold bg-black text-white hover:bg-black mt-2">Buy it Now</button>
          </div>

          <div>
            <div class="collapse collapse-arrow">
              <input type="radio" name="my-accordion-2" />
              <div class="collapse-title text-base font-bold uppercase">Shipping information</div>
              <div class="collapse-content text-base">
                <ul class="list-disc list-outside ms-10">
                  <li>Ships in 24-48 Hours inside Dhaka*</li>
                  <li>And 3-5 Days outside Dhaka</li>
                  <li>Free Delivery inside Dhaka City</li>
                  <li>450/- Shipping Charge for Deliveries outside Dhaka (Chairs)</li>
                  <li>900/- Shipping Charge for Deliveries outside Dhaka (Desks)</li>
                </ul>
                <p class="mt-5">*For Ready Stock Products.</p>
              </div>
            </div>
            <div class="collapse collapse-arrow">
              <input type="radio" name="my-accordion-2" />
              <div class="collapse-title text-base font-bold uppercase">Warranty Policy</div>
              <div class="collapse-content flex flex-col gap-8 text-base">
                <article>
                  <h1 class="text-3xl font-bold mb-5">Warranty Terms and Coverage</h1>
                  <p>
                    <strong> Touchwood ("Seller") </strong> is dedicated to ensuring the quality and reliability of our products. We proudly offer a comprehensive warranty to
                    safeguard your investment. This warranty covers any manufacturing defects in our products for a period of two (2) years from the date of completion. We are
                    committed to repairing or replacing any product that displays a defect under normal and reasonable use as intended. Please note that damages or issues arising
                    from misuse, accidents, alterations, or vandalism are not considered manufacturing defects and are therefore not covered by this warranty.
                  </p>
                </article>
                <article>
                  <h1 class="text-2xl font-bold mb-5">Warranty Services:</h1>
                  <p>
                    In the event of a defect within the applicable warranty period, if written notice of the defect is provided to Touchwood, we will take appropriate action.
                    Depending on the circumstances, we will either repair or replace the defective product with a comparable component or product.
                  </p>
                </article>
                <article>
                  <h1 class="text-2xl font-bold mb-5">Warranty Duration:</h1>
                  <ul class="list-disc list-outside ms-10">
                    <li>Seating Mechanism, Adjustable Features, Framework, and Seating Foam: 2 years from the date of delivery.</li>
                    <li>Electronic Parts and Height Adjustable Base: 2 years from the date of delivery.</li>
                    <li>Third-Party Materials such as Fabric and Leather Upholstery: Not Applicable.</li>
                  </ul>
                </article>
                <article>
                  <h1 class="text-2xl font-bold mb-5">Exclusions and Limitations:</h1>
                  <ul class="list-disc list-outside ms-10">
                    <li>Normal wear and tear is not covered by this warranty.</li>
                    <li>Any alteration or unauthorized modification of our products voids the warranty.</li>
                    <li>Products must be installed and used as recommended by Touchwood to qualify for warranty coverage.</li>
                    <li>Variations in natural materials such as wood, fabric, or leather are not considered defects.</li>
                    <li>Color matching, grain, or texture of wood, fabric, or leather is not warranted.</li>
                    <li>Discontinued fabrics or finishes after the warranty period's initiation are not covered.</li>
                  </ul>
                </article>
                <article>
                  <h1 class="text-2xl font-bold mb-5">Remedy and Liability:</h1>
                  <p>
                    The repair or replacement of a defective product in accordance with this warranty is the sole remedy available to the buyer for any product-related defects.
                    Touchwood shall not be held liable for any tort liability related to a product, and we shall not be responsible for consequential, economic, indirect, special,
                    punitive, or incidental damages arising from any product defect. <br /><br />For warranty service requests, kindly contact us at support@touchwood.store to
                    schedule assistance.
                  </p>
                </article>
              </div>
            </div>
            <div class="collapse collapse-arrow">
              <input type="radio" name="my-accordion-2" />
              <div class="collapse-title text-base font-bold uppercase">Ask a question</div>
              <div class="collapse-content">
                <div class="card w-full">
                  <form class="card-body">
                    <div class="grid grid-cols-2 gap-2">
                      <div class="form-control">
                        <label class="label">
                          <span class="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name" class="input input-bordered" required />
                      </div>
                      <div class="form-control">
                        <label class="label">
                          <span class="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Email" class="input input-bordered" required />
                      </div>
                    </div>
                    <div class="form-control">
                      <label class="label">
                        <span class="label-text">Phone Number</span>
                      </label>
                      <input type="text" placeholder="Phone Number" class="input input-bordered" required />
                    </div>

                    <label class="form-control">
                      <div class="label">
                        <span class="label-text">Message</span>
                      </div>
                      <textarea class="textarea textarea-bordered h-24" placeholder="Message"></textarea>
                    </label>
                    <div class="form-control mt-6">
                      <button class="btn btn-md px-10 bg-black text-white font-bold hover:bg-black w-fit">Send</button>
                    </div>
                    <p class="text-base mt-5">This site is protected by hCaptcha and the hCaptcha Privacy Policy and Terms of Service apply.</p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="py-14 px-40 relative">
      <p class="text-2xl font-bold">
        Like a ronin warrior in battle, you want the best equipment to win the game. Gaming requires one to sit hours on end while maintaining concentration and lightning reflexes.
        It is not acceptable to have distractions and discomfort.
      </p>

      <img src="/public/01_details-ronin.jpg" class="h-80 w-80 mt-5" />

      <p>2-way adjustable lumbar support allows you to find the most ergonomic depth and height to stay concentrated through marathon sessions.</p>
      <img src="/public/01_details-ronin.jpg" class="h-80 w-80" />
      <p>The ultra-wide soft PU arm pads is always providing a resting place even as elbows are busy shifting about.</p>
      <img src="/public/01_details-ronin.jpg" class="h-80 w-80" />
      <p>
        In the heat of game, you need to keep your cool to level up. Whether specified with a thermo elastomer webbing or in a breathable mesh material, the backrest prevents heat
        buildup. Why not add more CFM like your gaming rig? Behind the removable vent cover, there are mounting holes for standard-sized CPU fans and space to store a power bank so
        one can easily DIY pimp up the chair with crazy colourful cooling power.
      </p>
      <ul class="list-disc list-outside ms-10">
        <li>Seat height is adjustable with a pneumatic lever</li>
        <li>Vented back for continuous airflow and heat prevention</li>
        <li>Adjust the headrest by up to 4″</li>
        <li>Adjust the height and depth of lumbar support</li>
        <li>Armrests are adjustable</li>
        <li>Aluminum 5 star base</li>
        <li>Tilt & lock lever</li>
        <li>Seat slide adjustment of up to 2″</li>
      </ul>

      <p class="text-sm absolute bottom-0 right-0">Trusted by <span class="text-xl text-blue-900 font-bold">yotpo</span></p>
    </div>

    <div class="py-14 px-40">
      <p class="text-2xl font-bold">Customer Reviews</p>

      <div class="flex justify-between items-center py-14 px-24 gap-10 mt-5 bg-[#f5f5f5]">
        <article>
          <div class="flex items-center gap-2 text-base cursor-pointer">
            <span>5</span>
            <v-icon name="bi-star-fill" scale="1" fill="#000000" />
            <progress class="progress w-56" value="100" max="100"></progress>
            <span>1</span>
          </div>
          <div class="flex items-center gap-2 text-base cursor-pointer">
            <span>4</span>
            <v-icon name="bi-star-fill" scale="1" fill="#000000" />
            <progress class="progress w-56" value="100" max="100"></progress>
            <span>1</span>
          </div>
          <div class="flex items-center gap-2 text-base cursor-pointer">
            <span>3</span>
            <v-icon name="bi-star-fill" scale="1" fill="#000000" />
            <progress class="progress w-56" value="100" max="100"></progress>
            <span>1</span>
          </div>
          <div class="flex items-center gap-2 text-base cursor-pointer">
            <span>2</span>
            <v-icon name="bi-star-fill" scale="1" fill="#000000" />
            <progress class="progress w-56" value="100" max="100"></progress>
            <span>1</span>
          </div>
          <div class="flex items-center gap-2 text-base cursor-pointer">
            <span>1</span>
            <v-icon name="bi-star-fill" scale="1" fill="#000000" />
            <progress class="progress w-56" value="100" max="100"></progress>
            <span>1</span>
          </div>
        </article>

        <article class="flex gap-2">
          <p class="text-6xl font-semibold">5</p>
          <p class="flex flex-col justify-center">
            <span class="rating">
              <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
            </span>
            <span class="text-sm">Based on 1 review</span>
          </p>
        </article>

        <article>
          <button class="btn px-5 bg-black text-white font-bold rounded-full hover:bg-black" onclick="my_modal_2.showModal()">Write A Review</button>
        </article>
      </div>
    </div>

    <div>
      <div class="flex justify-end">
        <label class="flex w-fit flex-flow gap-0">
          <div class="label">
            <span class="label-text">Sort by</span>
          </div>
          <select class="select focus:outline-none focus:border-none">
            <option disabled selected>Pick one</option>
            <option>Star Wars</option>
            <option>Harry Potter</option>
            <option>Lord of the Rings</option>
            <option>Planet of the Apes</option>
            <option>Star Trek</option>
          </select>
        </label>
      </div>

      <div class="grid grid-cols-4 w-fit">
        <ReviewCard />
      </div>
    </div>

    <div class="mt-24">
      <h1 class="text-4xl font-bold text-center">You may also like</h1>
      <div class="grid grid-cols-4 w-fit">
        <ProductCard v-for="job in state.jobs?.slice(0, 8)" :key="job.id" :job="job" />
      </div>
    </div>

    <!-- Open the modal using ID.showModal() method -->
    <dialog id="my_modal_2" class="modal">
      <div class="modal-box">
        <h3 class="text-lg font-bold">Hello!</h3>
        <p class="py-4">Press ESC key or click outside to close</p>
      </div>
      <form method="dialog" class="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  </section>
</template>
