<template>
  <section>
    <div ref="loading" />
  </section>
</template>

<script>
import lottie from 'lottie-web';
import * as Loading from '../../assets/animations/lottie-loading.json';

export default {
  name: 'Loading',
  mounted() {
    lottie.loadAnimation({
      container: this.$refs.loading,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: Loading.default,
    });
  },
};
</script>

<style style="scss" scoped>
section {
  width: 100%;
  height: calc(100vh - 200px);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
