<template>
  <footer>
    <button @click="navigateTo('previous')">{{ getFooterData.previous }}</button>
    <button @click="navigateTo('next')">{{ getFooterData.next }}</button>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data: () => ({
    pages: {
      home: {
        previous: '',
        next: 'About',
      },
      about: {
        previous: 'Home',
        next: 'Project',
      },
    },
    // font-family: 'Fredoka One', cursive;
    // font-family: 'Kaushan Script', cursive;
    // font-family: 'Montserrat', sans-serif;
  }),
  computed: {
    getFooterData() {
      const currentRouteName = this.$route.name.toLowerCase();
      return this.pages[currentRouteName];
    },
  },
  methods: {
    navigateTo(direction) {
      const currentRouteName = this.$route.name.toLowerCase();
      let pageToNavigate = null;

      if (direction === 'previous') {
        pageToNavigate = this.pages[currentRouteName].previous;
      } else if (direction === 'next') {
        pageToNavigate = this.pages[currentRouteName].next;
      }

      if (pageToNavigate) {
        this.$router.push({ name: pageToNavigate });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 96vw;
  border-top: 1px dashed #393939;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 2vw;
  padding: 20px 0;

  button {
    cursor: pointer;
    border: none;
    background-color: transparent;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.75rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #FFFFFF;
  }
}
</style>
