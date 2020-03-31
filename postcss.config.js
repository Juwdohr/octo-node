module.exports = {
  ident: 'postcss',
  plugins: [
    require('postcss-import')('/src/app'),
    require('postcss-normalize'),
    require('postcss-nesting'),
    require('postcss-custom-properties'),
    require('postcss-url'),
    require('postcss-preset-env')({
      browsers: 'last 2 versions',
      stage: 2
    }),
  ]
}
