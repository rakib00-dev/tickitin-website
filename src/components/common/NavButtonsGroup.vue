<script setup>
  import LargeButton from "./LargeButton.vue";

  defineProps({
    isLargeScreen: {
      type: Boolean,
      default: true,
    },
  });
</script>

<template>
  <div
    :class="`justify-center items-center gap-5 ${
      isLargeScreen ? 'hidden lg:flex' : 'lg:hidden flex'
    }`"
  >
    <LargeButton
      title="Login"
      -custom-class="hover:font-medium hover:bg-[var(--primary-color)] hover:text-white md:px-14 text-[var(--primary-color)] outline-[var(--primary-color)] bg-white"
    />
    <LargeButton
      title="Signup"
      -custom-class="bg-[var(--primary-color)] text-white hover:bg-[var(--primary-dark-color)] hover:font-medium md:px-14"
    />
  </div>
</template>
