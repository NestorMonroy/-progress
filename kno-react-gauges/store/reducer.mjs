/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const a = (t, e) => {
  if (e.type)
    switch (e.type) {
      case "set":
        return u.themeItem(t, e);
      case "push":
        return { ...t, ...e.payload };
      default:
        return t;
    }
  else
    return {};
}, d = (t, e) => {
  if (e.type)
    switch (e.type) {
      case "add":
        return [...t, e.payload];
      case "remove":
        return t.filter((l) => l !== e.payload);
      default:
        return t;
    }
  else
    return [];
}, u = {
  configurationItem(t, e) {
    return {
      ...t,
      [e.gaugeKey]: e.payload
    };
  },
  collectionConfigurationItem(t, e) {
    let l = !1;
    const [o, n] = e.gaugeCollectionIdxKey.split("_"), p = t[o].map((s, r) => parseInt(n, 10) === r ? (l = !0, e.payload) : s);
    return l === !1 && p.splice(parseInt(n, 10), 0, e.payload), {
      ...t,
      [o]: p
    };
  },
  themeItem(t, e) {
    let l = {};
    const o = { ...l, ...t }, { field: n, value: p } = e.payload, s = n.split(".");
    let r = s.shift();
    for (; s.length > 0; )
      l = l[r] = l[r] || {}, r = s.shift();
    return l[r] = p, o;
  }
};
export {
  d as observersReducer,
  a as themeReducer
};
