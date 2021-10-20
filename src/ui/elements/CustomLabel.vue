<template>
  <span class="label">
    {{ text }}
  </span>
</template>

<script>
export default {
  name: 'CustomLabel',
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.label {
  background: $white-color;
  font-size: 16px;
  padding: 5px 25px;
  border-radius: 5px;
  text-transform: capitalize;
}
</style>
