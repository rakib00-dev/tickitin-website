<template>
  <div
    class="flex flex-col justify-center items-center h-full bg-gray-50 p-4 border border-gray-400 rounded shadow"
  >
    <div class="grid place-items-center">
      <img :src="src" :alt="name" class="rounded-full size-15 object-cover" />
      <h5 class="font-bold mt-2">{{ name }}</h5>
      <span class="text-sm text-gray-500">{{ title }}</span>
    </div>

    <span class="flex gap-1 justify-start items-center font-medium mt-1">
      <template v-for="i in 5" :key="i">
        <svg class="w-6 h-6 fill-amber-400" viewBox="0 0 24 24">
          <path
            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
          />
        </svg>
      </template>
      <svg v-if="!fiveStar" class="w-6 h-6 fill-amber-400" viewBox="0 0 24 24">
        <path
          d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27V13.1l-3.35 2.53.89-3.84-2.99-2.58 3.92-.33L12 5.27v3.97z"
        />
      </svg>
    </span>

    <p class="text-md pt-2 pb-2 text-center font-medium text-gray-800 flex">
      {{ p }}
    </p>
  </div>
</template>

<script setup>
  defineProps({
    src: { type: String, required: true },
    p: { type: String, default: "The secrets of cakes" },
    fiveStar: { type: Boolean, default: false },
    title: { type: String, default: "ZenDesk Administrators" },
    name: { type: String, required: true },
    borderCss: { type: String, default: "border-black" },
  });
</script>
