<script setup>
  defineProps({
    title: {
      type: String,
      required: true,
    },
    CustomClass: { type: [String, Array, Object] },
    paddingX: {
      type: String,
      default: "px-8",
    },
    paddingY: {
      type: String,
      default: "py-2",
    },
    rounded: {
      type: String,
      default: "rounded",
    },
    href: {
      default: "#",
      type: String,
    },
  });
</script>

<template>
  <a
    :href="href"
    :class="[
      'transition-all duration-300 text-sm md:text-md lg:text-lg outline-[1.5px] outline-[var(--primary-color)] capitalize cursor-pointer w-fit',
      CustomClass,
      paddingX,
      paddingY,
      rounded,
    ]"
  >
    {{ title }}
  </a>
</template>

<style></style>
