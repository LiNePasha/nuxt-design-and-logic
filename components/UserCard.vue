<template>
    <div class="user-card">
      <div class="wrapper">
        <div class="img">
          <img src="~/assets/imgs/user.png" alt="User Image" class="w-24 h-full object-cover rounded-2xl" />
        </div>
        <h2 class="mt-4 text-2xl font-bold">Hala Ahmed</h2>
        <p class="text-gray-500 text-base mt-3">I am Hala Ahmed, I am the owner of the local brand called Beauty which is for Makeup and Skin Care.</p>
        <div class="stats mt-6 flex justify-between">
            <user-activity
                :number="5"
                text="Following"
                icon-src="https://res.cloudinary.com/dzxbbqq4l/image/upload/v1710684408/user-tick_cfyyn2.svg"
                icon-alt="twotone"
            />
            <user-activity
                :number="20"
                text="Followers"
                icon-src="https://res.cloudinary.com/dzxbbqq4l/image/upload/v1710684407/twotone_hjj7m0.svg"
                icon-alt="followers"
            />
            <user-activity
                :number="4.2"
                text="Rate"
                icon-src="https://res.cloudinary.com/dzxbbqq4l/image/upload/v1710684408/magic_xrcmjw.svg"
                icon-alt="rate"
            />
        </div>
        <button class="gradint-btn w-full h-12 text-white mt-6">Follow</button>
      </div>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  /* No need for scoped styles with Tailwind CSS */
  </style>