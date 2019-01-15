module.exports = {
  plugins: [
    require("postcss-preset-env")({
      stage: false, // disable all polyfill; only polyfill stuffs in 'features'
      features: { "custom-properties": true }
    })
  ]
};
