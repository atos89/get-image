'use strict';

import Logger from '../Utils/Logger';

const execute = function () {
    const logger = new Logger();
    logger.info('Logger.info() start.');
    logger.info('Logger.info() done.');

    logger.notice('Logger.notice() start.');
    logger.notice('Logger.notice() done.');

    logger.warning('Logger.warning() start.');
    logger.warning('Logger.warning() done.');

    logger.error('Logger.error() start.');
    logger.error('Logger.error() done.');

    logger.writeLog('Logger.writeLog() start.');
    logger.writeLog('Logger.writeLog() done.');
}

module.exports = {
    execute: execute
};
