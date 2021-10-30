<template>
  <Card class="social-card small">
    <a href="/">
      <Email />
    </a>
    <a href="/">
      <Linkedin />
    </a>
    <a href="/">
      <Github />
    </a>
  </Card>
</template>

<script>
import Card from '@/ui/elements/Card.vue';
import Email from '@/assets/icons/email.svg';
import Github from '@/assets/icons/github.svg';
import Linkedin from '@/assets/icons/linkedin.svg';

export default {
  name: 'SocialCard',
  components: {
    Card,
    Email,
    Github,
    Linkedin,
  },
};
</script>

<style lang="scss" scoped>
.social-card {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  grid-area: social-card;
}
</style>
