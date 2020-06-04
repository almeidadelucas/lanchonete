const pino = require('pino');

module.exports = pino({
  prettyPrint: {
    colorize: true,
    levelFirst: true,
  },
});
