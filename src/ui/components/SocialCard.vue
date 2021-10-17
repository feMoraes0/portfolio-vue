<template>
  <Card class="social-card">
    <a href="/">
      <img src="@/assets/icons/email.svg" alt="email">
    </a>
    <a href="/">
      <img src="@/assets/icons/linkedin.svg" alt="linkedin">
    </a>
    <a href="/">
      <img src="@/assets/icons/github.svg" alt="github">
    </a>
  </Card>
</template>

<script>
import Card from '@/ui/elements/Card.vue';

export default {
  name: 'SocialCard',
  components: {
    Card,
  },
};
</script>

<style lang="scss" scoped>
.social-card {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
}
</style>
