<script setup>
  import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
  import "vue3-carousel/dist/carousel.css";
  import SportsCards from "./SportsCards.vue";

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
  ];
</script>

<template>
  <section
    class="bg-[linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url(/images/sports_page/sports_hero.png)] bg-no-repeat bg-cover bg-center"
  >
    <div class="max-w-7xl mx-auto px-6 py-20 text-center">
      <h2 class="text-2xl md:text-4xl font-bold text-white">
        Tickitin - Sports Tickets
      </h2>
      <p class="text-gray-300 mb-8">
        Discover the best tickets to Sports events.
      </p>

      <Carousel v-bind="carouselConfig">
        <Slide v-for="sports in sportsCards" :key="i">
          <div class="p-4 w-full h-full">
            <SportsCards
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
