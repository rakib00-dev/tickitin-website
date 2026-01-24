<script setup>
  import "vue3-carousel/carousel.css";
  import { Carousel, Slide, Pagination } from "vue3-carousel";
  import PlanCard from "./PlanCard.vue";

  // Carousel configuration
  const config = {
    // height: 200,
    itemsToShow: 3,
    gap: 10,
    snapAlign: "start",

    // 'breakpointMode' determines how the carousel breakpoints are calculated
    // Acceptable values: 'viewport' (default) | 'carousel'
    // 'viewport' - breakpoints are based on the viewport width
    // 'carousel' - breakpoints are based on the carousel width
    breakpointMode: "carousel",

    // Breakpoints are mobile-first
    // Any settings not specified will fall back to the carousel's default settings
    breakpoints: {
      // 300px and up
      300: {
        itemsToShow: 1,
        snapAlign: "center",
      },
      // 400px and up
      400: {
        itemsToShow: 1,
        snapAlign: "start",
      },
      // 500px and up
      500: {
        itemsToShow: 2,
        snapAlign: "start",
      },
    },
  };
</script>

<template>
  <!-- Resizable container for testing 'carousel' breakpointMode -->
  <!-- Drag the right edge to adjust the width and see the breakpoints change -->
  <div class="carousel__wrapper">
    <Carousel v-bind="config" class="gap-5 h-auto w-full" style="height: 100%">
      <Slide>
        <PlanCard style="border-radius: 8px; object-fit: cover" />
      </Slide>

      <Slide>
        <PlanCard
          is-popular
          small-title="Enhance Plan"
          :card-list-texts="[
            'AI Documentation Module',
            'AI CLI for Dart',
            'AI QA Testing',
          ]"
        />
      </Slide>

      <Slide>
        <PlanCard
          small-title="Enterprise Plan"
          :card-list-texts="[
            'AI Documentation Module',
            'AI CLI for Dart',
            'AI QA Testing',
            'AI Release Management',
          ]"
        />
      </Slide>

      <template #addons>
        <Pagination />
      </template>
    </Carousel>
  </div>
</template>

<style scoped>
  :root {
    background-color: #242424;
  }

  .carousel {
    --vc-nav-background: rgba(255, 255, 255, 0.7);
    --vc-nav-border-radius: 100%;
  }

  .carousel__wrapper {
    resize: horizontal;
    padding: 2px;
    width: 100%;
  }
</style>
