"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTimeLogTime = exports.getTimeLogDate = exports.getTimeLog = exports.getLogFileName = void 0;
const constants_1 = require("./constants");
function getLogFileName(logLevel = 3) {
    const __nameFile__ = traceCaller(logLevel).split('\\').pop().split(':');
    return constants_1.ColorCode.FgBlue + __nameFile__[0] + constants_1.ColorCode.Reset + `${constants_1.ColorCode.FgYellow}:${__nameFile__[1]}${constants_1.ColorCode.Reset}`;
}
exports.getLogFileName = getLogFileName;
function getTimeLog() {
    return new Date().toLocaleString();
}
exports.getTimeLog = getTimeLog;
function getTimeLogDate() {
    return new Date().toLocaleDateString();
}
exports.getTimeLogDate = getTimeLogDate;
function getTimeLogTime() {
    return new Date().toLocaleTimeString();
}
exports.getTimeLogTime = getTimeLogTime;
function traceCaller(n) {
    if (isNaN(n) || n < 0)
        n = 1;
    n += 1;
    var s = (new Error()).stack, a = s.indexOf('\n', 5);
    while (n--) {
        a = s.indexOf('\n', a + 1);
        if (a < 0) {
            a = s.lastIndexOf('\n', s.length);
            break;
        }
    }
    let b = s.indexOf('\n', a + 1);
    if (b < 0)
        b = s.length;
    a = Math.max(s.lastIndexOf(' ', b), s.lastIndexOf('/', b));
    b = s.lastIndexOf(':', b);
    s = s.substring(a + 1, b);
    return s;
}
//# sourceMappingURL=helper.js.map