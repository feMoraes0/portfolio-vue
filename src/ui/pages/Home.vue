<template>
  <main class="page">
    <section class="grid">
      <CountCard :counter="1.8" subtitle="years of experience" />
      <WelcomeCard />
      <CountCard class="github-card" :counter="210" subtitle="GitHub Stars" />

      <PhotoCard />

      <SocialCard />
      <AboutCard class="about-card"/>

      <ThemeCard />

      <ProjectsCard />
    </section>
  </main>
</template>

<script>
import AboutCard from '@/ui/components/AboutCard.vue';
import SocialCard from '@/ui/components/SocialCard.vue';
import CountCard from '@/ui/components/CountCard.vue';
import WelcomeCard from '@/ui/components/WelcomeCard.vue';
import PhotoCard from '@/ui/components/PhotoCard.vue';
import ProjectsCard from '@/ui/components/ProjectsCard.vue';
import ThemeCard from '../components/ThemeCard.vue';

export default {
  name: 'Home',
  components: {
    AboutCard,
    CountCard,
    SocialCard,
    WelcomeCard,
    PhotoCard,
    ThemeCard,
    ProjectsCard,
  },
};
</script>
