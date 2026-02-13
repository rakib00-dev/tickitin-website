<script setup>
  import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
  import "vue3-carousel/dist/carousel.css";
  import FourSportsCard from "./FourSportsCard.vue";

  const carouselConfig = {
    itemsToShow: 1,
    snapAlign: "center",
    wrapAround: true,
    gap: 20,
    breakpoints: {
      768: {
        itemsToShow: 2,
      },
      1024: {
        itemsToShow: 3,
      },
    },
  };

  const sportsCards = [
    {
      src: "/images/sports_page/sports_card_baseball.webp",
      title: "Minnesota Twins vs Atlanta Braves",
      name: "Baseball",
    },
    {
      src: "/images/sports_page/sports_card_NBA.png",
      title: "Minnesota Twins vs Atlanta Braves",
      name: "Basketball",
    },
    {
      src: "/images/sports_page/sports_card_football.jpg",
      title: "Minnesota Twins vs Atlanta Braves",
      name: "Football",
    },
    {
      src: "/images/sports_page/sports_card_hockey.jpg",
      title: "Minnesota Twins vs Atlanta Braves",
      name: "Hockey",
    },
    {
      src: "/images/sports_page/sports_card_skating.jpg",
      title: "Minnesota Twins vs Atlanta Braves",
      name: "Skating",
    },
    {
      src: "/images/sports_page/sports_card_soccer.jpg",
      title: "Minnesota Twins vs Atlanta Braves",
      name: "Soccer",
    },
    {
      src: "/images/sports_page/sports_card_boxing.jpg",
      title: "Minnesota Twins vs Atlanta Braves",
      name: "Boxing",
    },
  ].reverse();
</script>

<template>
  <!-- Baseball -->
  <section class="">
    <div class="max-w-7xl mx-auto px-6 py-8 md:py-14 text-center">
      <div
        class="px-4 text-left flex justify-between md:items-center max-md:flex-col"
      >
        <div class="">
          <h2 class="text-2xl md:text-4xl font-bold">Baseball</h2>
          <p class="text-gray-500 mb-8">
            Discover the best tickets to Sports events.
          </p>
        </div>
        <div class="">
          <a
            href="https://tickitin.com/#/search?type_id=63"
            class="px-3 py-1 border border-gray-200 rounded-full text-md"
            >View all</a
          >
        </div>
      </div>

      <Carousel v-bind="carouselConfig">
        <Slide
          v-for="sports in sportsCards"
          :key="`${sports.name}firstcardfromfour`"
        >
          <div class="p-4 w-full h-full">
            <FourSportsCard
              :src="sports.src"
              :name="sports.name"
              :title="sports.title"
            />
          </div>
        </Slide>

        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>
    </div>
  </section>

  <!-- Basketball -->
  <section class="">
    <div class="max-w-7xl mx-auto px-6 py-8 md:py-14 text-center">
      <div
        class="px-4 text-left flex justify-between md:items-center max-md:flex-col"
      >
        <div class="">
          <h2 class="text-2xl md:text-4xl font-bold">Basketball</h2>
          <p class="text-gray-500 mb-8">
            Discover the best tickets to Sports events.
          </p>
        </div>
        <div class="">
          <a
            href="https://tickitin.com/#/search?type_id=63"
            class="px-3 py-1 border border-gray-200 rounded-full text-md"
            >View all</a
          >
        </div>
      </div>

      <Carousel v-bind="carouselConfig">
        <Slide
          v-for="sports in sportsCards"
          :key="`${sports.name}firstcardfromfour`"
        >
          <div class="p-4 w-full h-full">
            <FourSportsCard
              :src="sports.src"
              :name="sports.name"
              :title="sports.title"
            />
          </div>
        </Slide>

        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>
    </div>
  </section>

  <!-- boxing -->
  <section class="">
    <div class="max-w-7xl mx-auto px-6 py-8 md:py-14 text-center">
      <div
        class="px-4 text-left flex justify-between md:items-center max-md:flex-col"
      >
        <div class="">
          <h2 class="text-2xl md:text-4xl font-bold">Boxing</h2>
          <p class="text-gray-500 mb-8">
            Discover the best tickets to Sports events.
          </p>
        </div>
        <div class="">
          <a
            href="https://tickitin.com/#/search?type_id=63"
            class="px-3 py-1 border border-gray-200 rounded-full text-md"
            >View all</a
          >
        </div>
      </div>

      <Carousel v-bind="carouselConfig">
        <Slide
          v-for="sports in sportsCards"
          :key="`${sports.name}firstcardfromfour`"
        >
          <div class="p-4 w-full h-full">
            <FourSportsCard
              :src="sports.src"
              :name="sports.name"
              :title="sports.title"
            />
          </div>
        </Slide>

        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>
    </div>
  </section>

  <!-- football -->
  <section class="">
    <div class="max-w-7xl mx-auto px-6 py-8 md:py-14 text-center">
      <div
        class="px-4 text-left flex justify-between md:items-center max-md:flex-col"
      >
        <div class="">
          <h2 class="text-2xl md:text-4xl font-bold">Football</h2>
          <p class="text-gray-500 mb-8">
            Discover the best tickets to Sports events.
          </p>
        </div>
        <div class="">
          <a
            href="https://tickitin.com/#/search?type_id=63"
            class="px-3 py-1 border border-gray-200 rounded-full text-md"
            >View all</a
          >
        </div>
      </div>

      <Carousel v-bind="carouselConfig">
        <Slide
          v-for="sports in sportsCards"
          :key="`${sports.name}firstcardfromfour`"
        >
          <div class="p-4 w-full h-full">
            <FourSportsCard
              :src="sports.src"
              :name="sports.name"
              :title="sports.title"
            />
          </div>
        </Slide>

        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>
    </div>
  </section>
</template>

<style>
  .carousel__next,
  .carousel__prev {
    background: #59bbd4;
    color: white;
    border-radius: 100%;
    height: 40px;
    width: 40px;
  }

  .carousel__pagination {
    padding-top: 10px;
    margin-top: 0;
    position: relative;
  }
</style>
