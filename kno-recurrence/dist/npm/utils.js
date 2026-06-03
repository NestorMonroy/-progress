"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeDayIndex = exports.setDayOfWeek = exports.parseWeekDayList = exports.parseWeekDay = exports.parseISODate = exports.toUTCDateTime = exports.parseArray = exports.acsendingComparer = void 0;
var tslib_1 = require("tslib");
tslib_1.__exportStar(require("./utils/has-modifiers"), exports);
tslib_1.__exportStar(require("./utils/parse-date-time"), exports);
tslib_1.__exportStar(require("./utils/serialize-date-time"), exports);
tslib_1.__exportStar(require("./utils/duration"), exports);
var kno_date_math_1 = require("@progress/kno-date-math");
var kno_intl_1 = require("@progress/kno-intl");
var isOutOfRange = function (value, range) {
    if (!range) {
        return false;
    }
    var start = range.start, end = range.end;
    return value < start || value > end || (value === 0 && start < 0);
};
/**
 * @hidden
 */
var acsendingComparer = function (a, b) { return a - b; };
exports.acsendingComparer = acsendingComparer;
/**
 * @hidden
 */
var parseArray = function (list, range) {
    var result = [];
    for (var idx = 0; idx < list.length; idx++) {
        var value = parseInt(list[idx], 10);
        if (isNaN(value) || isOutOfRange(value, range)) {
            return [];
        }
        result.push(value);
    }
    return result.sort(exports.acsendingComparer);
};
exports.parseArray = parseArray;
var DATE_FORMATS = [
    'yyyyMMddTHHmmssSSSXXX',
    'yyyyMMddTHHmmssXXX',
    'yyyyMMddTHHmmss',
    'yyyyMMddTHHmm',
    'yyyyMMddTHH',
    'yyyyMMdd'
];
/** @hidden */
function toUTCDateTime(localDate) {
    return new Date(Date.UTC(localDate.getFullYear(), localDate.getMonth(), localDate.getDate(), localDate.getHours(), localDate.getMinutes(), localDate.getSeconds(), localDate.getMilliseconds()));
}
exports.toUTCDateTime = toUTCDateTime;
/**
 * @hidden
 */
var parseISODate = function (value, timezone) {
    var parsed = (0, kno_intl_1.parseDate)(value) || (0, kno_intl_1.parseDate)(value, DATE_FORMATS);
    if (!parsed) {
        return null;
    }
    var utcDate = timezone ? toUTCDateTime(parsed) : parsed;
    return kno_date_math_1.ZonedDate.fromUTCDate(utcDate, timezone || 'Etc/UTC');
};
exports.parseISODate = parseISODate;
var WEEK_DAYS_IDX = {
    'SU': kno_date_math_1.Day.Sunday,
    'MO': kno_date_math_1.Day.Monday,
    'TU': kno_date_math_1.Day.Tuesday,
    'WE': kno_date_math_1.Day.Wednesday,
    'TH': kno_date_math_1.Day.Thursday,
    'FR': kno_date_math_1.Day.Friday,
    'SA': kno_date_math_1.Day.Saturday
};
/**
 * @hidden
 */
var parseWeekDay = function (weekDay) { return WEEK_DAYS_IDX[weekDay]; };
exports.parseWeekDay = parseWeekDay;
/**
 * @hidden
 */
var parseWeekDayList = function (weekDays) {
    var result = [];
    for (var idx = 0; idx < weekDays.length; idx++) {
        var value = weekDays[idx];
        var day = (0, exports.parseWeekDay)(value.substring(value.length - 2).toUpperCase());
        if (day === undefined) {
            return [];
        }
        result.push({
            offset: parseInt(value.substring(0, value.length - 2), 10) || 0,
            day: day
        });
    }
    return result;
};
exports.parseWeekDayList = parseWeekDayList;
/**
 * @hidden
 * Sets week day with mutation.
 *
 * XXX: Remove once the recurrence engine is refactored
 */
var setDayOfWeek = function (date, day, dir) {
    if (dir === void 0) { dir = 1; }
    day = ((day - date.getUTCDay()) + (7 * dir)) % 7;
    date.setUTCDate(date.getUTCDate() + day);
};
exports.setDayOfWeek = setDayOfWeek;
/**
 * @hidden
 */
var normalizeDayIndex = function (weekDay, weekStart) {
    return weekDay + (weekDay < weekStart ? 7 : 0);
};
exports.normalizeDayIndex = normalizeDayIndex;
