<template>
  <Card class="count-card">
    <p>more than</p>
    <h1>{{ counter.toString() }}</h1>
    <p>{{ subtitle }}</p>
  </Card>
</template>

<script>
import Card from '@/ui/elements/Card.vue';

export default {
  components: {
    Card,
  },
  props: {
    counter: {
      type: Number,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.count-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-area: count-card;

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
