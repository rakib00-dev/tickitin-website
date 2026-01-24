<script setup lang="ts">
  import Carousel from "../common/Carousel.vue";
  import PlanCard from "../common/PlanCard.vue";
</script>

<template>
  <section class="py-32 md:py-24">
    <div class="baseContainer grid gap-[10px] md:gap-[50px]">
      <h1 class="mainSectionHeader !px-10">Choose A Plan That Works For You</h1>

      <div class="hidden lg:flex justify-center items-center gap-8">
        <PlanCard />
        <PlanCard
          is-popular
          small-title="Enhance Plan"
          :card-list-texts="[
            'AI Documentation Module',
            'AI CLI for Dart',
            'AI QA Testing',
          ]"
        />
        <PlanCard
          small-title="Enterprise Plan"
          :card-list-texts="[
            'AI Documentation Module',
            'AI CLI for Dart',
            'AI QA Testing',
            'AI Release Management',
          ]"
        />
      </div>
      <div
        class="lg:hidden flex justify-center items-center gap-8 h-auto overflow-hidden"
      >
        <Carousel />
      </div>
    </div>
  </section>
</template>
