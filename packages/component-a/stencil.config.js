exports.config = {
  namespace: 'stephenwf',
  generateDistribution: true,
  publicPath: 'stencil',
  bundles: [
    { components: ['component-a'] }
  ],
  collections: [
    { name: '@stencil/router' }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
