<script setup>
  import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
  import "vue3-carousel/dist/carousel.css";
  import ReviewsCard from "./ReviewsCard.vue";

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
</script>

<template>
  <section class="bg-gray-50">
    <div class="max-w-7xl mx-auto px-6 py-20 text-center">
      <h2 class="text-2xl font-bold">Our App Reviews</h2>
      <p class="text-gray-500 mb-8">Lorem ipsum dolor sit amet et</p>

      <Carousel v-bind="carouselConfig">
        <Slide v-for="i in 6" :key="i">
          <div class="p-4 w-full h-full">
            <ReviewsCard
              src="https://i.pravatar.cc/150?u=1"
              name="Medium length headline"
              p="Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos."
              fiveStar
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
