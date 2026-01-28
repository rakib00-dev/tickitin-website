<script setup lang="ts">
  import ContactForm from "../components/ContactPageComponents/ContactForm.vue";
  import ContactHero from "../components/ContactPageComponents/ContactHero.vue";
  import ContactSupport from "../components/ContactPageComponents/ContactSupport.vue";
  import SupportFAQ from "../components/ContactPageComponents/SupportFAQ.vue";
  import TicketAccess from "../components/ContactPageComponents/TicketAccess.vue";
</script>

<template>
  <ContactHero />
  <ContactSupport />
  <SupportFAQ />
  <TicketAccess />
  <ContactForm />
</template>
