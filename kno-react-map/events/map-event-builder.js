/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const a=require("./zoom-start-event.js"),o=require("./zoom-end-event.js"),E=require("./shape-mouse-leave-event.js"),s=require("./shape-mouse-enter-event.js"),v=require("./shape-feature-created-event.js"),c=require("./shape-created-event.js"),i=require("./shape-click-event.js"),u=require("./reset-event.js"),p=require("./pan-event.js"),k=require("./pan-end-event.js"),C=require("./marker-created-event.js"),d=require("./marker-click-event.js"),h=require("./marker-activate-event.js"),q=require("./map-click-event.js"),m=require("./before-reset-event.js"),t={beforeReset:m.BeforeResetEvent,mapClick:q.MapClickEvent,markerActivate:h.MarkerActivateEvent,markerClick:d.MarkerClickEvent,markerCreated:C.MarkerCreatedEvent,panEnd:k.PanEndEvent,pan:p.PanEvent,reset:u.ResetEvent,shapeClick:i.ShapeClickEvent,shapeCreated:c.ShapeCreatedEvent,shapeFeatureCreated:v.ShapeFeatureCreatedEvent,shapeMouseEnter:s.ShapeMouseEnterEvent,shapeMouseLeave:E.ShapeMouseLeaveEvent,zoomEnd:o.ZoomEndEvent,zoomStart:a.ZoomStartEvent};function l(e,r,n){if(t[e])return new t[e](r,n)}exports.create=l;
