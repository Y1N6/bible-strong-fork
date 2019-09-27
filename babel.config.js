module.exports = function(api) {
  api.cache(true)
  return {
    presets: [
      'babel-preset-expo',
      {
        lazyImports: true
      }
    ],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '~assets': './src/assets',
            '~common': './src/common',
            '~features': './src/features',
            '~helpers': './src/helpers',
            '~navigation': './src/navigation',
            '~redux': './src/redux',
            '~themes': './src/themes'
          }
        }
      ],
      '@babel/plugin-proposal-optional-chaining'
    ]
  }
}
