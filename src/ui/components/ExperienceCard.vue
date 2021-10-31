<template>
  <Card class="experience-card">
    <p>more than</p>
    <h1>1.8</h1>
    <p>years of experience</p>
  </Card>
</template>

<script>
import Card from '@/ui/elements/Card.vue';

export default {
  components: {
    Card,
  },
};
</script>

<style lang="scss" scoped>
.experience-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-area: experience-card;

  p {
    font-size: 20px;
    line-height: 20px;
  }

  h1 {
    margin: 10px auto;
    font-size: 75px;
    line-height: 75px;
  }
}
</style>
