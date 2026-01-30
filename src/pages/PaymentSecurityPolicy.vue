<script setup>
  import { RouterLink } from "vue-router";
</script>

<template>
  <main class="max-w-7xl mx-auto min-h-screen bg-gray-50 text-gray-800">
    <article class="max-w-5xl mx-auto px-4 py-16">
      <header class="mb-8">
        <h1 class="text-4xl font-bold mb-2">
          Tickitin Payment & Security Policy
        </h1>
        <p class="text-sm text-gray-500">
          Effective Date: <strong>January 15, 2026</strong>
        </p>
      </header>

      <img
        src="/privacy_policy/privacy.jpg"
        alt="this is a privacy policy page of tickitin.com image where people holding ticket"
        loading="lazy"
        class="md:h-[80vh] w-full object-cover rounded-xl shadow-sm"
      />

      <section class="mb-6 mt-6 leading-relaxed">
        <p>
          This policy describes how Tickitin processes payments and helps keep
          transactions secure.
        </p>
      </section>

      <section class="space-y-4 leading-relaxed">
        <section class="border border-gray-300 rounded-lg p-4">
          <h2 class="text-xl font-semibold mb-2">1) Secure Payments</h2>
          <p>
            Tickitin uses reputable third party payment processors and security
            measures designed to protect payment transactions.
          </p>
        </section>

        <section class="border border-gray-300 rounded-lg p-4">
          <h2 class="text-xl font-semibold mb-2">2) Authorized Charges</h2>
          <p>
            By placing an order, you authorize Tickitin (and our payment
            processors) to charge your selected payment method for the total
            amount shown at checkout, including applicable taxes where required.
          </p>
        </section>

        <section class="border border-gray-300 rounded-lg p-4">
          <h2 class="text-xl font-semibold mb-2">3) Fraud Prevention</h2>
          <p class="mb-2">To protect customers and sellers, we may:</p>
          <ul class="list-disc ml-6 space-y-1">
            <li>Request additional verification information.</li>
            <li>
              Delay, cancel, or limit orders that appear suspicious or
              unauthorized.
            </li>
            <li>Restrict accounts associated with suspected fraud or abuse.</li>
          </ul>
        </section>

        <section class="border border-gray-300 rounded-lg p-4">
          <h2 class="text-xl font-semibold mb-2">
            4) Chargebacks and Disputes
          </h2>
          <p>
            If you believe a charge is unauthorized, contact
            support@tickitin.com first so we can investigate quickly. Unresolved
            chargebacks may result in account restrictions where permitted by
            law.
          </p>
        </section>

        <section class="border border-gray-300 rounded-lg p-4">
          <h2 class="text-xl font-semibold mb-2">5) Account Security Tips</h2>
          <p>
            Use a strong password, avoid sharing credentials, and keep your
            contact information current so you receive delivery and security
            notifications.
          </p>
        </section>

        <section class="border border-gray-300 rounded-lg p-4">
          <h2 class="text-xl font-semibold mb-2">6) Support</h2>
          <p>
            For assistance, contact:
            <a href="mailto:support@tickitin.com" class="text-blue-600 ml-1">
              support@tickitin.com
            </a>
            <span class="mx-2">|</span>
            <RouterLink to="/contact-us" class="font-bold !underline">
              Visit Contact
            </RouterLink>
          </p>
        </section>
      </section>
    </article>
  </main>
</template>
