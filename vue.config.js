module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/scss/_theme.scss";',
      },
    },
  },
};
