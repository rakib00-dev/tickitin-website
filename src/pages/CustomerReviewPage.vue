<template>
  <main class="">
    <header
      class="px-4 py-16 md:px-8 overflow-hidden place-items-center grid bg-gray-50 rounded-b-3xl"
    >
      <div class="max-w-7xl mx-auto grid place-items-center gap-4 text-center">
        <h1 class="text-3xl md:text-5xl font-bold text-gray-900">
          Tickitin Customer Reviews
        </h1>
        <p class="md:text-xl md:w-4/5 text-gray-600">
          See what our community is saying about their experiences.
        </p>
        <button
          class="transition-all !duration-200 rounded-full py-3 px-8 !bg-[#59bbd4] font-semibold text-white hover:!bg-[#4aacc5] shadow-lg flex gap-2"
        >
          Leave A Review
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-message-square-diff-icon lucide-message-square-diff"
          >
            <path
              d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"
            />
            <path d="M10 15h4" />
            <path d="M10 9h4" />
            <path d="M12 7v4" />
          </svg>
        </button>
      </div>
    </header>

    <WhatOurCustomerSay />

    <OurAppReviews />

    <ReviewsFAQ />

    <section class="max-w-7xl mx-auto px-6 py-10 text-center">
      <div
        class="flex max-md:flex-col items-center justify-between gap-8 bg-gray-100 rounded-2xl p-6 border-2 border-gray-300"
      >
        <div class="space-y-6 md:w-1/2 text-left">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900">
            Get our Mobile App
          </h2>
          <p class="text-gray-500">
            A one-stop ticketing experience, providing users with various types
            of tickets, well-known artists in the industry, and so on.
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
  </main>
</template>

<script setup>
  import OurAppReviews from "../components/ReviewsPage/OurAppReviews.vue";
  import ReviewsFAQ from "../components/ReviewsPage/ReviewsFAQ.vue";
  import WhatOurCustomerSay from "../components/ReviewsPage/WhatOurCustomerSay.vue";
</script>
