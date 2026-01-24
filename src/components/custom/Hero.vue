<script setup>
  import HeroBgLineEelement from "../common/HeroBgLineEelement.vue";
  import LargeButton from "../common/LargeButton.vue";
  import { companies } from "../../utils/heroComapnies";
</script>

<template>
  <section class="py-4 md:py-10">
    <div class="baseContainer grid gap-17 md:gap-20 overflow-hidden">
      <div class="grid gap-8 place-items-center">
        <h1
          class="text-3xl md:text-5xl lg:text-6xl text-center grid font-[400] leading-[54px] md: lg:leading-[84px]"
        >
          Accelerate Your Development & QA Workflow with
          <span class="text-[var(--primary-color)] font-[700]"
            >AI-Powered Automation</span
          >
        </h1>
        <div
          class="relative grid gap-12 md:gap-8 place-items-center md:px-[20%]"
        >
          <div class="grid place-items-center">
            <HeroBgLineEelement class="w-full absolute -z-10 max-md:hidden" />
            <p class="text-center max-md:text-sm md:px-5 max-md:leading-[24px]">
              DartCode AI streamlines your QA and release processes by
              automating pull request management, coordinating multi-repository
              operations, and enhancing quality assurance.
            </p>
          </div>

          <div class="grid place-items-center gap-5 md:gap-[25px] w-full">
            <LargeButton
              -custom-class="bg-[var(--primary-color)] text-white hover:bg-[var(--primary-dark-color)] hover:font-medium px-4"
              padding-x
              title="get started"
            />
            <span
              class="w-full bg-[var(--primary-light-color)] text-[var(--primary-color)] text-center p-1"
            >
              Explore
              <a href="#" class="underline leading-[24px] text-[1rem]"
                >DartCode AI for free.</a
              ></span
            >
          </div>
        </div>
      </div>
      <div class="grid place-items-center gap-3 md:gap-16">
        <span>Trusted by teams building fast, shipping smart</span>
        <div class="flex flex-wrap justify-center items-center gap-3 w-full">
          <div
            v-for="(svg, i) in companies"
            :key="`${i}heroCompanyImages`"
            v-html="svg"
            class="flex gap-[auto]"
          />
        </div>
      </div>
    </div>
  </section>
</template>
