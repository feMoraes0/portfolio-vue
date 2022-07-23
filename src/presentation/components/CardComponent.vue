<template>
  <section class="card">
    <slot />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CardComponent',
});
</script>

<style lang="scss" scoped>
.card {
  border-radius: 1rem;
  color: #222831;
  height: 90vh;
  width: 90vw;
  box-shadow: 0 .5rem 1rem #000;
}
</style>
