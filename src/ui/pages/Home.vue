<template>
  <main class="page">
    <section class="grid">
      <WelcomeCard class="logo" />
      <WelcomeCard class="nav" />
      <WelcomeCard />

      <WelcomeCard class="photo" />

      <SocialCard />
      <AboutCard class="about-card"/>

      <SocialCard class="footer" />

      <WelcomeCard class="advert" />
    </section>
  </main>
</template>

<script>
import AboutCard from '@/ui/components/AboutCard.vue';
import SocialCard from '@/ui/components/SocialCard.vue';
import WelcomeCard from '@/ui/components/WelcomeCard.vue';

export default {
  name: 'Home',
  components: {
    AboutCard,
    SocialCard,
    WelcomeCard,
  },
};
</script>
