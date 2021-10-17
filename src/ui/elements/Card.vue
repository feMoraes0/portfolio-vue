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
  background-color: $white-color;
  min-height: 300px;
  border-radius: 16px;
  padding: 40px;
}
</style>
