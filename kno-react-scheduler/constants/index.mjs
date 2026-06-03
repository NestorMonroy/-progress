/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { ZonedDate as o } from "@progress/kno-date-math";
import { MS_PER_DAY as M } from "@progress/kno-date-math";
const t = 1e3, c = 60 * t, s = 1, _ = 7, D = [{}], R = {
  index: 0,
  resources: []
}, r = new Date(1900, 0, 1), n = new Date(2099, 11, 31);
o.fromLocalDate(r), o.fromLocalDate(n);
var E = /* @__PURE__ */ ((e) => (e[e.create = 0] = "create", e[e.update = 1] = "update", e[e.remove = 2] = "remove", e))(E || {});
export {
  s as BORDER_WIDTH,
  E as DATA_ACTION,
  _ as DAYS_IN_WEEK_COUNT,
  R as DEFAULT_GROUP,
  D as EMPTY_RESOURCE,
  n as MAX_DATE,
  r as MIN_DATE,
  M as MS_PER_DAY,
  c as MS_PER_MINUTE,
  t as MS_PER_SECOND
};
