<template>
  <section>
    <h4>
      <span>FullStack developer</span> coding with <a href="/">JavaScript</a> and TypeScript
      and their frameworks/libraries like <span>VueJS,
      ReactJS, React Native, NodeJS </span> and others.
    </h4>
  </section>
</template>

<script>
export default {
  name: 'AboutMe',
};
</script>

<style lang="scss" scoped>
section {
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;

  h4 {
    width: 80%;
    text-align: justify;
    font-size: 1.6rem;
    line-height: 140%;

    span {
      color: $color-black;
    }
  }
}
</style>
