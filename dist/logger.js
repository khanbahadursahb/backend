"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.error = exports.verbose = exports.debug = exports.warn = exports.log = exports.info = void 0;
const winston_1 = require("winston");
const path_1 = __importDefault(require("path"));
const PROJECT_ROOT = path_1.default.join(__dirname, "..");
const options = {
    file: {
        level: "info",
        filename: `info.log`,
        handleExceptions: true,
        json: true,
        maxsize: 5242880, // 5MB
        maxFiles: 5,
        colorize: true,
        format: winston_1.format.combine(winston_1.format.timestamp(), winston_1.format.json()),
    },
    console: {
        level: "debug",
        handleExceptions: true,
        json: false,
        colorize: true,
        format: winston_1.format.combine(winston_1.format.timestamp(), winston_1.format.json()),
    },
};
const logger = (0, winston_1.createLogger)({
    transports: [
        new winston_1.transports.File(options.file),
        new winston_1.transports.Console(options.console),
    ],
    exitOnError: false, // do not exit on handled exceptions
});
function formatLogArguments(args) {
    args = Array.prototype.slice.call(args);
    const stackInfo = getStackInfo(1);
    if (stackInfo) {
        const calleeStr = `(${stackInfo.relativePath}:${stackInfo.line})`;
        if (typeof args[0] === "string") {
            args[0] = args[0] + " " + calleeStr;
        }
        else {
            args.unshift(calleeStr);
        }
    }
    return args;
}
function getStackInfo(stackIndex) {
    const stacklist = new Error().stack.split("\n").slice(3);
    // http://code.google.com/p/v8/wiki/JavaScriptStackTraceApi
    // do not remove the regex expresses to outside of this method (due to a BUG in node.js)
    const stackReg = /at\s+(.*)\s+\((.*):(\d*):(\d*)\)/gi;
    const stackReg2 = /at\s+()(.*):(\d*):(\d*)/gi;
    const s = stacklist[stackIndex] || stacklist[0];
    const sp = stackReg.exec(s) || stackReg2.exec(s);
    if (sp && sp.length === 5) {
        return {
            method: sp[1],
            relativePath: path_1.default.relative(PROJECT_ROOT, sp[2]),
            line: sp[3],
            pos: sp[4],
            file: path_1.default.basename(sp[2]),
            stack: stacklist.join("\n"),
        };
    }
}
const info = (...args) => {
    logger.info.apply(logger, formatLogArguments(args));
};
exports.info = info;
const log = (...args) => {
    logger.log.apply(logger, formatLogArguments(args));
};
exports.log = log;
const warn = (...args) => {
    logger.warn.apply(logger, formatLogArguments(args));
};
exports.warn = warn;
const debug = (...args) => {
    logger.debug.apply(logger, formatLogArguments(args));
};
exports.debug = debug;
const verbose = (...args) => {
    logger.verbose.apply(logger, formatLogArguments(args));
};
exports.verbose = verbose;
const error = (...args) => {
    logger.error.apply(logger, formatLogArguments(args));
};
exports.error = error;
exports.default = logger;
