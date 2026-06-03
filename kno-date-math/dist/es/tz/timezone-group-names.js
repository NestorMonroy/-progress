import { timezones } from './timezones';
/**
 * A function that returns a list of grouped timezone names.
 *
 * @return - Returns a list of grouped timezone names.
 *
 * @example
 * ```ts-no-run
 * import '@progress/kno-date-math/timezones/europe-berlin';
 * import '@progress/kno-date-math/timezones/europe-sofia';
 *
 * timezoneGroupNames(); // ['(GMT+01:00) Amsterdam, Berlin, ...', '(GMT+02:00) Sofia, Tallinn...']
 * ```
 */
export var timezoneGroupNames = function () {
    var groups = Object.keys(timezones.titles).reduce(function (tmp, t) {
        var group = timezones.titles[t].group;
        tmp[group] = group;
        return tmp;
    }, {});
    return Object.keys(groups);
};
