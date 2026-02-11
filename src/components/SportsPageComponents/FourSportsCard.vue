<template>
  <div
    class="flex flex-col justify-center items-center h-full bg-[#e7e7e72f] p-4 border border-gray-100 rounded shadow relative overflow-hidden"
  >
    <div class="absolute inset-0 z-[-1] blur-[32px] backdrop-blur-[2px]"></div>
    <div class="grid place-items-center w-full">
      <img
        :src="src"
        :alt="name"
        class="rounded-md w-full aspect-video object-cover"
      />
      <div class="w-full text-left">
        <h5 class="font-bold mt-2 text-gray-900">{{ title }}</h5>
        <span class="capitalize font-medium text-sm text-gray-600 text-left">{{
          name
        }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
  defineProps({
    src: { type: String, required: true },
    title: { type: String, default: "Minnesota Twins vs Atlanta Braves" },
    name: { type: String, required: true, default: "football" },
    borderCss: { type: String, default: "border-black" },
  });
</script>
