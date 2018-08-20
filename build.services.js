/* bald *\ \* build services */

const rollup = require("rollup");
const fs = require("fs-extra");

let _errorHandler = (error) => console.error(error);

function _getErrorHandler() {
    return _errorHandler;
}

function _setErrorHandler(errorHandler) {
    if (typeof errorHandler === "function") {
        _errorHandler = errorHandler;
        return true;
    }
    return false;
}

function _ensureDirectory(dir) {
    try {
        fs.ensureDirSync(dir);
        return true;
    } catch (err) {
        _errorHandler(err);
        return false;
    }
}

function _removeDirectory(dir) {
    try {
        fs.removeSync(dir);
        return true;
    } catch (err) {
        _errorHandler(err);
        return false;
    }
}

function _copyFile(from, to) {
    try {
        fs.copySync(from, to);
        return true;
    } catch (err) {
        _errorHandler(err);
        return false;
    }
}

function _concatFiles(outputFile, inputFiles, encoding) {
    let fd;
    try {
        fd = fs.openSync(outputFile, "a");
        for (var x in inputFiles) {
            fs.appendFileSync(fd, fs.readFileSync(inputFiles[x], encoding), encoding);
        }
        return true;
    } catch (err) {
        _errorHandler(err);
        return false;
    } finally {
        if (fd !== undefined) {
            fs.closeSync(fd);
        }
    }
}

async function _rollupBundle(inputConfig, outputConfig) {
    let result = false;
    await rollup.rollup(inputConfig).then(bundle => {
        bundle.write(outputConfig);
        result = true;
    });
    return result;
}

module.exports = {
    getErrorHandler: _getErrorHandler,
    setErrorHandler: _setErrorHandler,
    removeDirectory: _removeDirectory,
    ensureDirectory: _ensureDirectory,
    copyFile: _copyFile,
    concatFiles: _concatFiles,
    rollupBundle: _rollupBundle
};
