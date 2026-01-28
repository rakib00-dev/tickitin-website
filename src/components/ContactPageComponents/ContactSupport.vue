<template>
  <main
    class="flex justify-center items-center max-md:flex-col gap-4 px-4 py-6 md:px-8"
  >
    <div
      class="p-3 border border-gray-200 w-full h-[170px] rounded-xl shadow px-6"
    >
      <h3 class="text-xl font-bold flex justify-start items-center gap-2">
        <img src="/contact_us/mail.svg" class="size-5" loading="lazy" />
        Support email
      </h3>
      <div class="w-full my-2 h-0.5 bg-gray-300"></div>
      <div class="*:text-sm flex flex-col gap-4 w-full">
        <a href="mailto:support@tickitin.com" class="font-bold !underline"
          >support@tickitin.com
        </a>
        <p>(Include your Order ID for the fastest resolution.)</p>
      </div>
    </div>
    <div
      class="p-3 border border-gray-200 w-full h-[170px] rounded-xl shadow px-6"
    >
      <h3
        class="text-xl font-bold w-full flex justify-start items-center gap-2"
      >
        <img src="/contact_us/clock.png" class="size-5" loading="lazy" />Support
        Hours
      </h3>
      <div class="w-full my-2 h-0.5 bg-gray-300"></div>
      <div class="*:text-sm w-full space-y-3">
        <p>
          <strong>Monday {{ `–` }} Sunday</strong>
        </p>
        <p>
          <strong>9:00 AM {{ `–` }} 9:00 PM (Local Time)</strong>
        </p>
        <p>We typically respond within <strong>24 hours</strong></p>
      </div>
    </div>
    <div
      class="p-3 border border-gray-200 w-full h-[170px] rounded-xl shadow px-6"
    >
      <h3
        class="text-xl font-bold w-full flex justify-start items-center gap-2"
      >
        <img src="/contact_us/order.png" class="size-5" loading="lazy" />Order
        Support
      </h3>
      <div class="w-full my-2 h-0.5 bg-gray-300"></div>
      <div class="*:text-sm font-medium w-full">
        <div>• Order ID</div>
        <div>• Event name & date</div>
        <div>• Email used in checkout</div>
        <div>• Screenshot (if relevent)</div>
      </div>
    </div>
  </main>
</template>
