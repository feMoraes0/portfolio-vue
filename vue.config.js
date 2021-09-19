module.exports = {
  chainWebpack: (config) => {
    config
      .plugin('html')
      .tap((args) => {
        // eslint-disable-next-line no-param-reassign
        args[0].title = 'Fernando Moraes';
        return args;
      });
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/scss/_theme.scss";',
      },
    },
  },
};
