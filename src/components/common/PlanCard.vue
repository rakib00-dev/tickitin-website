<script setup>
  import LargeButton from "../common/LargeButton.vue";

  defineProps({
    isPopular: {
      default: false,
      type: Boolean,
    },
    smallTitle: {
      default: "Standard Plan",
      type: String,
    },
    cardListTexts: {
      default: ["AI Documentation Module", "AI CLI for Dart"],
      type: Array,
    },
    cardClass: {
      type: String,
      default: "w-full",
    },
  });
</script>

<template>
  <div
    :class="[
      'flex flex-col gap-10 border rounded-2xl border-[var(--border-color)] shadow-2xl p-8 h-[773.01px]',
      cardClass,
      { bgColor: isPopular, allTextWhite: isPopular },
    ]"
    :key="cardListTexts[cardListTexts.length - 1]"
  >
    <div class="flex flex-col place-items-start gap-4">
      <div class="flex gap-6">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M26.6667 13.3337L30.607 9.39348M9.39384 30.6066L13.3338 26.6667M29.4276 20H35M5 20H10.5719M20 10.5724L20 5M20 35L20 29.4281M13.3337 13.3337L9.39349 9.39349M30.6066 30.6066L26.6667 26.6667"
            stroke="#81C04E"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span
          v-if="isPopular"
          class="text-white bg-[var(--card-yellow-color)] p-1 rounded-full text-lg px-2 font-semibold h-9 w-24 text-center"
          >Popular</span
        >
      </div>
      <div class="w-full">
        <h5 class="font-bold text-xl">{{ smallTitle }}</h5>
        <div class="justify-end flex">
          <span
            class="text-[var(--primary-color)] bg-[var(--carousel-card-gray-color)] p-1 rounded-2xl w-fit text-sm px-2 -rotate-8 font-semibold"
            >Billed annually</span
          >
        </div>
      </div>
      <h2
        :class="[
          'font-bold text-5xl text-[var(--primary-color)]',
          { allTextWhite: isPopular },
        ]"
      >
        Coming Soon
      </h2>
    </div>
    <div class="border-t"></div>
    <div class="flex flex-col justify-between gap-7 h-full">
      <div class="">
        <div v-for="text in cardListTexts" class="flex gap-3">
          <span>
            <svg
              v-if="!isPopular"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 14.509C5 14.509 6.5 14.509 8.5 18.009C8.5 18.009 14.0588 8.84236 19 7.00903"
                stroke="#42489E"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <svg
              v-else
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 14.5088C5 14.5088 6.5 14.5088 8.5 18.0088C8.5 18.0088 14.0588 8.84212 19 7.00879"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          {{ text }}
        </div>
      </div>
      <LargeButton
        title="Subscribe"
        :-custom-class="[
          'transition-all duration-300 w-full bg-white text-center hover:text-white hover:font-bold hover:bg-[var(--primary-color)] outline-black',
          { bgTransparent: isPopular },
        ]"
      />
    </div>
  </div>
</template>

<style scoped>
  .allTextWhite {
    color: white;
  }

  .bgColor {
    background: var(--primary-color);
  }

  .bgTransparent {
    background-color: transparent;
    font-weight: 500;
    outline: 1px solid white;
  }
</style>
