"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeRule = void 0;
var kno_intl_1 = require("@progress/kno-intl");
var utils_1 = require("./utils");
var WEEK_DAYS = {
    0: 'SU',
    1: 'MO',
    2: 'TU',
    3: 'WE',
    4: 'TH',
    5: 'FR',
    6: 'SA'
};
var serializeWeekDayList = function (list) {
    var length = list.length;
    var result = [];
    var valueString;
    for (var idx = 0; idx < length; idx++) {
        var value = list[idx];
        if (typeof value === 'string') {
            valueString = value;
        }
        else {
            valueString = '' + WEEK_DAYS[value.day];
            if (value.offset) {
                valueString = value.offset + valueString;
            }
        }
        result.push(valueString);
    }
    return result.toString();
};
/**
 * @hidden
 *
 * Internal method for serializing a RecurrenceRule instance to string.
 */
var serializeRule = function (rrule, _timezone) {
    if (!rrule || !rrule.freq) {
        return null;
    }
    var weekStart = rrule.weekStart;
    var rruleString = 'FREQ=' + rrule.freq.toUpperCase();
    var exdates = '';
    var start = '';
    var end = '';
    var until = rrule.until;
    if (rrule.interval > 1) {
        rruleString += ';INTERVAL=' + rrule.interval;
    }
    if (rrule.count) {
        rruleString += ';COUNT=' + rrule.count;
    }
    if (until) {
        rruleString += ';UNTIL=' + (0, kno_intl_1.toString)(until.toTimezone('Etc/UTC'), 'yyyyMMddTHHmmss') + 'Z';
    }
    if (rrule.byMonth) {
        rruleString += ';BYMONTH=' + rrule.byMonth.join(',');
    }
    if (rrule.byWeekNumber) {
        rruleString += ';BYWEEKNO=' + rrule.byWeekNumber.join(',');
    }
    if (rrule.byYearDay) {
        rruleString += ';BYYEARDAY=' + rrule.byYearDay.join(',');
    }
    if (rrule.byMonthDay) {
        rruleString += ';BYMONTHDAY=' + rrule.byMonthDay.join(',');
    }
    if (rrule.byWeekDay) {
        rruleString += ';BYDAY=' + serializeWeekDayList(rrule.byWeekDay);
    }
    if (rrule.byHour) {
        rruleString += ';BYHOUR=' + rrule.byHour.join(',');
    }
    if (rrule.byMinute) {
        rruleString += ';BYMINUTE=' + rrule.byMinute.join(',');
    }
    if (rrule.bySecond) {
        rruleString += ';BYSECOND=' + rrule.bySecond.join(',');
    }
    if (rrule.bySetPosition) {
        rruleString += ';BYSETPOS=' + rrule.bySetPosition.join(',');
    }
    if (weekStart !== undefined) {
        rruleString += ';WKST=' + WEEK_DAYS[weekStart];
    }
    if (rrule.start) {
        start = 'DTSTART' + (0, utils_1.serializeDates)([rrule.start]);
    }
    if (rrule.end) {
        end = 'DTEND' + (0, utils_1.serializeDates)([rrule.end]);
    }
    if (rrule.exceptionDates) {
        exdates = 'EXDATE' + (0, utils_1.serializeDates)(rrule.exceptionDates);
    }
    if (start || end || exdates) {
        rruleString = start + end + exdates + 'RRULE:' + rruleString;
    }
    return rruleString;
};
exports.serializeRule = serializeRule;
