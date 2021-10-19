<template>
  <Card class="welcome-card">
    <h1 class="title-card">Hey, dude!</h1>
    <p class="content-text">
      Thanks for visit my website/portfolio. I hope that you enjoy
      the experience and learn more about me and my projects. Any improvement,
      suggestion or invites, contact me.
    </p>
  </Card>
</template>

<script>
import Card from '@/ui/elements/Card.vue';

export default {
  name: 'WelcomeCard',
  components: {
    Card,
  },
};
</script>

<style lang="scss" scoped>
.welcome-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-area: welcome-card;

  h1 {
    margin-bottom: 15px;
  }
}
</style>
