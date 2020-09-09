"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const constants_1 = require("./constants");
const helper_1 = require("./helper");
class Logger {
    constructor(options) {
        this.__initOptionDefault__(options);
    }
    __initOptionDefault__(options) {
        const __optionsDefault__ = {
            colorText: constants_1.ColorCode.FgWhite,
            timeLog: true
        };
        this.__optionsDefault__ = !options ? __optionsDefault__ : Object.assign({}, __optionsDefault__, options);
    }
    __LogBuilder__(builderData) {
        let logBuilder = '';
        const __nameFile__ = helper_1.getLogFileName(4);
        if (builderData.timeLog || (builderData.timeLogTime && builderData.timeLogDate))
            logBuilder += `[${helper_1.getTimeLog()}]`;
        else if (builderData.timeLogTime)
            logBuilder += `[${helper_1.getTimeLogTime()}]`;
        else
            logBuilder += `[${helper_1.getTimeLogDate()}]`;
        const __color = builderData.colorText ? builderData.colorText : constants_1.ColorCode.FgWhite;
        logBuilder += `${__color} `;
        if (builderData.tag)
            logBuilder += '- ' + `[${builderData.tag}${constants_1.ColorCode.Reset}${__color}]`;
        if (builderData.icon)
            logBuilder += ' ' + builderData.icon;
        logBuilder += ' ' + builderData.messages.join(' ') + constants_1.ColorCode.Reset;
        ;
        console.log(logBuilder, `(${__nameFile__})`);
    }
    __LogExcute__(colorText, paramOne, ...args) {
        let options;
        let messages = typeof paramOne == 'object' ? args : [paramOne, ...args];
        if (typeof paramOne == 'object') {
            options = Object.assign({}, this.__optionsDefault__, paramOne, {
                messages,
                colorText
            });
        }
        this.__LogBuilder__(options ? options : Object.assign(Object.assign({}, this.__optionsDefault__), { messages,
            colorText }));
    }
    Log(paramOne, ...args) {
        const colorText = constants_1.ColorCode.FgWhite;
        this.__LogExcute__(colorText, paramOne, ...args);
    }
    LogInfo(paramOne, ...args) {
        const colorText = constants_1.ColorCode.FgBrightCyan;
        this.__LogExcute__(colorText, paramOne, ...args);
    }
    LogSuccess(paramOne, ...args) {
        const colorText = constants_1.ColorCode.FgBrightGreen;
        this.__LogExcute__(colorText, paramOne, ...args);
    }
    LogWarn(paramOne, ...args) {
        const colorText = constants_1.ColorCode.FgBrightYellow;
        this.__LogExcute__(colorText, paramOne, ...args);
    }
    LogDanger(paramOne, ...args) {
        const colorText = constants_1.ColorCode.FgBrightRed;
        this.__LogExcute__(colorText, paramOne, ...args);
    }
}
exports.Logger = Logger;
//# sourceMappingURL=LogBuilder.js.map