'use strict';

import FileUtil from './FileUtil';

const chalk  = require('chalk');
const fs     = require('fs');
const config = require('../config');

export default class Logger {
    constructor() {
        this.chalk = {
            info:    chalk.cyan,
            notice:  chalk.green,
            warning: chalk.yellow,
            error:   chalk.red
        };

        this.logPrefix = {
            info:    '   [ info ] ',
            notice:  ' [ notice ] ',
            warning: '[ warning ] ',
            error:   '  [ error ] '
        };
    }

    info(mess) {
        this.display(this.chalk.info(this.logPrefix.info + mess));
    }

    notice(mess) {
        this.display(this.chalk.notice(this.logPrefix.notice + mess));
    }

    warning(mess) {
        this.display(this.chalk.warning(this.logPrefix.warning + mess));
    }

    error(mess) {
        this.display(this.chalk.error(this.logPrefix.error + mess));
    }

    display(mess) {
        console.log(mess);
    }

    writeLog(mess) {
        const fileUtil = new FileUtil();
        fileUtil.write('execute.log', mess);
    }
}
