<template>
  <section>
    <Lottie
      :options="defaultOptions"
      :width="300"
      :height="300"
  />
  </section>
</template>

<script>
import Lottie from 'vue-lottie';
import * as Loading from '../../assets/animations/lottie-loading.json';

export default {
  name: 'Loading',
  components: {
    Lottie,
  },
  data() {
    return {
      defaultOptions: { animationData: Loading.default, loop: true, autoplay: true },
    };
  },
  methods: {
    handleAnimation(anim) {
      console.log(anim);
    },
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
