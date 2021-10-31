<template>
  <Card class="photo-card">
    <img src="@/assets/images/user-photo.png" alt="user">
  </Card>
</template>

<script>
import Card from '../elements/Card.vue';

export default {
  name: 'PhotoCard',
  components: {
    Card,
  },
};
</script>

<style lang="scss" scoped>
.photo-card {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-area: photo-card;

  img {
    height: 240px;
  }
}
</style>
