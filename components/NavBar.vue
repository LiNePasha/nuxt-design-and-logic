<template>
    <div class="nav-bar">
      <v-app-bar :elevation="0" height="68">
        <v-container class="py-0 h-100">
          <div class="flex items-center h-100 gap-7">
            <v-app-bar-nav-icon class="block md:hidden"></v-app-bar-nav-icon>
            <div class="logo flex items-center ms-7">
                <div class="img flex items-center">
                  <img src="~/assets/imgs/logo.svg"></img>
                </div>
            </div>
            <div class="links hidden sm:flex gap-10">
              <div class="link">
                <nuxt-link to="/">Design</nuxt-link>
              </div>
              <div class="link">
                <nuxt-link to="/logic">Logic</nuxt-link>
              </div>
            </div>
            <v-spacer></v-spacer>
            <div class="hidden md:flex items-center">
              <v-btn class="mx-5" icon size="small">
                <img width="24px" height="24px" src="~/assets/imgs/search.svg" ></img>
              </v-btn>
              <div class="w-[38px] border-[1.5px] border-solid border-[#FFEAD2] transform -rotate-90"></div>
              <v-btn class="mx-5" icon size="small">
                <img width="24px" height="24px" src="~/assets/imgs/bell.svg" ></img>
              </v-btn>
              <div class="w-[38px] border-[1.5px] border-solid border-[#FFEAD2] transform -rotate-90"></div>
              <v-btn icon>
                <div class="user">
                  <img src="~/assets/imgs/user.png"></img>
                </div>
              </v-btn>
              <button class="ml-5">Add new product</button>
            </div>
            <div class="lang flex items-center">
              <v-btn>
                <img width="24px" height="24px" contain src="~/assets/imgs/global.svg"></img>
                <div class="w-[25px] border-[1.5px] border-solid border-[#FFEAD2] transform -rotate-90"></div>
                <h4>EN</h4>
              </v-btn>
            </div>
          </div>
        </v-container>
      </v-app-bar>
    </div>
  </template>
  
  <script setup>
//   Script
  </script>
  
  <style>
/* Style */
</style>