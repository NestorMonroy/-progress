"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeDates = void 0;
var kno_intl_1 = require("@progress/kno-intl");
/**
 * @hidden
 */
var serializeDates = function (values) {
    if (!values || values.length === 0) {
        return '';
    }
    var timezone = values[0].timezone;
    var isUTC = timezone === 'Etc/UTC';
    var suffix = isUTC ? 'Z' : '';
    var parts = values.map(function (val) {
        return (0, kno_intl_1.formatDate)(val, 'yyyyMMddTHHmmss') + suffix;
    });
    var header = timezone && !isUTC ? ';TZID=' + timezone : '';
    return header + ':' + parts.join(',') + ' ';
};
exports.serializeDates = serializeDates;
