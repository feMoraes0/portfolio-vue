<template>
  <main class="page">
    <section class="grid">
      <ExperienceCard />
      <WelcomeCard class="nav" />
      <WelcomeCard />

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
import ExperienceCard from '@/ui/components/ExperienceCard.vue';
import WelcomeCard from '@/ui/components/WelcomeCard.vue';
import PhotoCard from '@/ui/components/PhotoCard.vue';
import ProjectsCard from '@/ui/components/ProjectsCard.vue';
import ThemeCard from '../components/ThemeCard.vue';

export default {
  name: 'Home',
  components: {
    AboutCard,
    ExperienceCard,
    SocialCard,
    WelcomeCard,
    PhotoCard,
    ThemeCard,
    ProjectsCard,
  },
};
</script>
