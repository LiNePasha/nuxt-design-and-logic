<template>
    <div class="mt-10">
      <v-container>
        <v-row>
          <v-col cols="12" md="6" lg="4">
            <user-card />
            <qr-code class="mt-5" />
          </v-col>
          <v-col cols="12" md="6" lg="8">
            <div class="products">
              <div class="wrapper">
                <div class="filters gap-2 flex items-center">
                  <button class="active">Products</button>
                  <button>Articles</button>
                  <button>Reviews</button>
                  <v-spacer />
                  <button class="gradint-btn h-12 text-white p-3 hidden md:flex gap-1 items-center"> <img src="~/assets/imgs/add-circle.png" alt="User Image" class="w-5 h-5 object-cover rounded-2xl" /> Add Review</button>
                </div>
                <h3 class="mb-2 text-xl font-semibold">Products <small class="ms-2 text-[#828282] text-sm">(12)</small></h3>
                  <product-card imgSrc="https://res.cloudinary.com/dzxbbqq4l/image/upload/v1710692705/a868f750e8af9c438d630e0ad2d5357d_ndyexp.jpg" class="mb-10" />
                  <product-card imgSrc="https://res.cloudinary.com/dzxbbqq4l/image/upload/v1710692705/303b0368e0a8e19b3f56ae9068708f73_m8yw4n.jpg" class="mb-10" />
                  <product-card imgSrc="https://res.cloudinary.com/dzxbbqq4l/image/upload/v1710692705/e6c6f653a71f3343ab26fca8d573f90e_yh4gce.jpg" class="mb-10" />
                  <product-card imgSrc="https://res.cloudinary.com/dzxbbqq4l/image/upload/v1710692706/69d4f459bbbc627d952033ad9bbda7bb_acnju3.jpg" class="mb-10" />
                  <product-card imgSrc="https://res.cloudinary.com/dzxbbqq4l/image/upload/v1710692704/7b957b12337436f7b6922a2bef35de37_btmdfi.jpg" class="mb-10" />
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </template>
  
  <script>
  export default {};
  </script>

<style scoped>
    /* no  css styles because iam using tailwind css */
</style>