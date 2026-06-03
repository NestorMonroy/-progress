"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.duration = void 0;
/**
 * Returns a duration between start and end dates.
 *
 * @hidden
 */
var duration = function (start, end) {
    return end.getTime() - start.getTime();
};
exports.duration = duration;
