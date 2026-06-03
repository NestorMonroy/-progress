/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";
import { load as e } from "./load.mjs";
const n = (o) => {
  const { locale: r, data: t, children: a } = o;
  return r && e(t), a;
};
export {
  n as IntlDataProvider
};
