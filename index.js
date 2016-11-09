/* eslint-disable global-require */
module.exports = {
  get Button() { return require('./Library/Button').default; },
  get Scene() { return require('./Library/Scene').default; },
  get TextInput() { return require('./Library/TextInput').default; },
};
/* eslint-enable global-require */
