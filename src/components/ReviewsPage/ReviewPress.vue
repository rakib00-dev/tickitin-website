<template>
  <section class="bg-gray-50 py-20">
    <div class="max-w-7xl mx-auto px-6 text-center">
      <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
        Our Press Reviews
      </h2>
      <p class="mt-4 text-lg text-gray-500 mb-12">
        See how Tickitin is revolutionizing the industry through no-fee
        ticketing.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          v-for="(article, index) in pressArticles"
          :key="index"
          class="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col border border-gray-100 transition-transform hover:scale-[1.01]"
        >
          <div class="relative w-full h-64 bg-gray-200">
            <iframe
              v-if="!article.isRefused"
              :src="article.url"
              class="w-full h-full border-none"
              title="Press Review"
              loading="lazy"
            ></iframe>

            <div
              v-else
              class="w-full h-full bg-[#1a1e23] flex flex-col items-center justify-center p-6 text-center"
            >
              <span
                class="text-[#59bbd4] font-black text-4xl italic tracking-tighter mb-2"
              >
                {{ article.source }}
              </span>
              <p class="text-white text-sm opacity-80 italic">
                Exclusive Coverage
              </p>
            </div>

            <div
              class="absolute inset-0 bg-transparent pointer-events-none"
            ></div>
          </div>

          <div class="p-6 flex flex-col flex-grow text-left">
            <span
              class="text-blue-600 text-sm font-semibold uppercase tracking-wide"
            >
              {{ article.source }}
            </span>
            <h3 class="mt-2 text-xl font-bold text-gray-900">
              {{ article.title }}
            </h3>
            <p class="mt-3 text-gray-600 flex-grow">
              {{ article.excerpt }}
            </p>

            <div class="mt-6">
              <a
                :href="article.url"
                target="_blank"
                class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md !text-white bg-[#59bbd4] hover:bg-[#4aaac2] transition-colors"
              >
                Read Full Article
                <svg
                  class="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { ref } from "vue";

  const pressArticles = ref([
    {
      title: "Transforming Live Event Ticketing",
      source: "USA News",
      url: "https://usanews.com/newsroom/tickitin-transforming-live-event-ticketing-through-a-fan-centric-no-fee-platform",
      excerpt:
        "Exploring how Tickitin's fan-centric approach is disrupting the traditional ticketing model by removing hidden fees.",
      isRefused: false,
    },
    {
      title: "Tickitin Platform Charges No Fees",
      source: "Yahoo Finance",
      url: "https://finance.yahoo.com/news/tickitin-platform-charges-no-fees-173000685.html",
      excerpt:
        "Yahoo Finance highlights Tickitin’s commitment to transparency and its growth in the competitive entertainment market.",
      isRefused: true,
    },
  ]);
</script>
