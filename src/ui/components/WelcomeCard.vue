<template>
  <Card class="welcome-card">
    <h1>Hey, dude!</h1>
    <p>
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
  width: 100%;
  grid-area: 'welcome-card';

  h1 {
    font-size: 32px;
    font-weight: 800;
    margin-bottom: 15px;
  }

  p {
    position: relative;
    font-size: 14px;
    line-height: 20px;
  }
}
</style>
