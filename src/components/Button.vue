<template>
  <button @click="onClick">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    onClick: {
      type: Function,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  background-color: $color-button;
  border: none;
  border-radius: 10px;
  font-size: 1.1rem;
  font-weight: 700;
  line-height: 1.5rem;
  letter-spacing: 0.1em;
  padding: 10px 35px;
}
</style>
