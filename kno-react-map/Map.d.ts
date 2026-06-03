/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { default as PropTypes } from 'prop-types';
import { InstanceObserver, Map as KendoMap } from '@progress/kno-charts';
import { MapProps } from './MapProps';
import { MapContextType } from './MapContext.js';
import { DomEvent } from './events/dom-event.js';
import { geometry } from '@progress/kno-drawing';
import { Extent, Location, MapLayer } from './common/map-types';
import * as React from 'react';
/**
 * Represents the [knoReact Map component](components/map).
 *
 * @remarks
 * Supported children components are: {@link MapLayers}.
 */
export declare class Map extends React.Component<MapProps, {}> {
    /**
     * @hidden
     */
    static propTypes: {
        dir: PropTypes.Requireable<string>;
    };
    /**
     * @hidden
     */
    static defaultProps: {};
    /**
     * @hidden
     */
    mapInstance: KendoMap | null;
    /**
     * @hidden
     */
    get element(): HTMLDivElement;
    protected _element: HTMLDivElement | null;
    protected optionsStore: any;
    protected optionsUnsubscriber: Function;
    protected observersStore: any;
    protected mapObserver: InstanceObserver;
    protected childrenObserver: InstanceObserver;
    protected contextValue: MapContextType;
    private readonly showLicenseWatermark;
    private readonly licenseMessage?;
    constructor(props: MapProps);
    private iconsType;
    private svgIcons;
    /**
     * @hidden
     */
    componentDidMount(): void;
    /**
     * @hidden
     */
    componentWillUnmount(): void;
    /**
     * @hidden
     */
    componentDidUpdate(prevProps: MapProps): void;
    /**
     * @hidden
     */
    render(): any;
    /**
     * @hidden
     */
    getMapOptions(): any;
    /**
     * The marker layers instances.
     */
    get layers(): MapLayer[];
    /**
     * Gets the extent (visible area) of the map.
     */
    get extent(): Extent | undefined;
    /**
     * Sets the extent (visible area) of the map.
     */
    set extent(extent: Extent | undefined);
    /**
     * Detects the size of the container and redraws the Map.
     * Resizing is automatic unless you set the `resizeRateLimit` option to `0`.
     */
    resize(): void;
    /**
     * Retrieves the size of the visible portion of the map.
     *
     * @returns The size (width and height) of the visible portion of the map.
     */
    viewSize(): {
        width: number;
        height: number;
    };
    /**
     * Returns the event coordinates relative to the map element. Offset coordinates are not synchronized to a particular location on the map.
     *
     * @param e The mouse event.
     * @returns The event coordinates relative to the map element.
     */
    eventOffset(e: any): geometry.Point | undefined;
    /**
     * Retrieves projected (layer) coordinates that correspond to this mouse event.
     * Layer coordinates are absolute and change only when the zoom level is changed.
     *
     * @param e The mouse event.
     * @returns The projected (layer) coordinates that correspond to this event.
     */
    eventToLayer(e: any): geometry.Point | undefined;
    /**
     * Retrieves the geographic location that correspond to this mouse event.
     *
     * @param e The mouse event.
     * @returns The geographic location that correspond to this mouse event.
     */
    eventToLocation(e: any): geometry.Point | undefined;
    /**
     * Retrieves relative (view) coordinates that correspond to this mouse event.
     * Layer elements positioned on these coordinates will appear under the mouse cursor.
     * View coordinates are no longer valid after a map reset.
     *
     * @param e The mouse event.
     * @returns The relative (view) coordinates that correspond to this mouse event.
     */
    eventToView(e: any): geometry.Point | undefined;
    /**
     * Transforms layer (projected) coordinates to geographical location.
     *
     * @param point The layer (projected) coordinates. An array argument is assumed to be in x, y order.
     * @param zoom Optional. Assumed zoom level. Defaults to the current zoom level.
     * @returns The geographic location that corresponds to the layer coordinates.
     */
    layerToLocation(point: geometry.Point | number[], zoom?: number): Location | undefined;
    /**
     * Returns the layer (projected) coordinates that correspond to a geographical location.
     *
     * @param location The geographic location. An array argument is assumed to be in [Latitude, Longitude] order.
     * @param zoom Optional. Assumed zoom level. Defaults to the current zoom level.
     * @returns The layer (projected) coordinates.
     */
    locationToLayer(location: Location | number[], zoom?: number): geometry.Point | undefined;
    /**
     * Returns the view (relative) coordinates that correspond to a geographical location.
     *
     * @param location The geographic location. An array argument is assumed to be in [Latitude, Longitude] order.
     * @returns The view coordinates that correspond to a geographical location.
     */
    locationToView(location: Location | number[]): geometry.Point | undefined;
    /**
     * Returns the geographical location that correspond to the view (relative) coordinates.
     *
     * @param point The view coordinates. An array argument is assumed to be in x, y order.
     * @param zoom Optional. Assumed zoom level. Defaults to the current zoom level.
     * @returns The geographic location that corresponds to the view coordinates.
     */
    viewToLocation(point: geometry.Point | number[], zoom?: number): Location | undefined;
    /**
     * Load markers in the Map. This method will clear the current markers and show the new ones.
     *
     * @param newMarkers An array of markers.
     */
    loadMarkers(newMarkers: any[]): void;
    /**
     * @hidden
     */
    refresh(): void;
    /**
     * @hidden
     */
    instantiateCoreMap(): void;
    /**
     * @hidden
     */
    trigger(name: string, e: any): boolean;
    /**
     * @hidden
     */
    requiresHandlers(names: string[]): boolean;
    /**
     * @hidden
     */
    triggerDomEvent<T>(name: string, e: DomEvent<T>): boolean;
    /**
     * @hidden
     */
    onInit: (e: any) => void;
    /**
     * @hidden
     */
    onRender: (e: any) => void;
    /**
     * @hidden
     */
    onMapMouseLeave: (e: React.MouseEvent<HTMLDivElement>) => void;
    private setIcons;
}
