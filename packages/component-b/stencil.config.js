exports.config = {
  bundles: [
    { components: ['component-b'] }
  ],
  collections: [
    { name: '@stencil/router' },
    { name: '@stephenwf/component-a' }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '../**/**'
}
