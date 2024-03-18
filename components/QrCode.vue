<template>
    <div class="qr-code relative">
      <div class="wrapper">
        <div class="head flex items-center">
          <h2 class="text-2xl font-bold">QR Code</h2>
          <v-spacer />
          <v-btn icon flat size="small">
            <img src="~/assets/imgs/file.svg" alt="File" class="w-6 h-6" />
          </v-btn>
          <v-btn icon flat size="small">
            <img src="~/assets/imgs/share.svg" alt="Share" class="w-6 h-6" />
          </v-btn>
          <v-btn icon flat size="small">
            <img src="~/assets/imgs/eye.svg" alt="Eye" class="w-6 h-6" />
          </v-btn>
        </div>
        <div class="downlaod flex items-center">
          <img src="~/assets/imgs/download.svg" alt="Download" class="w-6 h-6" />
          <p class="mb-0 ms-3 text-sm">Download the QR code or share it with your friends</p>
        </div>
        <div class="qr bg-secondary-light rounded-lg p-4 my-4 gradint-btn">
          <div class="white bg-white text-center rounded-lg p-4">
            <div class="logo">
              <img src="~/assets/imgs/logo.svg" alt="Logo" class="max-w-167 mx-auto mb-3" />
            </div>
            <h2 class="text-lg font-bold">Hala Ahmed</h2>
            <div class="qr-image">
              <img src="~/assets/imgs/qrcode.png" alt="QR Code" class="w-1/2 m-auto h-full" />
            </div>
            <p class="text-sm text-gray-400">Follow Us on Mazaady</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style scoped>
  /* No need for scoped styles with Tailwind CSS */
  </style>