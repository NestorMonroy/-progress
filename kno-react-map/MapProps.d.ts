/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { MapOptions } from '@progress/kno-charts';
import { WebMcpProps } from '@progress/kno-react-common';
import { BeforeResetEvent, MapClickEvent, MarkerActivateEvent, MarkerClickEvent, MarkerCreatedEvent, PanEndEvent, PanEvent, ResetEvent, ShapeClickEvent, ShapeCreatedEvent, ShapeFeatureCreatedEvent, ShapeMouseEnterEvent, ShapeMouseLeaveEvent, ZoomEndEvent, ZoomStartEvent } from './common/events';
import * as React from 'react';
/**
 * Represents the props of the knoReact Map component.
 */
export interface MapProps extends MapOptions {
    /**
     * Represents the `dir` HTML attribute.
     *
     * @example
     * ```jsx
     * <Map dir="rtl" />
     * ```
     */
    dir?: string;
    /**
     * The styles that are applied to the component.
     *
     * @example
     * ```jsx
     * <Map style={{ height: '500px' }} />
     * ```
     */
    style?: React.CSSProperties;
    /**
     * Sets additional CSS classes to the component.
     *
     * @example
     * ```jsx
     * <Map className="custom-map-class" />
     * ```
     */
    className?: string;
    /**
     * @hidden
     */
    children?: any;
    /**
     * Fires when the Map is about to refresh. You can use the event to prevent the refresh of the Map in specific cases.
     */
    onRefresh?: (mapOptions: any, mapInstance: any) => void;
    /**
     * Fires immediately before the map is reset. This event is typically used for cleanup by layer implementers.
     */
    onBeforeReset?: (event: BeforeResetEvent) => void;
    /**
     * Fires when the user clicks on the map.
     */
    onMapClick?: (event: MapClickEvent) => void;
    /**
     * Fires when a marker has been displayed and has a DOM element assigned.
     */
    onMarkerActivate?: (event: MarkerActivateEvent) => void;
    /**
     * Fires when a marker has been clicked or tapped.
     */
    onMarkerClick?: (event: MarkerClickEvent) => void;
    /**
     * Fires when a marker has been created and is about to be displayed.
     *
     * Cancelling the event prevents the marker from being shown.
     */
    onMarkerCreated?: (event: MarkerCreatedEvent) => void;
    /**
     * Fires after the map viewport has been moved.
     */
    onPanEnd?: (event: PanEndEvent) => void;
    /**
     * Fires while the map viewport is being moved.
     */
    onPan?: (event: PanEvent) => void;
    /**
     * Fires when the map is reset.
     *
     * This typically occurs on initial load and after a zoom/center change.
     */
    onReset?: (event: ResetEvent) => void;
    /**
     * Fires when a shape is clicked or tapped.
     */
    onShapeClick?: (event: ShapeClickEvent) => void;
    /**
     * Fires when a shape is created, but is not rendered yet.
     */
    onShapeCreated?: (event: ShapeCreatedEvent) => void;
    /**
     * Fires when a [GeoJSON Feature](https://geojson.org/geojson-spec.html#feature-objects) is created on a shape layer.
     */
    onShapeFeatureCreated?: (event: ShapeFeatureCreatedEvent) => void;
    /**
     * Fires when the mouse enters a shape.
     *
     * > This event fires reliably only for shapes that have set fill color.
     * > The opacity can still be set to 0 so the shapes appear to have no fill.
     */
    onShapeMouseEnter?: (event: ShapeMouseEnterEvent) => void;
    /**
     * Fires when the mouse leaves a shape.
     *
     * > This event fires reliably only for shapes that have set fill color.
     * > The opacity can still be set to 0 so the shapes appear to have no fill.
     */
    onShapeMouseLeave?: (event: ShapeMouseLeaveEvent) => void;
    /**
     * Fires when the map zoom level is about to change.
     *
     * Cancelling the event prevents the user action.
     */
    onZoomStart?: (event: ZoomStartEvent) => void;
    /**
     * Fires when the map zoom level has changed.
     */
    onZoomEnd?: (event: ZoomEndEvent) => void;
    /**
     * Enables Web MCP tool registration for this component.
     * Requires a parent `WebMcpProvider` from `@progress/kno-react-webmcp`.
     */
    webMcp?: boolean | WebMcpProps;
}
