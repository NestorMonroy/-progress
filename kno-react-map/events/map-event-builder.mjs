/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { ZoomStartEvent as m } from "./zoom-start-event.mjs";
import { ZoomEndEvent as a } from "./zoom-end-event.mjs";
import { ShapeMouseLeaveEvent as p } from "./shape-mouse-leave-event.mjs";
import { ShapeMouseEnterEvent as n } from "./shape-mouse-enter-event.mjs";
import { ShapeFeatureCreatedEvent as i } from "./shape-feature-created-event.mjs";
import { ShapeCreatedEvent as E } from "./shape-created-event.mjs";
import { ShapeClickEvent as f } from "./shape-click-event.mjs";
import { ResetEvent as v } from "./reset-event.mjs";
import { PanEvent as s } from "./pan-event.mjs";
import { PanEndEvent as k } from "./pan-end-event.mjs";
import { MarkerCreatedEvent as C } from "./marker-created-event.mjs";
import { MarkerClickEvent as c } from "./marker-click-event.mjs";
import { MarkerActivateEvent as d } from "./marker-activate-event.mjs";
import { MapClickEvent as h } from "./map-click-event.mjs";
import { BeforeResetEvent as M } from "./before-reset-event.mjs";
const r = {
  beforeReset: M,
  mapClick: h,
  markerActivate: d,
  markerClick: c,
  markerCreated: C,
  panEnd: k,
  pan: s,
  reset: v,
  shapeClick: f,
  shapeCreated: E,
  shapeFeatureCreated: i,
  shapeMouseEnter: n,
  shapeMouseLeave: p,
  zoomEnd: a,
  zoomStart: m
};
function T(e, t, o) {
  if (r[e])
    return new r[e](t, o);
}
export {
  T as create
};
