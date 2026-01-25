<script setup>
  import Navbar from "./components/AboutPageComponents/Navbar.vue";
  import Footer from "./components/AboutPageComponents/Footer.vue";
  import { RouterView } from "vue-router";
</script>

<template>
  <Navbar />
  <RouterView />
  <Footer />
</template>
