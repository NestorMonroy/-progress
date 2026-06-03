"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseDateTime = exports.parseDateTimeList = void 0;
var utils_1 = require("../utils");
/**
 * @hidden
 */
var parseDateTimeList = function (rule) {
    var pairs = rule.split(';');
    var values = [];
    var timezone = null;
    for (var idx = 0; idx < pairs.length; idx++) {
        var _a = pairs[idx].split(':'), property = _a[0], _b = _a[1], val = _b === void 0 ? '' : _b;
        var tzIndex = property.indexOf('TZID');
        if (tzIndex !== -1) {
            timezone = property.substring(tzIndex).split('=')[1];
        }
        values = val.split(',').map(function (v) { return (0, utils_1.parseISODate)(v, timezone); });
    }
    if (!values.length || values[0] === null) {
        return null;
    }
    return values;
};
exports.parseDateTimeList = parseDateTimeList;
/**
 * @hidden
 */
var parseDateTime = function (rule) {
    var list = (0, exports.parseDateTimeList)(rule);
    if (list === null) {
        return null;
    }
    return list[0];
};
exports.parseDateTime = parseDateTime;
