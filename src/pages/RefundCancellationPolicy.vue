<script setup>
  import { RouterLink } from "vue-router";
</script>

<template>
  <main class="max-w-7xl mx-auto min-h-screen bg-gray-50 text-gray-800">
    <article class="max-w-5xl mx-auto px-4 py-16">
      <header class="mb-8">
        <h1 class="text-4xl font-bold mb-2">
          Tickitin Refund & Cancellation Policy
        </h1>
        <p class="text-sm text-gray-500">
          Effective Date: <strong>January 15, 2026</strong>
        </p>
      </header>

      <img
        src="/privacy_policy/privacy.jpg"
        alt="Tickitin Support - Refund and Cancellation Policy Image"
        loading="lazy"
        class="md:h-[80vh] w-full object-cover rounded-xl shadow-sm"
      />

      <section class="mb-6 mt-6 leading-relaxed">
        <p class="text-lg">
          Tickitin is a ticket marketplace. Because tickets are time-sensitive
          and sourced from various sellers and partners, our refund rules are
          limited and consistent with standard ticket marketplace practices.
          This policy outlines the specific circumstances under which refunds or
          replacements may be issued.
        </p>
      </section>

      <section class="space-y-4 leading-relaxed">
        <section class="border border-gray-300 rounded-lg p-4">
          <h2 class="text-xl font-semibold mb-2">
            1) All Sales Are Generally Final
          </h2>
          <p>
            Once an order is confirmed, it generally cannot be canceled,
            returned, or exchanged. We encourage all users to review event
            details, dates, and seating carefully before completing a purchase.
          </p>
        </section>

        <section class="border border-gray-300 rounded-lg p-4">
          <h2 class="text-xl font-semibold mb-2">2) When Refunds May Apply</h2>
          <p class="mb-2">
            Refunds may be available in the following limited circumstances:
          </p>
          <ul class="list-disc ml-6 space-y-1">
            <li>
              <strong>Event canceled (not rescheduled):</strong> If an event is
              canceled entirely and not rescheduled, you may be eligible for a
              refund to your original payment method.
            </li>
            <li>
              <strong>Tickets not delivered / invalid tickets:</strong> If you
              do not receive valid tickets or are denied entry due to ticket
              validity issues, we will work to provide replacement tickets or a
              full refund if a replacement is not possible.
            </li>
            <li>
              <strong>Duplicate/incorrect charges:</strong> If you were charged
              incorrectly or multiple times for the same order, we will
              investigate and correct the issue.
            </li>
          </ul>
        </section>

        <section class="border border-gray-300 rounded-lg p-4">
          <h2 class="text-xl font-semibold mb-2">
            3) Rescheduled or Postponed Events
          </h2>
          <p>
            If an event is rescheduled or postponed, your tickets are typically
            valid for the new date. If you cannot attend the new date, options
            may include relisting or reselling your tickets where available and
            permitted by the venue.
          </p>
        </section>

        <section class="border border-gray-300 rounded-lg p-4">
          <h2 class="text-xl font-semibold mb-2">
            4) Non-Refundable Situations
          </h2>
          <p>
            Refunds are not issued for change of plans, travel disruptions,
            weather, late arrival, missed entry, venue policy violations (such
            as dress code or age restrictions), or buyer mistakes regarding the
            wrong date, time, venue, or section.
          </p>
        </section>

        <section class="border border-gray-300 rounded-lg p-4">
          <h2 class="text-xl font-semibold mb-2">5) Refund Timing</h2>
          <p>
            If a refund is approved, it is typically processed to the original
            payment method within 5-10 business days. Please note that the exact
            timing may vary depending on your bank or payment provider.
          </p>
        </section>

        <section class="border border-gray-300 rounded-lg p-4">
          <h2 class="text-xl font-semibold mb-2">6) Contact Support</h2>
          <p>
            To request assistance with an order, please email
            <a
              href="mailto:support@tickitin.com"
              class="text-blue-600 font-medium ml-1"
              >support@tickitin.com</a
            >. Include your Order ID, event name/date, and the email address
            used at checkout.
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
