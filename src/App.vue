<script setup>
  import Navbar from "./components/custom/Navbar.vue";
  import Footer from "./components/custom/Footer.vue";
  import { RouterView } from "vue-router";
</script>

<template>
  <Navbar />
  <RouterView />
  <Footer />
</template>
