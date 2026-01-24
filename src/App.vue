<script setup>
  import ReadyToShip from "./components/custom/ReadyToShip.vue";
  import ExploreFeatures from "./components/custom/ExploreFeatures.vue";
  import FeatureBenefits from "./components/custom/FeatureBenefits.vue";
  import Hero from "./components/custom/Hero.vue";
  import Navbar from "./components/custom/Navbar.vue";
  import Footer from "./components/custom/Footer.vue";
  import WhatMakesDifferent from "./components/custom/WhatMakesDifferent.vue";
  import ChooseAPlan from "./components/custom/ChooseAPlan.vue";
  import { RouterView } from "vue-router";
</script>

<template>
  <Navbar />
  <RouterView />
  <Footer />
</template>
