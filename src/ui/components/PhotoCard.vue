<template>
  <Card class="photo">
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
.photo {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #85C5E5;

  img {
    height: 240px;
  }
}
</style>
