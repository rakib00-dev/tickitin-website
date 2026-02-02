<script setup>
  import { RouterLink } from "vue-router";
</script>

<template>
  <main class="bg-gray-50 text-gray-800">
    <article class="max-w-7xl mx-auto min-h-screen px-4 py-16">
      <header class="mb-8">
        <h1 class="text-4xl font-bold mb-2">
          Tickitin Ticket Delivery & Access Policy
        </h1>
        <p class="text-sm text-gray-500">
          Effective Date: <strong>January 15, 2026</strong>
        </p>
      </header>

      <img
        src="/images/privacy_policy/privacy.jpg"
        alt="Tickitin Ticket Delivery and Access Policy Image"
        loading="lazy"
        class="w-full rounded-xl"
      />

      <section class="mb-6 mt-6 leading-relaxed">
        <p>
          This policy explains how tickets are delivered and how to access them
          for entry.
        </p>
      </section>

      <section class="space-y-4 leading-relaxed">
        <section class="border border-gray-300 rounded-lg p-4">
          <h2 class="text-xl font-semibold mb-2">1) Delivery Methods</h2>

          <p class="mb-2">
            Tickets may be delivered by one or more methods, depending on the
            event, venue, and seller/partner:
          </p>
          <ul class="list-disc ml-6 space-y-1">
            <li>Mobile transfer (accept a transfer to your email/account).</li>

            <li>
              Mobile entry / QR code (dynamic barcodes may require in-app or
              wallet access).
            </li>

            <li>
              Email delivery (PDF or link-based delivery where permitted).
            </li>
          </ul>
        </section>

        <section class="border border-gray-300 rounded-lg p-4">
          <h2 class="text-xl font-semibold mb-2">2) Delivery Timing</h2>
          <p>
            Delivery timing varies. Some tickets are available immediately;
            others may be delivered closer to the event (including within 24-72
            hours) depending on venue rules and fulfillment constraints.
          </p>
        </section>

        <section class="border border-gray-300 rounded-lg p-4">
          <h2 class="text-xl font-semibold mb-2">3) Your Responsibilities</h2>
          <p class="mb-2">
            You are responsible for ensuring you can receive and access tickets
            using the required method, including:
          </p>
          <ul class="list-disc ml-6 space-y-1">
            <li>Using the correct email address at checkout. li></li>

            <li>Accepting transfers when required. li></li>

            <li>
              Bringing a compatible mobile device and having sufficient
              battery/connection for entry.
            </li>

            <li>
              Complying with venue policies (ID, entry windows, prohibited
              items).
            </li>
          </ul>
        </section>

        <section class="border border-gray-300 rounded-lg p-4">
          <h2 class="text-xl font-semibold mb-2">
            4) Screenshots and Static Images
          </h2>
          <p>
            Some venues use rotating/dynamic barcodes and may not allow
            screenshots. Use the official mobile entry method provided for your
            order.
          </p>
        </section>

        <section class="border border-gray-300 rounded-lg p-4">
          <h2 class="text-xl font-semibold mb-2">5) Help With Access</h2>
          <p>
            If you have trouble accessing tickets, contact support@tickitin.com
            with your Order ID as soon as possible.
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
