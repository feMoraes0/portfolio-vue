<template>
  <div>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Card',
};
</script>

<style lang="scss" scoped>
div {
  background-color: $card-background;
  min-height: 300px;
  border-radius: 16px;
  padding: 40px;

  &.small {
    min-height: 150px;
  }
}
</style>
