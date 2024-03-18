<template>
    <div :class="`item flex items-center bg-[#FFF5E9] rounded-lg w-[115px] px-3 py-2 `">
      <img :src="iconSrc" :alt="iconAlt" class="me-2 w-4 h-4" />
      <div>
        <h5 class="text-lg font-bold">{{ number }}</h5>
        <span class="text-[#FF951D] text-sm">{{ text }}</span>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    props: {
      number: {
        type: Number,
        required: true
      },
      text: {
        type: String,
        required: true
      },
      iconSrc: {
        type: String,
        required: true
      },
      iconAlt: {
        type: String,
        required: true
      }
    }
  });
</script>
