<script setup lang="ts">
  import Hero from "../components/AboutPageComponents/Hero.vue";
  import OurCaptain from "../components/AboutPageComponents/OurCaptain.vue";
  import OurGoals from "../components/AboutPageComponents/OurGoals.vue";
  import WhatWeBelieve from "../components/AboutPageComponents/WhatWeBelieve.vue";
  import WhatWeDo from "../components/AboutPageComponents/WhatWeDo.vue";
  import WhoWeAre from "../components/AboutPageComponents/WhoWeAre.vue";
</script>

<template>
  <Hero />
  <WhatWeDo />
  <WhatWeBelieve />
  <WhoWeAre />
  <OurCaptain />
  <OurGoals />

  <section class="max-w-7xl mx-auto px-6 py-10 text-center">
    <div
      class="flex max-md:flex-col items-center justify-between gap-8 bg-gray-100 rounded-2xl p-6 border-2 border-gray-300"
    >
      <div class="space-y-6 md:w-1/2 text-left">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900">
          Get our Mobile App
        </h2>
        <p class="text-gray-500">
          A one-stop ticketing experience, providing users with various types of
          tickets, well-known artists in the industry, and so on.
        </p>
        <div class="flex flex-wrap gap-3">
          <button
            class="!bg-[#787575] hover:bg-black text-white px-10 py-3 rounded-full font-bold transition-all flex justify-center items-center gap-2"
          >
            <img
              src="/images/customer_review/android.png"
              alt="this is a iphone image"
              class="w-8 h-8"
              loading="lazy"
            />
            <div>
              <span class="text-xs">Get It On</span><br />
              <span>Android</span>
            </div>
          </button>
          <button
            class="!bg-[#787575] hover:bg-black text-white px-10 py-3 rounded-full font-bold transition-all flex justify-center items-center gap-2"
          >
            <img
              src="/images/customer_review/iphone.png"
              alt="this is a iphone image"
              class="w-8 h-10"
              loading="lazy"
            />
            <div>
              <span class="text-xs">Download On the</span><br />
              <span>Iphone</span>
            </div>
          </button>
        </div>
      </div>

      <div class="relative md:w-1/3 flex justify-center">
        <div class="w-36 shadow-2xl relative rounded-2xl">
          <img
            src="https://tickitin.com/img/picture.f6695f45.png"
            alt=""
            class="rounded-2xl"
          />
        </div>
      </div>
    </div>
  </section>
</template>
