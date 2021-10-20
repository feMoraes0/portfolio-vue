<template>
  <Card class="projects-card">
    <header>
      <div class="infos">
        <CustomLabel text="web" />
        <h3 class="title">Nike Web</h3>
        <h4 class="description">
          A project to practice VueJS basic (components, props, binding, etc...) and animations.
        </h4>
      </div>
      <div class="controls">
        <button>
          <img src="@/assets/icons/arrow-left.svg" alt="arrow-left">
        </button>
        <button>
          <img src="@/assets/icons/arrow-right.svg" alt="arrow-right">
        </button>
      </div>
    </header>
    <img src="https://raw.githubusercontent.com/feMoraes0/project-prints/master/nike-web/print-001.png" alt="project">
  </Card>
</template>

<script>
import Card from '@/ui/elements/Card.vue';
import CustomLabel from '@/ui/elements/CustomLabel.vue';

export default {
  name: 'ProjectsCard',
  components: {
    Card,
    CustomLabel,
  },
};
</script>

<style lang="scss" scoped>
.projects-card {
  grid-area: projects-card;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  header {
    display: flex;
    flex-direction: row;

    div.infos {
      h3.title {
        margin-top: 20px;
        font-weight: 600;
        font-size: 25px;
        line-height: 25px;
      }

      h4.description {
        margin-top: 10px;
        font-weight: 400;
        font-size: 16px;
        line-height: 18px;
        width: 60%;
      }
    }

    div.controls {
      display: flex;
      flex-direction: row;
      align-items: center;

      button {
        padding: 10px;
        height: 50px;
        width: 50px;
        border-radius: 20px;
        border: none;
        background-color: $white-color;

        &:first-child {
          margin-right: 8px;
        }

        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  img {
    position: relative;
    height: 350px;
    align-self: center;
    border-radius: 20px;
  }
}
</style>
