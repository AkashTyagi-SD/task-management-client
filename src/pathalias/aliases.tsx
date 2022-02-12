const aliases = (prefix = `./src`) => ({
  global: `${prefix}/global`,
  config: `${prefix}/config`,
  components: `${prefix}/components`,
  util: `${prefix}/util`,
});

module.exports = aliases;
