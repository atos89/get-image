'use strict';

const fs     = require('fs');
const config = require('../config');

export default class FileUtil {
    constructor() {
        // NOOP
    }

    write(filename, mess) {
        fs.appendFile(config.logs + '/' + filename, mess + "\n", (error) => {
            if (error) {
                throw error;
            }
        });
    }
}
