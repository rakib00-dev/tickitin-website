<script setup lang="ts">
  import LargeButton from "../common/LargeButton.vue";
</script>

<template>
  <section class="baseContainer !py-20 md:py-14">
    <div
      class="grid gap-[48px] py-10 rounded-2xl bg-gradient-to-bl from-[#42489E] to-[#42489E] relative z-10"
    >
      <div class="grid gap-[13px] w-3/5 mx-auto">
        <h2
          class="text-center text-[1.8rem] lg:text-[2.25rem] font-semibold leading-[120%] text-white"
        >
          Ready to Ship Smarter, Not Harder?
        </h2>
        <p class="text-gray-200 text-center mx-auto md:text-sm lg:text-lg">
          Join modern teams who&apos;ve cut their release time in half and
          reclaimed their focus. With DartCode AI, development feels
          frictionless again.
        </p>
      </div>

      <div class="flex justify-center items-center relative">
        <span class="size-20 bg-white absolute -z-[1] blur-3xl"></span>
        <LargeButton
          -custom-class="bg-white font-medium outline-none text-[var(--primary-color)]"
          padding-x="px-9"
          padding-y="py-3.5"
          rounded="rounded-2xl"
          title="Get Started"
        />
      </div>
    </div>
  </section>
</template>
