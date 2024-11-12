<template>
  <section class="py-24 min-h-screen">
    <div class="container mx-auto p-6">
      <div class="bg-white rounded-lg shadow-lg p-6">
        <div class="flex items-center space-x-6">
          <img src="https://img.freepik.com/premium-photo/stylish-man-flat-vector-profile-picture-ai-generated_606187-310.jpg" alt="User Avatar" class="w-24 h-24 rounded-full" />
          <div>
            <h1 class="text-2xl font-semibold text-gray-700">John Doe</h1>
            <p class="text-gray-500">john.doe@example.com</p>
            <p class="text-gray-500">Member since Jan 2022</p>
          </div>
          <button class="ml-auto bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Edit Profile</button>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <div class="bg-white rounded-lg shadow-lg p-6">
          <h2 class="text-xl font-semibold text-gray-700 mb-4">Recent Orders</h2>
          <ul>
            <li class="flex justify-between items-center mb-3">
              <span class="text-gray-600">Order #12345</span>
              <span class="text-gray-500">Date: 11/10/2023</span>
              <span class="text-blue-500">View Details</span>
            </li>
            <li class="flex justify-between items-center mb-3">
              <span class="text-gray-600">Order #12346</span>
              <span class="text-gray-500">Date: 11/02/2023</span>
              <span class="text-blue-500">View Details</span>
            </li>
            <li class="flex justify-between items-center mb-3">
              <span class="text-gray-600">Order #12347</span>
              <span class="text-gray-500">Date: 10/25/2023</span>
              <span class="text-blue-500">View Details</span>
            </li>
          </ul>
          <a href="#" class="text-blue-500 hover:underline">View All Orders</a>
        </div>

        <div class="bg-white rounded-lg shadow-lg p-6 lg:col-span-2">
          <h2 class="text-xl font-semibold text-gray-700 mb-4">Account Information</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block text-gray-600 font-medium mb-1">Full Name</label>
              <input type="text" value="John Doe" class="w-full border-gray-300 rounded-lg p-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-200" />
            </div>
            <div>
              <label class="block text-gray-600 font-medium mb-1">Email</label>
              <input type="email" value="john.doe@example.com" class="w-full border-gray-300 rounded-lg p-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-200" />
            </div>
            <div>
              <label class="block text-gray-600 font-medium mb-1">Phone Number</label>
              <input type="text" value="+1234567890" class="w-full border-gray-300 rounded-lg p-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-200" />
            </div>
            <div>
              <label class="block text-gray-600 font-medium mb-1">Address</label>
              <input type="text" value="123 Main St, Springfield" class="w-full border-gray-300 rounded-lg p-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-200" />
            </div>
          </div>
          <button class="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">Save Changes</button>
        </div>
      </div>
    </div>
  </section>
</template>
