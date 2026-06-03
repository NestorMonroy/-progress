/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";
import * as i from "react";
import r from "prop-types";
import { DatePicker as s } from "@progress/kno-react-dateinputs";
const t = class t extends i.Component {
  constructor() {
    super(...arguments), this.onChange = (e) => {
      this.props.onFilterChange.call(void 0, {
        nextFilter: { ...this.props.filter, value: e.value }
      });
    };
  }
  /**
   * @hidden
   */
  render() {
    const e = this.props.filter;
    return /* @__PURE__ */ i.createElement(s, { value: e.value || null, onChange: this.onChange, ariaLabel: this.props.ariaLabel });
  }
};
t.propTypes = {
  filter: r.object.isRequired,
  onFilterChange: r.func.isRequired,
  ariaLabel: r.string
};
let o = t;
export {
  o as DateFilter
};
