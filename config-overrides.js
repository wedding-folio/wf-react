const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    '@components': 'src/components',
    '@screens': 'src/screens',
    '@context': 'src/context'
  })(config);

  return config;
};
