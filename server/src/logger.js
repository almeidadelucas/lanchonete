const logger = require('pino')({
  prettyPrint: {
    colorize: true,
    levelFirst: true,
  },
});

module.exports.info = message => logger.info(message);
module.exports.error = message => logger.error(message);
