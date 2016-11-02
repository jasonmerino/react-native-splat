/* eslint-disable global-require */
module.exports = {
  get Button() { return require('./Library/Button').default; },
  get TextInput() { return require('./Library/TextInput').default; },
};
/* eslint-enable global-require */
