/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as e from "react";
import { guid as t } from "@progress/kno-react-common";
import { HeaderSelectionCell as r } from "@progress/kno-react-data-tools";
class s extends e.Component {
  constructor() {
    super(...arguments), this._inputId = t();
  }
  /**
   * @hidden
   */
  render() {
    return /* @__PURE__ */ e.createElement(r, { inputId: this._inputId, ...this.props });
  }
}
export {
  s as TreeListHeaderSelectionCell
};
