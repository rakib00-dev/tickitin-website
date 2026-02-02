<script setup>
  import { RouterLink } from "vue-router";
</script>

<template>
  <main class="bg-gray-50 text-gray-800">
    <article class="max-w-7xl mx-auto min-h-screen px-4 py-16">
      <header class="mb-8">
        <h1 class="text-4xl font-bold mb-2">Tickitin Privacy Policy</h1>
        <p class="text-sm text-gray-500">
          Effective Date: <strong>January 15, 2026</strong>
        </p>
      </header>

      <img
        src="/images/privacy_policy/privacy.jpg"
        alt="this is a privacy policy page of tickitin.com image where people holding tickect"
        loading="lazy"
        class="w-full rounded-2xl"
      />

      <section class="mb-6 mt-2 leading-relaxed">
        <p>
          At Tickitin, we value the trust you place in us to handle your
          personal data. This Privacy Policy is designed to provide clear
          transparency into how we collect, utilize, and safeguard your
          information to ensure a secure and personalized experience on our
          Platform
        </p>
      </section>

      <section class="space-y-4 leading-relaxed">
        <section class="border border-gray-300 rounded-lg p-4">
          <h2 class="text-xl font-semibold mb-2">1) Information We Collect</h2>

          <p class="mb-2">We collect information in three primary ways:</p>
          <ul class="list-disc ml-6 space-y-1">
            <li>
              <strong>Information you provide:</strong> such as name, email,
              phone number, account details, support messages, and
              purchase/order information.
            </li>

            <li>
              <strong>Information collected automatically:</strong> device
              identifiers, IP address, browser/app details, usage activity,
              pages viewed, and approximate location derived from IP.
            </li>

            <li>
              <strong>Information from partners:</strong> ticket fulfillment
              status, delivery confirmations, and related event/order metadata
              from sellers, venues, and service providers.
            </li>
          </ul>
        </section>

        <section class="border border-gray-300 rounded-lg p-4">
          <h2 class="text-xl font-semibold mb-2">2) Payments</h2>

          <p class="mb-2">
            Payments are processed by third-party payment processors.
          </p>

          <p>
            Tickitin does not store complete payment card numbers. Payment
            processors may collect payment details to complete transactions and
            for fraud prevention.
          </p>
        </section>

        <section class="border border-gray-300 rounded-lg p-4">
          <h2 class="text-xl font-semibold mb-2">3) How We Use Information</h2>

          <p class="mb-2">We use information to:</p>
          <ul class="list-disc ml-6 space-y-1">
            <li>
              Provide and operate the Platform (account creation, purchases,
              ticket delivery, and customer support).
            </li>

            <li>
              Communicate order updates, confirmations, and service-related
              notices.
            </li>

            <li>Prevent fraud, secure transactions, and enforce our Terms.</li>

            <li>
              Improve features, performance, and user experience (including
              analytics).
            </li>

            <li>
              Comply with legal obligations and respond to lawful requests.
            </li>
          </ul>
        </section>

        <section class="border border-gray-300 rounded-lg p-4">
          <h2 class="text-xl font-semibold mb-2">
            4) How We Share Information
          </h2>

          <p class="mb-2">We may share information with:</p>
          <ul class="list-disc ml-6 space-y-1">
            <li>
              Sellers/partners and fulfillment providers to deliver and validate
              tickets.
            </li>

            <li>
              Service providers (hosting, analytics, communications, customer
              support, fraud prevention).
            </li>

            <li>Payment processors to complete transactions.</li>

            <li>
              Legal/compliance when required by law or to protect rights,
              safety, and integrity.
            </li>
          </ul>
        </section>

        <section class="border border-gray-300 rounded-lg p-4">
          <h2 class="text-xl font-semibold mb-2">
            5) Cookies and Similar Technologies
          </h2>

          <p>
            We use cookies, SDKs, and similar technologies to keep you signed
            in, remember preferences, measure performance, and understand how
            the Platform is used. You can control cookies through your browser
            settings; disabling cookies may impact functionality.
          </p>
        </section>

        <section class="border border-gray-300 rounded-lg p-4">
          <h2 class="text-xl font-semibold mb-2">6) Data Retention</h2>

          <p>
            We retain information for as long as necessary to provide the
            Platform, comply with legal obligations, resolve disputes, and
            enforce agreements. Retention periods vary by data type and legal
            requirements.
          </p>
        </section>

        <section class="border border-gray-300 rounded-lg p-4">
          <h2 class="text-xl font-semibold mb-2">7) Your Choices and Rights</h2>

          <p>
            You can opt out of marketing emails at any time. Depending on where
            you live, you may have rights to request access, correction,
            deletion, or portability of certain personal information, subject to
            legal exceptions.
          </p>
        </section>

        <section class="border border-gray-300 rounded-lg p-4">
          <h2 class="text-xl font-semibold mb-2">8) Security</h2>

          <p>
            We use reasonable administrative, technical, and organizational
            safeguards designed to protect information. No method of
            transmission or storage is 100% secure.
          </p>
        </section>

        <section class="border border-gray-300 rounded-lg p-4">
          <h2 class="text-xl font-semibold mb-2">9) Children's Privacy</h2>

          <p>
            The Platform is not directed to children under 13. We do not
            knowingly collect personal information from children under 13. If
            you believe a child provided information, contact us.
          </p>
        </section>

        <section class="border border-gray-300 rounded-lg p-4">
          <h2 class="text-xl font-semibold mb-2">10) Contact</h2>
          <p>
            Privacy questions:
            <a href="mailto:privacy@tickitin.com" class="text-blue-600 ml-1">
              privacy@tickitin.com
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
