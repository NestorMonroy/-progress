/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { getLicenseStatus as u, validatePackage as d } from "@progress/kno-licensing";
import { canUseDOM as g } from "./canUseDOM.mjs";
const h = ["tlk.com", "progress.com", "stackblitz.io", "csb.app"], k = "components/getting-started/?utm_medium=product&utm_source=console&utm_campaign=dt_kendoreact_freemium", o = /* @__PURE__ */ new Map(), f = () => {
  const t = Array.from(o, ([e, n]) => `- ${e}: ${Array.from(n).join(", ") || "all"}`).join(`
`);
  console.group("[WARN][Telerik and Kno UI Licensing] knoReact"), console.warn(
    `License check was triggered by these knoReact components/features
${t}
See the full list of components here: ${k}`
  ), console.groupEnd(), o.clear();
}, _ = (t, e) => {
  const n = d(t), c = h.some(
    (s) => {
      var r;
      return (r = globalThis.document) == null ? void 0 : r.location.hostname.endsWith(s);
    }
  );
  if (!n && g && e)
    if (o.size === 0 && setTimeout(f, 1e3), o.has(e.component)) {
      const s = o.get(e.component) || [];
      o.set(e.component, /* @__PURE__ */ new Set([...e.features || [], ...s]));
    } else
      o.set(e.component, e.features || []);
  return n || c;
}, v = (t) => u(t).isLicenseValid, a = /* @__PURE__ */ new WeakMap(), M = (t) => {
  var m;
  if (a.has(t))
    return a.get(t);
  const { version: e, productName: n } = t, c = u(t), s = c.message, r = c.licenseType, p = (m = c.expiration) == null ? void 0 : m.toDateString(), l = s && "code" in s ? s.code : void 0, i = {
    ...s,
    code: l,
    licenseType: r,
    version: e,
    productName: (s == null ? void 0 : s.productName) || n,
    expiration: p
  };
  return a.set(t, i), i;
};
export {
  M as getLicenseMessage,
  v as hasValidLicense,
  _ as validatePackage
};
