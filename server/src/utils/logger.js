const pino = require('pino')({
  prettyPrint: {
    colorize: true,
    levelFirst: true,
  },
});

module.exports = {
  pino,
};
