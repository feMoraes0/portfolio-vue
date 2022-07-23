<template>
  <span class="label">
    {{ text }}
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LabelComponent',
  props: {
    text: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.label {
  background-color: #F05454;
  border-radius: 1rem;
  color: #222831;
  font-size: 1.6rem;
  padding: 1rem 3rem;
}
</style>
