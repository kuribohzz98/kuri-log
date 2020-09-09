"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogTagError = exports.LogTagDanger = exports.LogTagWarn = exports.LogTagSuccess = exports.LogTagInfo = exports.LogTag = exports.LogError = exports.LogDanger = exports.LogWarn = exports.LogSuccess = exports.LogInfo = exports.Log = void 0;
const constants_1 = require("./constants");
const helper_1 = require("./helper");
const TAG = Symbol("TAG");
const LOG_LEVEL = Symbol("LOG_LEVEL");
const self = this;
function Log(...args) {
    __LogBuilder__({
        messages: args
    });
}
exports.Log = Log;
function LogInfo(...args) {
    __LogBuilder__({
        messages: args,
        colorText: constants_1.ColorCode.FgBrightCyan
    });
}
exports.LogInfo = LogInfo;
function LogSuccess(...args) {
    __LogBuilder__({
        messages: args,
        colorText: constants_1.ColorCode.FgBrightGreen
    });
}
exports.LogSuccess = LogSuccess;
function LogWarn(...args) {
    __LogBuilder__({
        messages: args,
        colorText: constants_1.ColorCode.FgBrightYellow
    });
}
exports.LogWarn = LogWarn;
function LogDanger(...args) {
    __LogBuilder__({
        messages: args,
        colorText: constants_1.ColorCode.FgBrightRed
    });
}
exports.LogDanger = LogDanger;
function LogError(...args) {
    __LogBuilder__({
        messages: ['ERROR:', ...args],
        colorText: constants_1.ColorCode.FgRed,
        icon: '📕'
    });
}
exports.LogError = LogError;
function LogTag(tag, ...args) {
    __LogTagSetting__(tag);
    Log(args);
}
exports.LogTag = LogTag;
function LogTagInfo(tag, ...args) {
    __LogTagSetting__(tag);
    LogInfo(args);
}
exports.LogTagInfo = LogTagInfo;
function LogTagSuccess(tag, ...args) {
    __LogTagSetting__(tag);
    LogSuccess(args);
}
exports.LogTagSuccess = LogTagSuccess;
function LogTagWarn(tag, ...args) {
    __LogTagSetting__(tag);
    LogWarn(args);
}
exports.LogTagWarn = LogTagWarn;
function LogTagDanger(tag, ...args) {
    __LogTagSetting__(tag);
    LogDanger(args);
}
exports.LogTagDanger = LogTagDanger;
function LogTagError(tag, ...args) {
    __LogTagSetting__(tag);
    LogError(args);
}
exports.LogTagError = LogTagError;
function __LogTagSetting__(tag) {
    self[TAG] = tag;
    self[LOG_LEVEL] = 4;
}
function __LogBuilder__(builderData) {
    const __nameFile__ = helper_1.getLogFileName(self[LOG_LEVEL] || 3);
    const color = builderData.colorText ? builderData.colorText : constants_1.ColorCode.FgWhite;
    const log = `[${helper_1.getTimeLog()}]` + color +
        (self[TAG] ? ' - ' + `[${constants_1.ColorCode.Reverse}${self[TAG]}${constants_1.ColorCode.Reset}${color}]` : ' ') +
        (builderData.icon ? ' ' + builderData.icon + ' ' : ' ') +
        builderData.messages.join(' ') + constants_1.ColorCode.Reset;
    console.log(log, `(${__nameFile__})`);
    self[TAG] = null;
    self[LOG_LEVEL] = null;
}
//# sourceMappingURL=LogFunction.js.map