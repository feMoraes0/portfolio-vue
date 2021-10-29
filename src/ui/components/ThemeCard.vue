<template>
  <Card class="theme small">
    <span>Light</span>
    <SwitchToggle
      @changeToggle="updateToggle"
      :isOn="isLightTheme"
    />
    <span>Dark</span>
  </Card>
</template>

<script>
import Card from '@/ui/elements/Card.vue';
import SwitchToggle from '@/ui/elements/SwitchToggle.vue';

export default {
  name: 'ThemeCard',
  components: {
    Card,
    SwitchToggle,
  },
  data: () => ({
    isLightTheme: true,
  }),
  methods: {
    updateToggle() {
      this.isLightTheme = !this.isLightTheme;
      const mainContainer = document.querySelector('#main-container');
      mainContainer.classList = [];
      mainContainer.classList.add((!this.isLightTheme) ? 'dark-theme' : 'light-theme');
    },
  },
};
</script>

<style lang="scss" scoped>
.theme {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  grid-area: theme-card;

  span {
    font-size: 18px;
  }
}
</style>
