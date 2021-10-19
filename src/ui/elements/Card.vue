<template>
  <div class="card">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Card',
};
</script>

<style lang="scss" scoped>
div.card {
  background-color: $card-background;
  min-height: 270px;
  border-radius: 16px;
  padding: 40px;

  &.small {
    min-height: 135px;
  }
}
</style>
