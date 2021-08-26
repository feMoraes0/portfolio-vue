<template>
  <div id="app">
    <transition name="slide-fade" mode="out-in" appear>
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>
