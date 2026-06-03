/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const y = (r) => typeof r != "string" ? !1 : r.startsWith("--") || r.startsWith("var(") && r.endsWith(")"), c = (r, s) => {
  if (!y(r))
    return r;
  const e = s || document.documentElement, f = getComputedStyle(e);
  let a;
  if (r.startsWith("var(") && r.endsWith(")")) {
    a = r.slice(4, -1).trim();
    const l = a.indexOf(",");
    l > -1 && (a = a.substring(0, l).trim());
  } else if (r.startsWith("--"))
    a = r;
  else
    return r;
  return f.getPropertyValue(a).trim() || r;
}, u = (r, s) => {
  if (!r || typeof r != "object")
    return r;
  const e = { ...r };
  return typeof r.color == "string" && (e.color = c(r.color, s)), e;
}, t = (r, s) => Array.isArray(r) ? r.map((e) => u(e, s)) : r, i = (r, s) => {
  if (!r || typeof r != "object")
    return r;
  const e = { ...r };
  return typeof r.color == "string" && (e.color = c(r.color, s)), e;
}, b = (r, s) => r && (Array.isArray(r) ? r.map((e) => i(e, s)) : i(r, s)), o = (r, s) => {
  if (!r || typeof r != "object")
    return r;
  const e = { ...r };
  return typeof r.color == "string" && (e.color = c(r.color, s)), Array.isArray(r.colors) && (e.colors = t(r.colors, s)), r.pointer && (e.pointer = b(r.pointer, s)), r.scale && typeof r.scale == "object" && (e.scale = { ...r.scale }, Array.isArray(r.scale.ranges) && (e.scale.ranges = t(r.scale.ranges, s)), r.scale.labels && typeof r.scale.labels == "object" && (e.scale.labels = { ...r.scale.labels }, typeof r.scale.labels.color == "string" && (e.scale.labels.color = c(r.scale.labels.color, s))), r.scale.majorTicks && typeof r.scale.majorTicks == "object" && (e.scale.majorTicks = { ...r.scale.majorTicks }, typeof r.scale.majorTicks.color == "string" && (e.scale.majorTicks.color = c(r.scale.majorTicks.color, s))), r.scale.minorTicks && typeof r.scale.minorTicks == "object" && (e.scale.minorTicks = { ...r.scale.minorTicks }, typeof r.scale.minorTicks.color == "string" && (e.scale.minorTicks.color = c(r.scale.minorTicks.color, s)))), e;
};
export {
  y as isCssVariable,
  u as resolveColorRangeVariables,
  t as resolveColorsArray,
  c as resolveCssVariable,
  o as resolveGaugeColorsVariables,
  b as resolvePointerColorsVariables,
  i as resolvePointerVariables
};
