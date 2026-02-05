<script setup lang="ts">
  import { RouterLink } from "vue-router";
</script>

<template>
  <main
    class="px-4 py-10 md:px-8 bg-[linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url(/images/about_us/about_us_hero.png)] bg-no-repeat bg-cover bg-center md:h-[40vh] overflow-hidden place-items-center grid"
  >
    <div
      class="max-w-7xl mx-auto grid place-items-center gap-2 *:text-white relative z-10"
    >
      <h1 class="text-2xl md:text-4xl font-bold">Tickitin - About Us</h1>
      <h1 class="text-lg text-center md:text-xl font-bold">
        We{{ `’` }}re Building the Infrastructure for Better Nights
      </h1>
      <p class="text-sm md:text-lg md:w-4/5 text-center">
        Tickitin didn&apos;t start as a “ticket company.” It started as a
        frustration. Too many good nights dying in group chats. Too many hidden
        fees. Too many hoops just to be in the same room as people you care
        about. Ticketing had become complicated. Cold. Extractive. And weirdly
        disconnected from the thing it was supposed to enable: Human connection.
        So we rebuilt it from first principles. If events are about people… Then
        the platform should be built around people. Not transactions.
      </p>
    </div>
  </main>

  <!-- <section
    class="max-w-7xl mx-auto px-6 md:px-16 py-16 md:py-24 flex max-md:flex-col md:flex-row items-center gap-16 overflow-hidden"
  >
    <div class="grid md:grid-cols-2 gap-4">
      <div class="max-md:order-2">
        <h1 class="text-5xl max-md:text-2xl font-bold mb-4 text-gray-900">
          We{{ `’` }}re Building the Infrastructure for Better Nights
        </h1>
        <p
          class="text-sm md:text-md text-slate-500 leading-relaxed mb-4 max-w-lg"
        >
          Tickitin didn&apos;t start as a “ticket company.” It started as a
          frustration. Too many good nights dying in group chats. Too many
          hidden fees. Too many hoops just to be in the same room as people you
          care about. Ticketing had become complicated. Cold. Extractive. And
          weirdly disconnected from the thing it was supposed to enable: Human
          connection. So we rebuilt it from first principles. If events are
          about people… Then the platform should be built around people. Not
          transactions.
        </p>
        <div class="flex max-md:flex-col gap-4">
          <RouterLink
            to="/contact-us"
            class="!text-center max-md:text-sm transition-all !duration-200 !rounded-full py-3 px-8 !bg-[#59bbd4] font-semibold !text-white hover:!bg-[#4aacc5] shadow-lg gap-2"
          >
            Contact Us
          </RouterLink>
          <RouterLink
            to="/customer-reviews"
            class="!text-center max-md:text-sm transition-all !duration-200 !rounded-full py-3 px-8 !bg-[#fff] border-2 border-[#59bbd4] font-semibold !text-[#59bbd4] hover:!bg-[#4aacc5] hover:!text-white shadow-lg gap-2"
          >
            Customer Review
          </RouterLink>
        </div>
      </div>
      <img
        src="/images/about_us/about_us_hero.png"
        alt="Main Event"
        class="rounded-2xl shadow-2xl w-full"
      />
    </div>
  </section> -->
</template>
