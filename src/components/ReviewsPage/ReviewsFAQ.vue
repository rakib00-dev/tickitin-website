<script setup>
  const faqs = [
    {
      q: "How do I join the community?",
      a: "Simply click the sign-up button at the top right and follow the onboarding steps!",
    },
    {
      q: "Is there a monthly fee?",
      a: "No, we offer a one-time lifetime access plan for all our core features.",
    },
    {
      q: "Can I cancel anytime?",
      a: "Yes, you can manage your subscription or account status in your profile settings.",
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept all major credit cards, PayPal, and Apple Pay for your convenience.",
    },
    {
      q: "Do you offer technical support?",
      a: "Our support team is available 24/7 via live chat and email to help with any issues.",
    },
    {
      q: "Can I upgrade my plan later?",
      a: "Absolutely! You can upgrade your tier at any time, and we will prorate the cost.",
    },
  ];
</script>

<template>
  <section class="max-w-7xl mx-auto px-6 py-20">
    <h2 class="text-4xl font-black text-center mb-10 tracking-widest uppercase">
      FAQ
    </h2>

    <div class="space-y-4">
      <details
        v-for="(item, index) in faqs"
        :key="index"
        class="group border border-gray-300 rounded-2xl transition-all duration-300"
      >
        <summary
          class="list-none p-4 flex justify-between items-center rounded-2xl cursor-pointer hover:bg-gray-50 font-bold"
        >
          <span>{{ item.q }}</span>
          <span
            class="text-xs transition-transform duration-300 group-open:rotate-180"
          >
            ▼
          </span>
        </summary>

        <div
          class="px-4 pb-4 text-gray-700 text-left border-t border-gray-400 pt-4"
        >
          {{ item.a }}
        </div>
      </details>
    </div>
  </section>
</template>

<style scoped>
  /* Removes the default browser arrow in Chrome/Safari */
  summary::-webkit-details-marker {
    display: none;
  }
</style>
