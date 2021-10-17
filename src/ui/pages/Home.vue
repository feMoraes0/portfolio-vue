<template>
  <main class="page">
    <section class="grid">
      <WelcomeCard class="logo" />
      <WelcomeCard class="nav" />
      <WelcomeCard class="logo-2" />

      <div class="card content">content</div>
      <div class="card sidenav">sidenav</div>
      <div class="card advert">advert</div>
    </section>
  </main>
</template>

<script>
import WelcomeCard from '@/ui/components/WelcomeCard.vue';

export default {
  name: 'Home',
  components: {
    WelcomeCard,
  },
};
</script>
