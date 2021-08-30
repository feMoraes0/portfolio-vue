<template>
  <section
    :class="{active: isVisible}"
  >
    <button class="close" @click="close()">Close</button>
    <p>Contact</p>
  </section>
</template>

<script>
export default {
  props: {
    isVisible: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    close() {
      this.$emit('close');
    },
  },
};
</script>

<style lang="scss" scoped>
$margin: 10vh;
$height: 90vh;
$width: calc(100vw - $margin);
$transition-duration: 1.4s;

section {
  position: fixed;
  top: 0vh;
  left: 0vw;
  margin-top: $margin;
  margin-left: $margin;
  height: $height;
  width: $width;
  background-color: $color-white;
  transition: transform $transition-duration ease, opacity $transition-duration ease;
  transform: translate3d(100vw, 90vh, 0);
  opacity: 1;
  z-index: 2;

  .close {
    opacity: 0;
    top: 0;
  }

  &.active {
    transform: translate3d(0, 0, 0);
    opacity: 1;

    .close {
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      opacity: 1;
      position: absolute;
      top: -25px;
      left: 0;
      border: 0;
      background-color: $color-white;
      color: $color-background;
      font-weight: 700;
      padding: 5px 20px;
      cursor: pointer;
      transition:
        opacity $transition-duration ease,
        top $transition-duration * 0.5 ease;
      transition-delay: $transition-duration;
      z-index: 1;

    }
  }
}
</style>
