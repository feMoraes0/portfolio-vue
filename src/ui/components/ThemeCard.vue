<template>
  <Card class="theme small">
    <div
      v-for="(theme, index) in themes"
      :key={index}
      @click="updateSelected(index)"
      class="color-selector light-theme"
      :class="[theme.name, { active: theme.isActive }]"
    />
  </Card>
</template>

<script>
import Card from '@/ui/elements/Card.vue';

export default {
  name: 'ThemeCard',
  components: {
    Card,
  },
  data: () => ({
    themes: [
      {
        name: 'light-theme',
        isActive: true,
      },
      {
        name: 'dark-theme',
        isActive: false,
      },
      {
        name: 'blue-theme',
        isActive: false,
      },
      {
        name: 'red-theme',
        isActive: false,
      },
    ],
  }),
  methods: {
    updateSelected(position) {
      this.themes.forEach((theme, index) => {
        // eslint-disable-next-line no-param-reassign
        theme.isActive = false;

        if (index === position) {
          // eslint-disable-next-line no-param-reassign
          theme.isActive = true;
        }
      });
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

  .color-selector {
    width: 53px;
    height: 53px;
    border-radius: 100%;
    padding: 4px;

    &::after {
      content: '';
      position: absolute;
      width: 57px;
      height: 57px;
      margin-top: -9px;
      margin-left: -9px;
      border-radius: 100%;
      border: 2px solid transparent;
      background-color: transparent;
      z-index: +2;
    }

    &.light-theme {
      background-image: linear-gradient(to top left, #ffffff, #e9e9e9);

      &.active::after {
        border: 3px solid black;
      }
    }

    &.dark-theme {
      background-image: linear-gradient(to top left, #000000, #1a1a1a);

       &.active::after {
        border: 3px solid #ffffff;
      }
    }

    &.blue-theme {
      background-image: linear-gradient(to top left, #002473, #006abc);

       &.active::after {
        border: 3px solid #ffffff;
      }
    }

    &.red-theme {
      background-image: linear-gradient(to top left, #a70000, #ff7b7b);

       &.active::after {
        border: 3px solid #ffffff;
      }
    }
  }
}
</style>
