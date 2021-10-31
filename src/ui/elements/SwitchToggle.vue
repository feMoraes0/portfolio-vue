<template>
  <div class="switch" @click="changeToggle">
    <div
      class="slider"
      :class="{off: !isOn}"
    />
  </div>
</template>

<script>
export default {
  name: 'SwitchToggle',
  props: {
    isOn: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    changeToggle() {
      this.$emit('changeToggle');
    },
  },
};
</script>

<style lang="scss" scoped>
.switch {
  width: 55px;
  height: 30px;
  border-radius: 20px;

  div.slider {
    position: relative;
    top: 4px;
    left: 4px;
    height: 22px;
    width: 22px;
    border-radius: 100%;

    &.off {
      transform: translateX(25px);
    }
  }
}
</style>
