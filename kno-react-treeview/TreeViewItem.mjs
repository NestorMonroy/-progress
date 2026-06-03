/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as i from "react";
import { withIdHOC as l, classNames as n, Draggable as p, kendoThemeMaps as m, hasChildren as o, IconWrap as d, isItemExpandedAndWithChildren as I, treeIdUtils as u } from "@progress/kno-react-common";
import { chevronDownIcon as f, chevronLeftIcon as b, chevronRightIcon as k } from "@progress/kno-svg-icons";
import { Reveal as g } from "@progress/kno-react-animation";
import { DOM_KNO_ITEM_ID_FIELD as x, DOM_KNO_TREEVIEW_GUID_FIELD as v } from "./utils/consts.mjs";
import { getNodePosition as C } from "./utils/utils.mjs";
const { sizeMap: E } = m, S = i.createContext(
  (r) => r
), a = class a extends i.Component {
  constructor() {
    super(...arguments), this.onItemContentClick = (e) => {
      e.target.closest(".k-treeview-toggle") || (this.props.checkboxes && !this.disabled && !e.target.closest(".k-checkbox") && this.props.onCheckChange(e, this.item, this.itemId), this.props.onItemClick(e, this.item, this.itemId));
    }, this.onCheckChange = (e) => {
      this.props.onCheckChange(e, this.item, this.itemId);
    }, this.onExpandChange = (e) => {
      this.props.onExpandChange(e, this.item, this.itemId);
    }, this.onPress = (e) => {
      this.props.onPress(e.event, this.item, this.itemId);
    }, this.onDrag = (e) => {
      this.props.onDrag(e.event, this.item, this.itemId);
    }, this.onRelease = (e) => {
      this.props.onRelease(e.event, this.item, this.itemId);
    }, this.onContextMenu = (e) => {
      this.props.onContextMenu(e, this.item, this.itemId);
    }, this.assignDraggableMeta = (e) => {
      e && (e[x] = this.props.itemId, e[v] = this.props.treeGuid);
    };
  }
  render() {
    const e = this.renderItemInPart(), t = this.props.itemId.split("_").length;
    return /* @__PURE__ */ i.createElement(
      "li",
      {
        className: n("k-treeview-item"),
        style: { "--kno-treeview-level": t },
        tabIndex: this.tabIndex,
        role: "treeitem",
        "aria-expanded": this.ariaExpanded,
        "aria-selected": this.ariaSelected,
        "aria-checked": this.ariaChecked,
        "aria-disabled": this.disabled ? !0 : void 0,
        ref: (s) => {
          this.itemElement = s;
        }
      },
      /* @__PURE__ */ i.createElement(
        "span",
        {
          className: n("k-treeview-item-content", {
            "k-focus": this.props.focusedItemId === this.itemId,
            "k-selected": this.fieldsSvc.selected(this.item),
            "k-disabled": this.disabled,
            "k-touch-action-none": this.props.draggable
          }),
          ref: this.assignDraggableMeta,
          onClick: this.onItemContentClick
        },
        this.renderExpandIcon(),
        this.renderCheckbox(),
        this.props.draggable ? /* @__PURE__ */ i.createElement(p, { onPress: this.onPress, onDrag: this.onDrag, onRelease: this.onRelease }, e) : e
      ),
      this.renderSubitemsWithAnimation()
    );
  }
  componentDidMount() {
    const e = this.props.focusedItemId, t = this.itemId;
    e && e === t && this.props.onFocusDomElNeeded(this.itemElement), this.checkboxElement && (this.checkboxElement.indeterminate = this.fieldsSvc.checkIndeterminate(this.item));
  }
  componentDidUpdate(e) {
    const t = this.props.focusedItemId;
    if (t && t !== e.focusedItemId && t === this.itemId && this.props.onFocusDomElNeeded(this.itemElement), this.checkboxElement) {
      const s = this.fieldsSvc.checkIndeterminate(this.item);
      this.checkboxElement.indeterminate !== s && (this.checkboxElement.indeterminate = s);
    }
  }
  renderCheckbox() {
    if (this.props.checkboxes) {
      const e = this.props.size, t = !!this.fieldsSvc.checked(this.item);
      return /* @__PURE__ */ i.createElement("span", { className: n("k-checkbox-wrap") }, /* @__PURE__ */ i.createElement(
        "input",
        {
          type: "checkbox",
          className: n("k-checkbox", {
            [`k-checkbox-${E[e] || e}`]: e,
            "k-disabled": this.disabled,
            "k-checked": t
          }),
          "aria-label": this.item.text,
          checked: t,
          id: this.props.id,
          tabIndex: -1,
          onChange: this.onCheckChange,
          ref: (s) => {
            this.checkboxElement = s;
          }
        }
      ));
    }
  }
  renderExpandIcon() {
    return this.props.expandIcons && // If it is explicitly said that the item has children (even not loaded yet)
    // or if the item actually has children, then render the icon.
    (this.fieldsSvc.hasChildren(this.item) || o(this.item, this.fieldsSvc.getChildrenField())) && // Allowing the toggle-button even with `disabled=true` might be a valid case!
    // Re-evaluate the classes bellow if such scenario occurs
    /* @__PURE__ */ i.createElement(
      "span",
      {
        className: n("k-treeview-toggle", { "k-disabled": this.disabled }),
        onClick: this.onExpandChange
      },
      /* @__PURE__ */ i.createElement(d, { ...this.getIconProps() })
    );
  }
  renderSubitemsIfApplicable() {
    const e = this.fieldsSvc.children(this.item);
    return I(this.item, this.fieldsSvc) ? /* @__PURE__ */ i.createElement("ul", { className: "k-treeview-group", role: "group" }, e.map((t, s) => /* @__PURE__ */ i.createElement(
      c,
      {
        item: t,
        position: C(s, e),
        itemId: u.createId(s, this.itemId),
        treeGuid: this.props.treeGuid,
        animate: this.props.animate,
        focusedItemId: this.props.focusedItemId,
        tabbableItemId: this.props.tabbableItemId,
        fieldsService: this.props.fieldsService,
        itemUI: this.props.itemUI,
        checkboxes: this.props.checkboxes,
        ariaMultiSelectable: this.props.ariaMultiSelectable,
        onItemClick: this.props.onItemClick,
        onFocusDomElNeeded: this.props.onFocusDomElNeeded,
        draggable: this.props.draggable,
        onPress: this.props.onPress,
        onDrag: this.props.onDrag,
        onRelease: this.props.onRelease,
        expandIcons: this.props.expandIcons,
        iconField: this.props.iconField,
        onExpandChange: this.props.onExpandChange,
        onCheckChange: this.props.onCheckChange,
        onContextMenu: this.props.onContextMenu,
        key: s,
        size: this.props.size,
        disabled: this.disabled,
        isRtl: this.props.isRtl
      }
    ))) : void 0;
  }
  renderSubitemsWithAnimation() {
    const e = this.renderSubitemsIfApplicable(), t = this.fieldsSvc.children(this.item).length > 0;
    return this.props.animate && t ? /* @__PURE__ */ i.createElement(g, { transitionEnterDuration: 200, transitionExitDuration: 200, style: { display: "block" } }, e) : e;
  }
  renderItemInPart() {
    const e = this.props.iconField, t = e && this.item[e];
    return /* @__PURE__ */ i.createElement("span", { className: n("k-treeview-leaf"), onContextMenu: this.onContextMenu }, t && /* @__PURE__ */ i.createElement(d, { name: t.name, icon: t }), /* @__PURE__ */ i.createElement("span", { className: "k-treeview-leaf-text" }, this.props.itemUI ? /* @__PURE__ */ i.createElement(this.props.itemUI, { item: this.item, itemHierarchicalIndex: this.itemId }) : this.fieldsSvc.text(this.item)));
  }
  get fieldsSvc() {
    return this.props.fieldsService;
  }
  get itemId() {
    return this.props.itemId;
  }
  get item() {
    return this.props.item;
  }
  get tabIndex() {
    return (this.props.focusedItemId || this.props.tabbableItemId) === this.itemId ? 0 : -1;
  }
  get ariaExpanded() {
    return this.fieldsSvc.hasChildren(this.item) || o(this.item, this.fieldsSvc.getChildrenField()) ? !!this.fieldsSvc.expanded(this.item) : void 0;
  }
  get disabled() {
    return this.props.disabled || this.fieldsSvc.disabled(this.item);
  }
  get ariaChecked() {
    if (this.props.checkboxes)
      return this.fieldsSvc.checked(this.item) ? "true" : this.fieldsSvc.checkIndeterminate(this.item) ? "mixed" : "false";
  }
  get ariaSelected() {
    if (this.fieldsSvc.selected(this.item))
      return !0;
    if (this.props.ariaMultiSelectable)
      return this.disabled ? void 0 : !1;
  }
  getIconProps() {
    const e = this.fieldsSvc.expanded(this.item);
    return e && !o(this.item, this.fieldsSvc.getChildrenField()) ? { name: "loading" } : e ? { name: "chevron-down", icon: f } : {
      name: this.props.isRtl ? "chevron-left" : "chevron-right",
      icon: this.props.isRtl ? b : k
    };
  }
};
a.defaultProps = {
  position: "top",
  iconField: "svgIcon"
};
let h = a;
const c = l(
  i.forwardRef((r, e) => {
    const s = i.useContext(S).call(void 0, r);
    return /* @__PURE__ */ i.createElement(h, { ref: e, ...s });
  })
);
c.displayName = "TreeViewItem";
export {
  c as TreeViewItem,
  S as TreeViewItemPropsContext
};
