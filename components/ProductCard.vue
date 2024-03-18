<template>
    <div class="product flex">
      <div class="img relative w-28 h-24 sm:w-36 sm:h-32">
        <img
          :src="imgSrc"
          alt="Product Image"
          class="w-full h-full object-cover rounded-[28px]"
        />
        <div class="chip absolute bottom-0 right-0 p-3 bg-[#D20653] rounded-tl-[33.8px] rounded-br-[33.8px] text-white text-xs">
          Live auction
        </div>
        <div class="fav block sm:hidden absolute top-0 left-0 p-1">
          <button class="w-6 h-6">
            <i
              class="mdi mdi-heart-outline"
            ></i>
          </button>
        </div>
      </div>
      <div class="text flex-grow pl-4 mt-1">
        <div class="date flex items-center justify-between">
          <h2 class="text-base font-medium mb-4">
            Six-piece clothing set blouse - pants - hat and ...
          </h2>
          <button
            class="hidden sm:block p-2"
          >
            <i
              class="mdi text-xl mdi-heart-outline"
            ></i>
          </button>
        </div>
        <div class="price flex items-center text-xs mb-4">
          <span class="text-base text-[#828282]">Starting Price</span>
          <strong class="font-semibold text-lg ml-2">1000 EGP</strong>
        </div>
        <div class="date flex flex-wrap items-center mt-1">
          <p class="me-2 mb-0 text-base text-[#828282]">Lot starts in</p>
          <div class="items flex gap-2">
            <div class="item-time text-xs rounded-lg w-16 h-8 flex items-center justify-center">
              <strong class="text-xl">2</strong>
              <span class="ms-1 mt-1 text-xs font-semibold">Days</span>
            </div>
            <div class="item-time text-xs rounded-lg w-16 h-8 flex items-center justify-center">
              <strong class="text-xl">10</strong>
              <span class="ms-1 mt-1 text-xs font-semibold">Hours</span>
            </div>
            <div class="item-time text-xs rounded-lg w-16 h-8 flex items-center justify-center">
              <strong class="text-xl">50</strong>
              <span class="ms-1 mt-1 text-xs font-semibold">Minutes</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    props: {
      imgSrc: {
        type: String,
        required: true
      }
    }
  });
</script>
  
  <style scoped>
  /* No need for scoped styles with Tailwind CSS */
  </style>
  