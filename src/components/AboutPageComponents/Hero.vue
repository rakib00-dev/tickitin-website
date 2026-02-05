<script setup lang="ts">
  import { RouterLink } from "vue-router";
</script>

<template>
  <section
    class="max-w-7xl mx-auto px-6 md:px-16 py-16 md:py-24 flex max-md:flex-col md:flex-row items-center gap-16"
  >
    <div class="grid md:grid-cols-2 gap-4">
      <div class="">
        <h1 class="text-5xl font-black mb-8 text-slate-900">
          We{{ `’` }}re Building the Infrastructure for Better Nights
        </h1>
        <p class="text-md text-slate-500 leading-relaxed mb-10 max-w-lg">
          Tickitin didn&apos;t start as a “ticket company.” It started as a
          frustration. Too many good nights dying in group chats. Too many
          hidden fees. Too many hoops just to be in the same room as people you
          care about. Ticketing had become complicated. Cold. Extractive. And
          weirdly disconnected from the thing it was supposed to enable: Human
          connection. So we rebuilt it from first principles. If events are
          about people… Then the platform should be built around people. Not
          transactions.
        </p>
        <div class="flex gap-4">
          <RouterLink
            to="/contact-us"
            class="transition-all !duration-200 !rounded-full py-3 px-8 !bg-[#59bbd4] font-semibold !text-white hover:!bg-[#4aacc5] shadow-lg flex gap-2"
          >
            Contact Us
          </RouterLink>
          <RouterLink
            to="/customer-reviews"
            class="transition-all !duration-200 !rounded-full py-3 px-8 !bg-[#fff] border-2 border-[#59bbd4] font-semibold !text-[#59bbd4] hover:!bg-[#4aacc5] hover:!text-white shadow-lg flex gap-2"
          >
            Customer Review
          </RouterLink>
        </div>
      </div>
      <div class="">
        <img
          src="https://storage.googleapis.com/tickitin_upload/admin_9%2F1744277818_0.png"
          alt="Main Event"
          class="rounded-[2.5rem] shadow-2xl object-cover w-full h-[500px]"
        />
      </div>
    </div>
  </section>
</template>
