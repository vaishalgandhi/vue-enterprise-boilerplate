module.exports = {
  // https://github.com/vuejs/vue-cli/tree/master/packages/@vue/babel-preset-app
  presets: [
    [
      '@vue/app',
      {
        polyfills: ['es.promise', 'es.symbol', 'es.error.cause'],
      },
    ],
  ],
}
