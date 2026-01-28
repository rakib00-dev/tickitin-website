<script setup>
  import { RouterLink } from "vue-router";
</script>

<template>
  <main class="min-h-screen bg-gray-50 text-gray-800">
    <article class="max-w-5xl mx-auto px-4 py-16">
      <header class="mb-8">
        <h1 class="text-4xl font-bold mb-2">Tickitin Terms of Service</h1>
        <p class="text-sm text-gray-500">
          Effective Date: <strong>January 15, 2026</strong>
        </p>
      </header>

      <section class="mb-6 leading-relaxed">
        <p>
          These Terms of Service (“Terms”) are a binding agreement between you
          and <strong>Tickitin Experiences LLC</strong> (“Tickitin,” “we,”
          “us”). They govern your access to and use of Tickitin{{ `’` }}s
          websites, mobile applications, and related services (collectively, the
          “Platform”).
        </p>
      </section>

      <section class="space-y-4 leading-relaxed">
        <section class="border border-gray-300 rounded-lg p-4">
          <h2 class="text-xl font-semibold mb-2">Eligibility</h2>
          <p>
            You must be at least 18 years old to create an account and make
            purchases. Users aged 13{{ `–` }}17 may use the Platform only with a
            parent or legal guardian{{ `’` }}s express consent and supervision.
          </p>
        </section>

        <section class="border border-gray-300 rounded-lg p-4">
          <h2 class="text-xl font-semibold mb-2">
            Changes to the Platform and Terms
          </h2>
          <p>
            We may update the Platform and these Terms from time to time.
            Updates are effective when posted. Continued use of the Platform
            constitutes acceptance of the revised Terms.
          </p>
        </section>

        <section class="border border-gray-300 rounded-lg p-4">
          <h2 class="text-xl font-semibold mb-2">Marketplace Disclosure</h2>
          <p>
            Tickitin is a ticket marketplace and event platform. Tickitin is not
            the venue, artist, promoter, or primary ticket issuer unless
            expressly stated. Ticket prices may be above or below face value and
            availability may change quickly.
          </p>
        </section>

        <section class="border border-gray-300 rounded-lg p-4">
          <h2 class="text-xl font-semibold mb-2">Accounts and Security</h2>
          <p>
            You are responsible for maintaining the confidentiality of your
            account credentials and all activity under your account. Suspected
            unauthorized access should be reported to
            <a href="mailto:support@tickitin.com" class="text-blue-600 ml-1">
              support@tickitin.com
            </a>

            .
          </p>
        </section>

        <section class="border border-gray-300 rounded-lg p-4">
          <h2 class="text-xl font-semibold mb-2">
            Social Features and User Interactions
          </h2>
          <p>
            Tickitin may include social features such as messaging, event
            groups, and matchmaking. You are solely responsible for your
            interactions with other users and agree to exercise good judgment.
          </p>
        </section>

        <section class="border border-gray-300 rounded-lg p-4">
          <h2 class="text-xl font-semibold mb-2">
            Community Standards and Prohibited Conduct
          </h2>
          <p>
            You agree not to engage in harassment, fraud, impersonation,
            unlawful behavior, or misuse of the Platform. Violations may result
            in content removal or account termination.
          </p>
        </section>

        <section class="border border-gray-300 rounded-lg p-4">
          <h2 class="text-xl font-semibold mb-2">User Content</h2>
          <p>
            You retain ownership of content you submit but grant Tickitin a
            worldwide, royalty-free license to use it for operating and
            improving the Platform.
          </p>
        </section>

        <section class="border border-gray-300 rounded-lg p-4">
          <h2 class="text-xl font-semibold mb-2">Intellectual Property</h2>
          <p>
            All Platform content and trademarks are owned by Tickitin or its
            licensors and are protected by intellectual property laws.
          </p>
        </section>

        <section class="border border-gray-300 rounded-lg p-4">
          <h2 class="text-xl font-semibold mb-2">
            Payments and Fraud Prevention
          </h2>
          <p>
            Payments are processed through third-party providers. Tickitin may
            cancel or limit transactions to prevent fraud or unauthorized
            activity.
          </p>
        </section>

        <section class="border border-gray-300 rounded-lg p-4">
          <h2 class="text-xl font-semibold mb-2">Disclaimers</h2>
          <p>
            The Platform is provided on an “as is” and “as available” basis
            without warranties of any kind, to the fullest extent permitted by
            law.
          </p>
        </section>

        <section class="border border-gray-300 rounded-lg p-4">
          <h2 class="text-xl font-semibold mb-2">Limitation of Liability</h2>
          <p>
            Tickitin{{ `’` }}s total liability for any claim will not exceed the
            greater of $100 or the amount paid for the applicable order, except
            where prohibited by law.
          </p>
        </section>

        <section class="border border-gray-300 rounded-lg p-4">
          <h2 class="text-xl font-semibold mb-2">Dispute Resolution</h2>
          <p>
            Disputes will be resolved through binding arbitration on an
            individual basis, except where prohibited by law.
          </p>
        </section>

        <section class="border border-gray-300 rounded-lg p-4">
          <h2 class="text-xl font-semibold mb-2">Contact</h2>
          <p>
            Questions about these Terms may be sent to
            <a href="mailto:support@tickitin.com" class="text-blue-600 ml-1">
              support@tickitin.com.
            </a>
            <RouterLink to="/contact-us" class="font-bold !underline">
              Visit Contact</RouterLink
            >
          </p>
        </section>
      </section>
    </article>
  </main>
</template>
