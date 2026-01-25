<script setup lang="ts">
  import { RouterView } from "vue-router";
</script>

<template>
  <div class="grid place-items-center">
    <div class="cursor-pointer">
      <RouterLink to="/about">Go To <u>About</u> Page</RouterLink>
      to
    </div>

    <div class="cursor-pointer">
      <RouterLink to="/contact-us">Go To <u>Contact Us</u> Page</RouterLink>
      to
    </div>
  </div>
</template>
