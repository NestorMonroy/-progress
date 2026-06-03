/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { MapLayer, MapShapeFeatureCreatedEvent } from '@progress/kno-charts';
import { Group } from '@progress/kno-drawing';
import { Map } from '../Map.js';
import { BaseEvent } from './base-event.js';
/**
 * Fires when a [GeoJSON Feature](https://geojson.org/geojson-spec.html#feature-objects) is created on a shape layer.
 */
export declare class ShapeFeatureCreatedEvent extends BaseEvent implements MapShapeFeatureCreatedEvent {
    /**
     * The original data item for this Feature. Members include `geometries` and `properties`.
     */
    dataItem: any;
    /**
     * The shape layer instance.
     */
    layer: MapLayer;
    /**
     * The group containing feature shape instances.
     */
    group: Group;
    /**
     * A reference to the `dataItem.properties` object.
     */
    properties: any;
    /**
     * @hidden
     */
    constructor(e: MapShapeFeatureCreatedEvent, target: Map);
}
